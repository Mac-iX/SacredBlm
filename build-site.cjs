const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = __dirname;
const dist = path.join(root, 'dist');
const siteUrl = (process.env.SITE_URL || 'https://sacred-bloom-wellness-test-2026.yogamac.chatgpt.site').replace(/\/$/, '');
const routes = ['', 'offerings', 'offering/tantra', 'offering/feminine', 'offering/classical-yoga', 'offering/yoga-nidra', 'offering/yin-yoga', 'offering/aura-cleansing', 'offering/ritual-of-rest', 'schedule', 'event/full-moon-circle', 'event/sunrise-meditation', 'event/feminine-circle', 'event/yoga-nidra-circle', 'about', 'journal', 'contact', 'apothecary'];
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const assetCode = fs.readFileSync(path.join(root, 'assets-data.js'), 'utf8');
const appCode = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function render(route) {
  const nodes = new Map();
  for (const id of ['app', 'meta-description', 'og-title', 'og-description', 'page-canonical', 'page-structured-data']) {
    nodes.set(id, { innerHTML: '', textContent: '', attributes: {}, setAttribute(name, value) { this.attributes[name] = value; } });
  }
  const styles = {};
  const document = {
    title: '',
    body: { className: '', style: { setProperty(name, value) { styles[name] = value; } } },
    getElementById: id => nodes.get(id) || null,
    addEventListener() {}
  };
  const context = {
    URLSearchParams, Date, console, document,
    window: { location: { hash: '', pathname: route ? '/' + route + '/' : '/', search: '', origin: siteUrl }, addEventListener() {}, scrollTo() {} }
  };
  vm.createContext(context);
  vm.runInContext(assetCode, context);
  vm.runInContext(appCode, context);
  const app = nodes.get('app').innerHTML;
  assert(app.includes("<main id='main'>"), route || 'home');
  assert(!app.includes('undefined'), route || 'home');
  const schema = JSON.parse(nodes.get('page-structured-data').textContent);
  assert(schema['@graph'].some(item => item['@type'] === (route === 'about' ? 'AboutPage' : 'WebPage')));
  let html = template.replace(/<title>[\s\S]*?<\/title>/, '<title>' + esc(document.title) + '</title>');
  for (const id of ['meta-description', 'og-title', 'og-description']) {
    html = html.replace(new RegExp('<meta id="' + id + '"[^>]*>'), match => match.replace(/content="[^"]*"/, 'content="' + esc(nodes.get(id).attributes.content) + '"'));
  }
  html = html.replace(/<link id="page-canonical"[^>]*>/, '<link id="page-canonical" rel="canonical" href="' + esc(nodes.get('page-canonical').attributes.href) + '">');
  html = html.replace(/<script type="application\/ld\+json" id="page-structured-data">[\s\S]*?<\/script>/, '<script type="application/ld+json" id="page-structured-data">' + nodes.get('page-structured-data').textContent.replaceAll('<', '\\u003c') + '</script>');
  html = html.replace('<div id="app"></div>', '<div id="app">' + app + '</div>');
  const style = Object.entries(styles).map(([key, value]) => key + ':' + value).join(';');
  html = html.replace('<body>', '<body class="' + esc(document.body.className) + '" style="' + esc(style) + '">');
  return html;
}

fs.mkdirSync(dist, { recursive: true });
for (const name of fs.readdirSync(dist)) fs.rmSync(path.join(dist, name), { recursive: true, force: true });
for (const name of ['styles.css', 'fonts.css', 'assets-data.js', 'app.js', 'FONT-LICENSES.txt']) fs.copyFileSync(path.join(root, name), path.join(dist, name));
fs.cpSync(path.join(root, 'media'), path.join(dist, 'media'), { recursive: true });
const pages = [];
for (const route of routes) {
  const folder = path.join(dist, route);
  fs.mkdirSync(folder, { recursive: true });
  const html = render(route);
  fs.writeFileSync(path.join(folder, 'index.html'), html);
  pages.push({ route, html });
}
for (const { route, html } of pages) {
  for (const match of html.matchAll(/href=['"]([^'"]+)['"]/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const target = href.split(/[?#]/)[0];
    const file = target.endsWith('/') ? path.join(dist, target, 'index.html') : path.join(dist, target);
    assert(fs.existsSync(file), route + ' has a missing internal target: ' + href);
  }
}
assert.equal((pages[0].html.match(/<details class='faq-item'/g) || []).length, 7);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(route => '  <url><loc>' + siteUrl + '/' + (route ? route + '/' : '') + '</loc></url>').join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: ' + siteUrl + '/sitemap.xml\n');
console.log('Built and validated ' + pages.length + ' readable pages, internal links, per-page metadata, structured data, and seven FAQs.');

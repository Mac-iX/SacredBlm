(function () {
  "use strict";

  const A = window.SB_ASSETS;
  const app = document.getElementById("app");
  const offerings = [
    {
      id: "tantra",
      title: "Defining Tantra",
      subtitle: "In Four Weeks",
      cardTitle: "Defining Tantra",
      cardSub: "In Four Weeks",
      icon: "tantra",
      mark: "✧",
      short: "A four-part series on Tantra’s origins, purpose, evolving practice, and place in everyday life.",
      lead: "A four-part series examining the origins of Tantra, its purpose, how it continues to evolve, and practical ways to bring it into daily life.",
      group: true,
      weeks: [
        ["Week 1 · Origins", "Tantric origins, gurus, and the differences between neo-Tantra and classical Tantra."],
        ["Week 2 · Energy", "Chakra systems, nadis, Kundalini, and the relationship of Shiva and Shakti."],
        ["Week 3 · Practice", "Tantric yoga and yogic paths, including yamas and niyamas, kriyas, mantra, bandha, pranayama, and samadhi."],
        ["Week 4 · Integration", "White and red tantric paths, and practical ways to embody Tantra in sustainable daily life."]
      ],
      practice: ["A four-week learning series", "Historical context alongside practical exploration", "Space to connect the ideas with daily life"]
    },
    {
      id: "feminine",
      title: "Feminine Embodiment Circle",
      subtitle: "Gather in Connection",
      cardTitle: "Feminine Embodiment",
      cardSub: "Circle",
      icon: "feminine",
      mark: "✿",
      short: "A monthly online ceremony for inner alignment, community, and connection with Mother Earth.",
      lead: "A ceremony that brings together traditions of women from around the world. The circle centers inner alignment, community connection, and relationship with Mother Earth.",
      group: true,
      practice: ["Meditation, breathwork, yoga, and sound healing", "Restorative practices for release, renewal, and rebalancing", "Monthly online gatherings", "Private circles for birthdays and special occasions, including a tea ceremony"]
    },
    {
      id: "classical-yoga",
      title: "Foundations of Classical Yoga",
      subtitle: "Movement, Breath & Meditation",
      cardTitle: "Foundations of",
      cardSub: "Classical Yoga",
      icon: "classical",
      mark: "◌",
      short: "A grounded study of traditional yoga practices that prepare the body and attention for meditation.",
      lead: "A practice that returns to the wider foundations of yoga: mantra, mudra, pranayama, asana, and meditation. Each element supports a steady, connected practice.",
      group: true,
      practice: ["Begin with mantra and a chosen mudra", "Move through asana with attention to breath and connection", "Close with pranayama and meditation"]
    },
    {
      id: "yoga-nidra",
      title: "Yoga Nidra with Sound Healing",
      subtitle: "A Practice for Deep Rest",
      mark: "☾",
      short: "A guided meditation in a comfortable resting position, accompanied by singing bowls, bells, and flutes.",
      lead: "Yoga Nidra, sometimes called yogic sleep, is a guided meditation practiced while lying comfortably on a mat. The body is invited to soften while awareness stays gently present.",
      group: true,
      practice: ["Settle into a comfortable resting position", "Follow a guided meditation at an unhurried pace", "Close with the resonance of Tibetan singing bowls, bells, flutes, and other instruments", "Available individually and in group settings"]
    },
    {
      id: "yin-yoga",
      title: "Yin with Energy Healing & Aromatherapy",
      subtitle: "Slow Down & Settle In",
      mark: "≈",
      short: "Gentle floor-based postures held long enough for the body to soften, with energy work and aromatherapy.",
      lead: "Move through gentle, floor-based postures and hold each one long enough for the body to soften and release. Yin brings together postures from Hatha yoga with an energetic philosophy informed by Daoist teachings.",
      group: false,
      practice: ["Slow, floor-based postures with longer holds", "A receptive, quiet pace", "Energy healing and aromatherapy woven through the practice", "The notes describe hands-on adjustments; confirm format and preferences before booking"]
    },
    {
      id: "aura-cleansing",
      title: "Aura Cleansing with Sound",
      subtitle: "Sound & Stillness",
      mark: "◎",
      short: "A seated meditation with singing bowls and three rounds of focused sound.",
      lead: "Begin seated in meditation. Once grounded, singing bowls are used to bring sound to the auric field, moving through three rounds with attention to tone, frequency, and the chakras.",
      group: false,
      practice: ["An upright seated meditation to begin", "Three rounds of singing-bowl sound", "Sage or Palo Santo may be used; please share any smoke sensitivities before the session"]
    },
    {
      id: "ritual-of-rest",
      title: "Ritual of Rest",
      subtitle: "Tea, Sound & Rejuvenating Rest",
      mark: "❋",
      short: "A gentle sequence of tea, quiet, breath, sound, and aromatherapy to make room for restorative rest.",
      lead: "We ease into the process slowly, beginning with herbal tea and time to be together in comfortable silence or conversation. From there, meditation and light breathwork support a gradual settling into rest.",
      group: false,
      practice: ["A shared cup of herbal tea at the beginning and end", "Meditation and light breathwork", "Tibetan singing-bowl massage, a technique Raechel studied in Nepal", "Energy healing and aromatherapy woven through the session"]
    }
  ];

  const events = [
    {
      id: "feminine-circle",
      offeringId: "feminine",
      title: "Feminine Embodiment Circle",
      label: "Monthly online circle",
      date: "Next date announced soon",
      description: "A monthly online gathering with meditation, breathwork, yoga, sound healing, and restorative practices. Private circles for birthdays and special occasions can include a tea ceremony.",
      image: A.wallpaperB,
      status: "Date to be confirmed"
    },
    {
      id: "yoga-nidra-circle",
      offeringId: "yoga-nidra",
      title: "Yoga Nidra with Sound Healing",
      label: "Group practice",
      date: "Next date announced soon",
      description: "Rest in a comfortable position for guided Yoga Nidra, then settle into the resonance of singing bowls, bells, flutes, and other instruments. Raechel’s notes describe this practice as available in group settings.",
      image: A.wallpaperA,
      status: "Date to be confirmed"
    },
    {
      id: "full-moon-circle",
      offeringId: "feminine",
      title: "Full Moon Circle",
      label: "Community gathering",
      date: "Details to be confirmed",
      description: "A full moon circle appears in the supplied landing-page reference. Raechel can add the date, format, and final event description when those details are confirmed.",
      image: A.wallpaperB,
      status: "Planning listing"
    },
    {
      id: "sunrise-meditation",
      offeringId: "classical-yoga",
      title: "Sunrise Meditation",
      label: "Group practice",
      date: "Details to be confirmed",
      description: "Sunrise meditation appears in the supplied landing-page reference. The date and practice details can be added once Raechel confirms the next session.",
      image: A.wallpaperA,
      status: "Planning listing"
    }
  ];

  let calendarCursor = new Date();
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), 1);
  let selectedDate = "";

  function getRoute() {
    const raw = (window.location.hash || "#/").replace(/^#\/?/, "");
    const parts = raw.split("?");
    return { path: parts[0] || "", query: new URLSearchParams(parts[1] || "") };
  }

  function currentOffering(id) {
    return offerings.find(function (item) { return item.id === id; });
  }

  function currentEvent(id) {
    return events.find(function (item) { return item.id === id; });
  }

  function scheduleHref(type, offeringId) {
    return "#/schedule?type=" + encodeURIComponent(type || "session") + "&offering=" + encodeURIComponent(offeringId || "");
  }

  function header(active) {
    const links = [
      ["offerings", "Offerings", "#/offerings"],
      ["schedule", "Schedule", "#/schedule"],
      ["about", "About", "#/about"],
      ["journal", "Journal", "#/journal"],
      ["contact", "Contact", "#/contact"]
    ];
    return "<header class='site-header'><div class='header-inner'>" +
      "<a class='brand' href='#/' aria-label='Sacred Bloom home'><img src='" + A.logo + "' alt=''>" +
      "<span class='brand-copy'><span class='brand-name'>Sacred Bloom</span><span class='brand-tagline'>nurturing wellness through self illumination</span></span></a>" +
      "<button class='nav-toggle' type='button' aria-label='Open navigation' aria-expanded='false' aria-controls='site-nav' data-action='toggle-menu'><span class='bars'></span></button>" +
      "<nav class='site-nav' id='site-nav' aria-label='Main navigation'>" +
      links.map(function (link) {
        return "<a href='" + link[2] + "'" + (active === link[0] ? " aria-current='page'" : "") + ">" + link[1] + "</a>";
      }).join("") +
      "<a class='nav-cta' href='#/schedule'>Book Now <span aria-hidden='true'>⌑</span></a></nav></div></header>";
  }

  function footer() {
    return "<footer class='site-footer'><div class='wrap'>" +
      "<div class='footer-inner'><div class='footer-brand'><img src='" + A.logo + "' alt=''>" +
      "<div><strong>Sacred Bloom Wellness</strong><span>A space to soften, reconnect, and bloom.</span></div></div>" +
      "<nav class='footer-links' aria-label='Footer navigation'><a href='#/offerings'>Offerings</a><a href='#/schedule'>Schedule</a><a href='#/about'>About</a><a href='#/journal'>Journal</a><a href='#/contact'>Contact</a></nav></div>" +
      "<p class='footer-note'>A site preview built from Raechel’s supplied notes and visual references. Event dates, booking, and donation details need confirmation before live use.</p></div></footer>";
  }

  function layout(content, active) {
    app.innerHTML = header(active) + content + footer();
  }

  function heading(title, lede) {
    return "<h2 class='section-title'>" + title + "</h2><p class='section-lede'>" + lede + "</p>";
  }

  function featuredCard(item) {
    const cardTitle = item.cardTitle || item.title;
    return "<a class='featured-card' href='#/offering/" + item.id + "' aria-label='Explore " + item.title + "'>" +
      "<img src='" + A.icons[item.icon] + "' alt=''>" +
      "<div><h3>" + cardTitle + "</h3><p>" + item.cardSub + "</p></div></a>";
  }

  function offeringCard(item) {
    const visual = item.icon
      ? "<span class='offering-mark'><img src='" + A.icons[item.icon] + "' alt=''></span>"
      : "<span class='offering-mark' aria-hidden='true'>" + item.mark + "</span>";
    return "<a class='offering-card' href='#/offering/" + item.id + "'>" + visual +
      "<h3>" + item.title + "</h3><p>" + item.short + "</p><span class='card-link'>Explore offering <span aria-hidden='true'>→</span></span></a>";
  }

  function worldMap(id) {
    const label = id === "home" ? "Places in the practice" : "Raechel’s travels";
    return "<div class='world-map'><svg viewBox='0 0 1000 500' role='img' aria-labelledby='map-title-" + id + " map-desc-" + id + "'>" +
      "<title id='map-title-" + id + "'>" + label + "</title><desc id='map-desc-" + id + "'>A stylized world map with interactive markers for Wilmington, North Carolina and Nepal.</desc>" +
      "<path class='map-grid' d='M0 125 Q500 160 1000 125 M0 250 Q500 250 1000 250 M0 375 Q500 340 1000 375 M250 0 Q310 250 250 500 M500 0 Q500 250 500 500 M750 0 Q690 250 750 500'/>" +
      "<path class='map-land' d='M83 110 L105 89 142 83 159 96 190 98 208 117 229 124 224 143 209 153 198 168 179 172 170 191 156 201 151 223 138 239 126 223 117 203 104 190 95 169 82 159 74 138 Z M236 71 L260 62 281 70 278 83 255 90 Z M196 207 L216 211 228 226 232 248 224 266 222 288 211 312 207 333 196 353 186 338 180 315 175 291 176 270 183 249 179 230 Z M432 106 L449 93 474 91 493 101 517 100 538 108 559 101 579 106 600 100 623 108 649 108 669 117 694 118 710 126 733 128 755 138 781 143 803 154 788 165 763 163 740 170 718 164 700 175 681 168 659 176 636 164 612 167 590 159 571 164 548 154 530 158 514 147 491 151 476 138 457 139 440 126 Z M473 159 L495 154 510 165 516 182 511 201 502 218 493 239 482 229 477 210 466 192 466 174 Z M558 172 L580 163 602 170 616 186 610 203 594 208 579 197 561 192 Z M655 176 L679 172 695 181 701 194 688 205 669 199 658 189 Z M762 258 L788 250 812 256 832 268 828 283 806 287 784 281 767 271 Z M874 238 L891 229 901 236 896 248 880 251 Z'/>" +
      "<path class='map-route' d='M284 155 C430 82 605 80 735 171'/>" +
      "<g class='map-pin' data-place='wilmington' tabindex='0' role='button' aria-label='Wilmington, North Carolina. Show details.'><circle cx='284' cy='155' r='13'/><circle cx='284' cy='155' r='4'/></g>" +
      "<text class='map-label' x='300' y='151'>Wilmington</text>" +
      "<g class='map-pin' data-place='nepal' tabindex='0' role='button' aria-label='Nepal. Show details.'><circle cx='735' cy='171' r='13'/><circle cx='735' cy='171' r='4'/></g>" +
      "<text class='map-label' x='751' y='168'>Nepal</text></svg>" +
      "<div class='map-caption'>Select a pin to read the location note. The map starts with the places supported by the supplied material.</div></div>";
  }

  function homePage() {
    const featured = [offerings[0], offerings[1], offerings[2]].map(featuredCard).join("");
    const additional = offerings.slice(3).map(offeringCard).join("");
    return "<main id='main'>" +
      "<section class='hero-home' aria-label='Welcome to Sacred Bloom' style='--hero-image:url(" + A.hero + ")'>" +
      "<div class='hero-inner'><div class='arch-panel'><div class='arch-ornament' aria-hidden='true'>✧</div>" +
      "<h1>A space to soften, reconnect, and bloom.</h1><div class='arch-divider' aria-hidden='true'><span>❀</span></div>" +
      "<h2>The Week Ahead</h2><div class='week-list'>" +
      "<a href='#/event/full-moon-circle'><span class='week-symbol' aria-hidden='true'>☾</span>Full Moon Circle</a>" +
      "<a href='#/event/sunrise-meditation'><span class='week-symbol' aria-hidden='true'>☼</span>Sunrise Meditation</a>" +
      "<a href='#/event/feminine-circle'><span class='week-symbol' aria-hidden='true'>❀</span>Feminine Embodiment Circle</a></div>" +
      "<p class='arch-note'>Yoga · breath · sound · restorative practice</p></div></div></section>" +
      "<div class='wrap featured-wrap'><div class='featured-grid'>" + featured + "</div></div>" +
      "<section class='section paper-section'><div class='wrap'>" +
      heading("Practices for a softer return", "Explore offerings shaped around movement, breath, sound, community, and deep rest.") +
      "<div class='offering-grid'>" + offerings.map(offeringCard).join("") + "</div></div></section>" +
      "<section class='section rose-section'><div class='wrap'><div class='join-band' style='--band-image:url(" + A.wallpaperA + ")'>" +
      "<div><h2>Join a gathering or request a virtual session.</h2><p>Choose a one-on-one virtual session request, or find a group offering and reserve a place with an optional contribution.</p></div>" +
      "<div class='join-options'><a class='join-option' href='#/schedule?type=session'><strong>One-on-one virtual session</strong><span>Choose a preferred date →</span></a>" +
      "<a class='join-option' href='#/schedule?type=group'><strong>Group gatherings</strong><span>See the calendar →</span></a></div></div></div></section>" +
      "<section class='section paper-section'><div class='wrap map-section'><div class='map-copy'><h2>Practices carried across places.</h2>" +
      "<p>Raechel’s notes connect Sacred Bloom’s sound work to a Tibetan singing-bowl massage practice she studied in Nepal. Wilmington is the home base shown here; the map can grow as she confirms the places she wants to share.</p>" +
      "<div class='map-info' id='map-info-home' role='status'>Select a pin on the map to see its note.</div></div>" + worldMap("home") + "</div></section>" +
      "<section class='section rose-section'><div class='wrap'>" + heading("A note from the community", "A space for reflections Raechel has permission to share.") +
      "<div class='reflection-card'><p>Community testimonials can be added here with Raechel’s approved words.</p></div></div></section>" +
      "</main>";
  }

  function offeringsPage() {
    return "<main id='main'><section class='page-hero' style='--page-hero-image:url(" + A.wallpaperB + ")'><div class='wrap'>" +
      "<h1>Find the practice that meets you where you are.</h1><p>Each offering has its own rhythm. Open a practice to read what it includes and how to join.</p></div></section>" +
      "<section class='section'><div class='wrap'><div class='offering-grid'>" + offerings.map(offeringCard).join("") + "</div></div></section></main>";
  }

  function weekMarkup(item) {
    if (!item.weeks) return "";
    return "<h2>Four weeks of study</h2>" + item.weeks.map(function (week) {
      return "<div class='week-module'><h3>" + week[0] + "</h3><p>" + week[1] + "</p></div>";
    }).join("");
  }

  function offeringPage(item) {
    const introTitle = item.id === "tantra" ? "A four-part series" : "The practice";
    const practiceList = item.practice.map(function (line) { return "<li>" + line + "</li>"; }).join("");
    const heroIcon = item.icon ? "<img src='" + A.icons[item.icon] + "' alt=''>" : "<span class='offering-mark' aria-hidden='true'>" + item.mark + "</span>";
    const groupButton = item.group
      ? "<a class='button' href='" + scheduleHref("group", item.id) + "'>See group dates <span aria-hidden='true'>→</span></a>"
      : "";
    return "<main id='main'><section class='page-hero' style='--page-hero-image:url(" + (item.id === "ritual-of-rest" || item.id === "aura-cleansing" ? A.wallpaperB : A.wallpaperA) + ")'><div class='wrap'>" +
      "<h1>" + item.title + (item.subtitle ? "<br><span>" + item.subtitle + "</span>" : "") + "</h1><p>" + item.lead + "</p></div></section>" +
      "<div class='wrap detail-content'><article class='content-panel'><h2>" + introTitle + "</h2><p>" + item.lead + "</p>" +
      weekMarkup(item) + "<h2>" + (item.weeks ? "What the practice includes" : "What to expect") + "</h2><ul>" + practiceList + "</ul>" +
      "<p>Session length, location, and availability are confirmed with Raechel when you request a place.</p></article>" +
      "<aside class='detail-aside'>" + heroIcon + "<h2>" + item.title + "</h2><p>" + (item.group ? "Group dates are posted once confirmed." : "Ask Raechel which format is available for this practice.") + "</p>" +
      groupButton + "<a class='button button-outline' href='" + scheduleHref("session", item.id) + "'>Request a virtual one-on-one</a>" +
      "<p class='note'>A date request is not a confirmed booking. This preview form does not send or store submissions.</p></aside></div></main>";
  }

  function calendarMarkup() {
    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();
    const first = new Date(year, month, 1);
    const count = new Date(year, month + 1, 0).getDate();
    const mondayStart = (first.getDay() + 6) % 7;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let out = labels.map(function (name) { return "<span class='calendar-weekday'>" + name + "</span>"; }).join("");
    for (let i = 0; i < mondayStart; i += 1) out += "<span class='calendar-empty' aria-hidden='true'></span>";
    for (let day = 1; day <= count; day += 1) {
      const date = new Date(year, month, day);
      const past = date < today;
      const iso = year + "-" + String(month + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
      const pressed = iso === selectedDate ? "true" : "false";
      out += "<button class='calendar-day' type='button' data-action='select-date' data-date='" + iso + "' aria-pressed='" + pressed + "'" + (past ? " disabled" : "") + ">" + day + "</button>";
    }
    const offset = (mondayStart + count) % 7;
    if (offset) for (let i = 0; i < 7 - offset; i += 1) out += "<span class='calendar-empty' aria-hidden='true'></span>";
    const shown = selectedDate ? new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }) : "Choose a preferred date. Raechel will confirm availability.";
    return "<div class='calendar-head'><h2>" + calendarCursor.toLocaleDateString("en-US", { month: "long", year: "numeric" }) + "</h2><div class='calendar-arrows'>" +
      "<button type='button' data-action='previous-month' aria-label='Previous month'" + (year === today.getFullYear() && month === today.getMonth() ? " disabled" : "") + ">‹</button>" +
      "<button type='button' data-action='next-month' aria-label='Next month'>›</button></div></div>" +
      "<div class='calendar-grid' role='group' aria-label='Choose a preferred date'>" + out + "</div>" +
      "<p class='calendar-selected' id='selected-date-label'>" + shown + "</p>";
  }

  function eventCard(item) {
    return "<a class='event-card' href='#/event/" + item.id + "'><div class='event-poster' style='--poster-image:url(" + item.image + ")'>" +
      "<span>" + item.label + "</span><strong>" + item.title + "</strong></div><div class='event-card-copy'><p>" + item.date + "</p><span class='card-link'>Read details & RSVP <span aria-hidden='true'>→</span></span></div></a>";
  }

  function groupOptions(initial) {
    return "<option value=''>Choose a group event</option>" + events.map(function (item) {
      const selected = initial === item.id || initial === item.offeringId ? " selected" : "";
      return "<option value='" + item.id + "'" + selected + ">" + item.title + " · " + item.status + "</option>";
    }).join("");
  }

  function sessionOptions(initial) {
    return "<option value=''>Choose an offering</option>" + offerings.map(function (item) {
      return "<option value='" + item.id + "'" + (initial === item.id ? " selected" : "") + ">" + item.title + "</option>";
    }).join("");
  }

  function schedulePage(query) {
    const initial = query.get("offering") || "";
    const hiddenDate = selectedDate ? " value='" + selectedDate + "'" : "";
    return "<main id='main'><section class='schedule-intro wrap'><h1>Make room for the next practice.</h1><p>Choose a preferred date for a one-on-one virtual session, or join a group offering. Raechel confirms availability and event details personally.</p></section>" +
      "<section class='wrap schedule-layout'><div class='calendar-card'><div id='calendar-content'>" + calendarMarkup() + "</div>" +
      "<p class='prototype-note'>This calendar collects a preferred date only. It does not show live availability or book a session.</p></div>" +
      "<form class='form-card' id='session-form' data-form='session'><h2>Request a virtual one-on-one</h2><p>Send a preferred date and offering for Raechel to review.</p>" +
      "<input type='hidden' name='preferredDate' id='preferred-date' " + hiddenDate + ">" +
      "<div class='form-grid'><div class='field field-full'><label for='session-offering'>Offering</label><select id='session-offering' name='offering' required>" + sessionOptions(initial) + "</select></div>" +
      "<div class='field'><label for='session-name'>Your name</label><input id='session-name' name='name' autocomplete='name' required></div>" +
      "<div class='field'><label for='session-email'>Email</label><input id='session-email' name='email' type='email' autocomplete='email' required></div>" +
      "<div class='field field-full'><label for='session-time'>Preferred time or time zone</label><input id='session-time' name='preferredTime' placeholder='Optional'></div></div>" +
      "<div class='prototype-note'>A request is not a confirmed booking. This preview does not send or store your information.</div>" +
      "<button class='button' type='submit'>Prepare session request <span aria-hidden='true'>→</span></button><div class='form-feedback' role='status' aria-live='polite'></div></form></section>" +
      "<section class='events-section'><div class='wrap'><div class='events-heading'><h2>Group gatherings & upcoming offerings</h2><p>Dates are pending confirmation. Open a poster for the description, then reserve a place with an optional contribution.</p></div>" +
      "<div class='event-grid'>" + events.map(eventCard).join("") + "</div></div></section>" +
      "<section class='section'><div class='wrap'><form class='form-card' id='group-form' data-form='group'><h2>Reserve a place in a group offering</h2><p>Choose an event and leave an optional contribution amount. Payment links are not connected in this preview.</p>" +
      "<div class='form-grid'><div class='field field-full'><label for='group-event'>Group event</label><select id='group-event' name='event' required>" + groupOptions(initial) + "</select></div>" +
      "<div class='field'><label for='group-name'>Your name</label><input id='group-name' name='name' autocomplete='name' required></div>" +
      "<div class='field'><label for='group-email'>Email</label><input id='group-email' name='email' type='email' autocomplete='email' required></div>" +
      "<div class='field'><label for='group-contribution'>Optional contribution (USD)</label><input id='group-contribution' name='contribution' type='number' min='1' step='1' inputmode='decimal' placeholder='Choose an amount'></div>" +
      "<div class='field'><label for='group-message'>A note for Raechel</label><input id='group-message' name='message' placeholder='Optional'></div></div>" +
      "<div class='prototype-note'>This is a visual sign-up flow only. No RSVP is sent and no donation is processed until a registration destination and donation link are added.</div>" +
      "<button class='button' type='submit'>Register + make a donation <span aria-hidden='true'>→</span></button><div class='form-feedback' role='status' aria-live='polite'></div></form></div></section></main>";
  }

  function eventPage(item) {
    const offer = currentOffering(item.offeringId);
    const contributionLink = scheduleHref("group", item.id);
    return "<main id='main'><section class='wrap'><article class='event-detail'><div class='event-detail-poster' style='--poster-image:url(" + item.image + ")'><h1>" + item.title + "</h1></div>" +
      "<div class='event-detail-copy'><p class='card-link'>" + item.label + "</p><h2>" + item.date + "</h2><p>" + item.description + "</p>" +
      (item.id === "full-moon-circle" || item.id === "sunrise-meditation" ? "<div class='prototype-note'>Planning listing from the supplied design reference. Raechel needs to confirm the next date and final details.</div>" : "") +
      "<h2>How to join</h2><p>Choose a group event on the schedule page and leave your contact details. An optional contribution field is included for group gatherings.</p>" +
      "<a class='button' href='" + contributionLink + "'>Reserve a place + contribute <span aria-hidden='true'>→</span></a> " +
      "<a class='button button-outline' href='#/offering/" + (offer ? offer.id : "feminine") + "'>Explore the related offering</a></div></article></section></main>";
  }

  function aboutPage() {
    return "<main id='main'><section class='page-hero' style='--page-hero-image:url(" + A.wallpaperB + ")'><div class='wrap'>" +
      "<h1>About Sacred Bloom</h1><p>A space shaped around self-illumination, connection, and practices that invite the body to soften and return to rest.</p></div></section>" +
      "<section class='section'><div class='wrap about-grid'><article class='about-card'><h2>Practice with presence</h2>" +
      "<p>Sacred Bloom brings together yoga, breathwork, sound, aromatherapy, meditation, and restorative practice. The offerings create room for release, renewal, reflection, and a deeper relationship with the body.</p>" +
      "<p>Raechel’s notes describe a practice grounded in movement and stillness: from the foundations of classical yoga to women’s circles, sound healing, and rituals of rest.</p>" +
      "<div class='empty-state'>Raechel’s personal story and approved community reflections can be added here from her final copy.</div></article>" +
      "<article class='about-card'><h2>Places carried into the work</h2><p>The map highlights the places currently supported by the supplied material. Select a marker for its note.</p>" +
      "<div class='map-info' id='map-info-about' role='status'>Select a pin on the map to see its note.</div></article></div></section>" +
      "<section class='section-tight paper-section'><div class='wrap'>" + worldMap("about") + "</div></section></main>";
  }

  function journalPage() {
    const cards = [
      ["Practice & tradition", "Tantra in everyday life", "Origins, paths, and practical ways to bring the study of Tantra into daily life."],
      ["Breath & movement", "The foundations of classical yoga", "Mantra, mudra, pranayama, asana, and meditation as parts of a connected practice."],
      ["Rest & sound", "A ritual for deep rest", "Tea, breath, sound, and a slower transition back into the present moment."]
    ];
    return "<main id='main'><section class='page-hero' style='--page-hero-image:url(" + A.wallpaperA + ")'><div class='wrap'>" +
      "<h1>Journal</h1><p>Notes on symbols, practice, tradition, and the everyday work of returning to yourself.</p></div></section>" +
      "<section class='section'><div class='wrap'><div class='journal-grid'>" + cards.map(function (card) {
        return "<article class='journal-card'><span>" + card[0] + "</span><h2>" + card[1] + "</h2><p>" + card[2] + "</p></article>";
      }).join("") + "</div><p class='section-lede' style='margin-top:32px'>Raechel’s full journal entries can be added when she is ready to publish them.</p></div></section></main>";
  }

  function contactPage() {
    return "<main id='main'><section class='contact-wrap wrap'><div class='contact-copy'><h1>Begin with a note.</h1><p>Share the practice you’re curious about and the format you have in mind. Raechel can follow up with available dates and next steps.</p>" +
      "<div class='empty-state'>No contact address or live form destination was included with the provided material. This page is a preview.</div></div>" +
      "<form class='form-card' id='contact-form' data-form='contact'><h2>Contact Sacred Bloom</h2><p>Leave a note for Raechel.</p><div class='form-grid'>" +
      "<div class='field'><label for='contact-name'>Your name</label><input id='contact-name' name='name' autocomplete='name' required></div>" +
      "<div class='field'><label for='contact-email'>Email</label><input id='contact-email' name='email' type='email' autocomplete='email' required></div>" +
      "<div class='field field-full'><label for='contact-message'>What would you like to ask?</label><textarea id='contact-message' name='message' required></textarea></div></div>" +
      "<div class='prototype-note'>This test form does not send or store messages. Add Raechel’s contact destination to make it live.</div>" +
      "<button class='button' type='submit'>Prepare message <span aria-hidden='true'>→</span></button><div class='form-feedback' role='status' aria-live='polite'></div></form></section></main>";
  }

  function render() {
    const route = getRoute();
    let content = "";
    let active = "";
    let title = "Sacred Bloom Wellness";
    let interior = route.path !== "";
    let wallpaper = A.wallpaperA;

    if (route.path === "offerings") {
      content = offeringsPage(); active = "offerings"; title = "Offerings | Sacred Bloom";
    } else if (route.path.indexOf("offering/") === 0) {
      const item = currentOffering(route.path.split("/")[1]);
      content = item ? offeringPage(item) : offeringsPage(); active = "offerings"; title = item ? item.title + " | Sacred Bloom" : "Offerings | Sacred Bloom";
      wallpaper = item && (item.id === "ritual-of-rest" || item.id === "aura-cleansing") ? A.wallpaperB : A.wallpaperA;
    } else if (route.path === "schedule") {
      content = schedulePage(route.query); active = "schedule"; title = "Schedule | Sacred Bloom"; wallpaper = A.wallpaperA;
    } else if (route.path.indexOf("event/") === 0) {
      const item = currentEvent(route.path.split("/")[1]);
      content = item ? eventPage(item) : schedulePage(route.query); active = "schedule"; title = item ? item.title + " | Sacred Bloom" : "Schedule | Sacred Bloom";
      wallpaper = item && item.id === "full-moon-circle" ? A.wallpaperB : A.wallpaperA;
    } else if (route.path === "about") {
      content = aboutPage(); active = "about"; title = "About | Sacred Bloom"; wallpaper = A.wallpaperB;
    } else if (route.path === "journal") {
      content = journalPage(); active = "journal"; title = "Journal | Sacred Bloom"; wallpaper = A.wallpaperA;
    } else if (route.path === "contact") {
      content = contactPage(); active = "contact"; title = "Contact | Sacred Bloom"; wallpaper = A.wallpaperB;
    } else {
      content = homePage(); active = ""; title = "Sacred Bloom Wellness"; interior = false;
    }

    document.title = title;
    document.body.className = interior ? "page-interior" : "page-home";
    document.body.style.setProperty("--page-wallpaper", 'url("' + wallpaper + '")');
    layout(content, active);
  }

  document.addEventListener("click", function (event) {
    const action = event.target.closest("[data-action]");
    if (action) {
      const type = action.getAttribute("data-action");
      if (type === "toggle-menu") {
        const nav = document.getElementById("site-nav");
        const open = nav.classList.toggle("is-open");
        action.setAttribute("aria-expanded", open ? "true" : "false");
        action.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      } else if (type === "previous-month") {
        calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
        render();
      } else if (type === "next-month") {
        calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
        render();
      } else if (type === "select-date") {
        selectedDate = action.getAttribute("data-date");
        render();
      }
    }

    const pin = event.target.closest("[data-place]");
    if (pin) {
      const place = pin.getAttribute("data-place");
      const target = document.getElementById("map-info-" + (getRoute().path === "about" ? "about" : "home"));
      if (!target) return;
      target.textContent = place === "nepal"
        ? "Nepal — Raechel’s notes mention studying Tibetan singing-bowl massage there."
        : "Wilmington, North Carolina — the home base shown for Sacred Bloom.";
    }
  });

  document.addEventListener("keydown", function (event) {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-place]")) {
      event.preventDefault();
      event.target.click();
    }
  });

  document.addEventListener("submit", function (event) {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    const feedback = form.querySelector(".form-feedback");
    let message = "";
    if (form.dataset.form === "session") {
      const date = form.querySelector("[name='preferredDate']").value;
      if (!date) {
        message = "Choose a preferred date in the calendar first. Raechel will confirm availability.";
      } else {
        message = "Your one-on-one request is ready to review for " + new Date(date + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) + ". It has not been sent or stored.";
      }
    } else if (form.dataset.form === "group") {
      const chosen = form.querySelector("[name='event']").value;
      message = chosen ? "Your group RSVP preview is ready. No information was sent and no contribution was processed." : "Choose a group event to continue.";
    } else {
      message = "Your message preview is ready. It has not been sent or stored.";
    }
    feedback.textContent = message;
    feedback.classList.add("is-visible");
    feedback.focus({ preventScroll: true });
  });

  window.addEventListener("hashchange", function () {
    render();
    window.scrollTo(0, 0);
  });

  render();
})();

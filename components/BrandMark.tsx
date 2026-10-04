export function BrandMark() {
  const rays = Array.from({ length: 16 }, (_, index) => index * 22.5);

  return (
    <svg
      className="brand-mark"
      viewBox="0 0 220 350"
      role="img"
      aria-label="Sacred Bloom Wellness sun, lotus, and moon mark"
    >
      <g className="brand-mark__sun">
        {rays.map((rotation) => (
          <line
            key={rotation}
            x1="110"
            y1="18"
            x2="110"
            y2="48"
            transform={`rotate(${rotation} 110 80)`}
          />
        ))}
        <circle cx="110" cy="80" r="23" />
        <circle className="brand-mark__dot" cx="110" cy="6" r="4" />
        <circle className="brand-mark__dot" cx="36" cy="80" r="4" />
        <circle className="brand-mark__dot" cx="184" cy="80" r="4" />
      </g>

      <g className="brand-mark__lotus">
        <path d="M110 190 C90 166 90 132 110 110 C130 132 130 166 110 190 Z" />
        <path d="M105 191 C72 183 55 158 60 132 C88 139 104 159 105 191 Z" />
        <path d="M115 191 C148 183 165 158 160 132 C132 139 116 159 115 191 Z" />
        <path d="M101 194 C66 199 42 184 35 160 C65 157 91 168 101 194 Z" />
        <path d="M119 194 C154 199 178 184 185 160 C155 157 129 168 119 194 Z" />
      </g>

      <circle className="brand-mark__ink-dot" cx="110" cy="211" r="5" />
      <circle className="brand-mark__gold-dot" cx="110" cy="229" r="7" />

      <g className="brand-mark__moon">
        <circle cx="110" cy="270" r="34" />
        <circle className="brand-mark__moon-cut" cx="110" cy="254" r="30" />
      </g>

      <circle className="brand-mark__ink-dot" cx="110" cy="314" r="5" />
      <circle className="brand-mark__gold-dot" cx="110" cy="330" r="6" />
      <circle className="brand-mark__ink-dot" cx="110" cy="345" r="4" />
    </svg>
  );
}

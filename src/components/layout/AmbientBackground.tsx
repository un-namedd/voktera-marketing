export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden>
      <div className="ambient-bg__glow ambient-bg__glow--a" />
      <div className="ambient-bg__glow ambient-bg__glow--b" />
      <div className="ambient-bg__glow ambient-bg__glow--c" />
      <svg
        className="ambient-bg__lines ambient-bg__lines--a"
        viewBox="0 0 480 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.65">
          <path d="M-40 120 C 120 80, 280 160, 520 100" />
          <path d="M-60 280 C 140 220, 300 340, 540 260" />
          <path d="M-20 440 C 160 380, 320 500, 560 420" />
          <path d="M-80 600 C 100 540, 280 660, 520 580" />
          <path d="M0 760 C 180 700, 340 820, 580 740" />
        </g>
      </svg>
      <svg
        className="ambient-bg__lines ambient-bg__lines--b"
        viewBox="0 0 480 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.7">
          <path d="M40 180 C 200 140, 360 220, 500 160" />
          <path d="M20 360 C 180 300, 340 400, 520 320" />
          <path d="M60 520 C 220 460, 380 560, 540 500" />
          <path d="M10 700 C 170 640, 330 760, 530 680" />
        </g>
      </svg>
    </div>
  );
}

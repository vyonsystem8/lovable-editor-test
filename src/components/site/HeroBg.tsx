export function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="hero-grid absolute inset-0 grid-bg opacity-60" />
      <div className="hero-gradient hero-gradient-a absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#385577]/25 blur-3xl" />
      <div className="hero-gradient hero-gradient-b absolute bottom-[-160px] left-[-80px] h-[420px] w-[420px] rounded-full bg-[#F26B38]/15 blur-3xl" />
      <svg
        className="hero-radar absolute right-10 top-1/3 hidden md:block opacity-60"
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
      >
        <circle cx="160" cy="160" r="60" />
        <circle cx="160" cy="160" r="100" />
        <circle cx="160" cy="160" r="140" />
        <path className="radar-cross" d="M0 160h320M160 0v320" />
        <path className="radar-sweep" d="M160 160 L260 160" />
      </svg>
      <svg
        className="hero-chart absolute left-8 bottom-10 hidden md:block opacity-50"
        width="220"
        height="120"
        viewBox="0 0 220 120"
        fill="none"
        stroke="rgba(255,160,106,0.55)"
        strokeWidth="1.2"
      >
        <path className="chart-line" d="M0 100 L40 70 L80 80 L120 40 L160 55 L200 25 L220 35" />
        <circle cx="40" cy="70" r="2.5" fill="#FFA06A" />
        <circle cx="120" cy="40" r="2.5" fill="#FFA06A" />
        <circle cx="200" cy="25" r="2.5" fill="#FFA06A" />
      </svg>
    </div>
  );
}

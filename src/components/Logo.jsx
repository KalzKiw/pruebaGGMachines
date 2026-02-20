export default function Logo({ size = "md", showText = false }) {
  const sizes = {
    sm: { svg: 24, text: "text-xs" },
    md: { svg: 40, text: "text-sm" },
    lg: { svg: 80, text: "text-2xl" }
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* SVG Logo - Chevron + Diamond in Gradient */}
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient
            id="logoGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff4ecd" />
            <stop offset="100%" stopColor="#6b8cff" />
          </linearGradient>
        </defs>

        {/* Large Chevron/Bracket */}
        <path
          d="M 20 15 L 55 50 L 20 85 L 35 85 L 70 50 L 35 15 Z"
          fill="url(#logoGradient)"
          opacity="0.9"
        />

        {/* Smaller Diamond */}
        <path
          d="M 60 35 L 80 50 L 60 65 L 40 50 Z"
          fill="url(#logoGradient)"
          opacity="0.7"
        />
      </svg>

      {/* Optional Text */}
      {showText && (
        <div className={`${s.text} font-black leading-tight`}>
          <div className="text-white">MINI PC'S IRELAND</div>
          <div className="text-gray-400">GG MACHINES</div>
        </div>
      )}
    </div>
  );
}

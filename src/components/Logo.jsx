export default function Logo({ size = "md", showText = false }) {
  const sizes = {
    sm: { image: 28 },
    md: { image: 40 },
    lg: { image: 80 }
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <img
        src="/GG_Machines_RGB_TRANSPARENT.png"
        alt="GG Machines Logo"
        style={{ height: `${s.image}px`, width: 'auto' }}
        className="object-contain"
      />

      {/* Optional Text */}
      {showText && (
        <div className="leading-tight">
          <div className="text-white font-black text-sm">GG MACHINES</div>
          <div className="text-gray-400 text-xs">Mini PC Ireland</div>
        </div>
      )}
    </div>
  );
}


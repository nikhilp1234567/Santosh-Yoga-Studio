import type { SVGProps } from "react";

export function Mandala(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.4" {...props}>
      <circle cx="100" cy="100" r="98" />
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="62" />
      <circle cx="100" cy="100" r="44" />
      <circle cx="100" cy="100" r="26" />
      <circle cx="100" cy="100" r="10" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 24;
        const x = (100 + Math.cos(a) * 98).toFixed(3);
        const y = (100 + Math.sin(a) * 98).toFixed(3);
        return <line key={i} x1="100" y1="100" x2={x} y2={y} />;
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        const x = (100 + Math.cos(a) * 80).toFixed(3);
        const y = (100 + Math.sin(a) * 80).toFixed(3);
        return <circle key={`p-${i}`} cx={x} cy={y} r="8" />;
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 8 + Math.PI / 8;
        const x = (100 + Math.cos(a) * 44).toFixed(3);
        const y = (100 + Math.sin(a) * 44).toFixed(3);
        return <circle key={`q-${i}`} cx={x} cy={y} r="14" />;
      })}
    </svg>
  );
}

export function JaliStrip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      {Array.from({ length: 20 }).map((_, i) => {
        const cx = 6 + i * 12;
        return (
          <g key={i}>
            <path d={`M ${cx} 2 L ${cx + 6} 12 L ${cx} 22 L ${cx - 6} 12 Z`} />
            <circle cx={cx} cy="12" r="2" />
          </g>
        );
      })}
    </svg>
  );
}

export function ArchedFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="overflow-hidden bg-sand-deep shadow-2xl ring-1 ring-henna/10"
        style={{
          borderTopLeftRadius: "9999px",
          borderTopRightRadius: "9999px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
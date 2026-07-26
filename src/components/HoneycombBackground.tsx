import { BOX_PATTERN } from "@/components/BoxPattern";

/** Static navy hero backdrop with a subtle box grid — no motion. */
export default function HoneycombBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 hero-gradient" />

      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: BOX_PATTERN,
          backgroundSize: "64px 64px",
          backgroundPosition: "center top",
        }}
      />

      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-24 h-[28rem] w-[28rem] rounded-full bg-navy-950/45 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/35 to-transparent" />
    </div>
  );
}

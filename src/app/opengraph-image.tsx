import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Ashvin Panicker — I build software that ships.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const streaks = Array.from({ length: 70 }, (_, i) => ({
    left: (i * 137) % 1200,
    top: (i * 89) % 630,
    w: 40 + ((i * 31) % 90),
    o: 0.08 + ((i * 7) % 10) / 50,
  }));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 72, background: "#0b0f14", color: "#ece6d8", position: "relative" }}>
        {streaks.map((s, i) => (
          <div key={i} style={{ position: "absolute", left: s.left, top: s.top, width: s.w, height: 1.5, background: `rgba(236,230,216,${s.o})`, transform: "rotate(-35deg)" }} />
        ))}
        <div style={{ position: "absolute", right: 110, top: 90, width: 220, height: 110, borderTopLeftRadius: 220, borderTopRightRadius: 220, borderTop: "26px solid #ff5a2c" }} />
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#9aa3ad", textTransform: "uppercase" }}>Ashvin Panicker · Web & app developer</div>
        <div style={{ fontSize: 96, lineHeight: 1, marginTop: 18, display: "flex" }}>
          I build software that&nbsp;<span style={{ color: "#ff5a2c" }}>ships.</span>
        </div>
      </div>
    ),
    size
  );
}

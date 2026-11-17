import { ImageResponse } from "next/og";

export const alt = "AG Custom — Sites, aplicativos e sistemas sob medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#181A1C",
          backgroundImage: "radial-gradient(circle at 85% 90%, rgba(41,51,155,0.6), transparent 55%)",
          color: "#fff",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#B0B3B8", letterSpacing: 4 }}>
          AG CUSTOM · VITÓRIA, ES
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.05, letterSpacing: -4 }}>
          <span>Sites, aplicativos e sistemas</span>
          <span style={{ color: "#8B5CF6" }}>sob medida.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8B8E94" }}>agcustom.com.br</div>
      </div>
    ),
    size,
  );
}

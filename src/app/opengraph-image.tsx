import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PROSYS LTD — Enterprise-grade product engineering, AI, and growth systems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(6,182,212,0.35) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.22) 0%, transparent 50%), #000000",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Top bar: Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            PROSYS
          </div>
          <div
            style={{
              width: 1,
              height: 18,
              background: "rgba(255,255,255,0.2)",
            }}
          />
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            LTD
          </div>
        </div>

        {/* Center: Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#67E8F9",
              fontWeight: 600,
            }}
          >
            Enterprise Engineering
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Architecting scalable
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#67E8F9",
            }}
          >
            systems, end-to-end.
          </div>
        </div>

        {/* Bottom: Proof strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
                50+
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                Engagements delivered
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
                5
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                Industry verticals
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
                6–12w
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                To production
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.1em",
            }}
          >
            prosysltd.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

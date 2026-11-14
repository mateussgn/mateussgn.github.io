import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { loadGoogleFont } from "@/lib/fonts";

export const dynamic = "force-static";
export const alt = `${profile.name}, ${profile.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tagline = "Senior Software Engineer. Java, Spring Boot and React.";

/** The card shown when the site's link is shared on LinkedIn, Slack or X. */
export default async function OpengraphImage() {
  const [logo, name, body] = await Promise.all([
    loadGoogleFont("Newsreader", { weight: 400, italic: true, text: "msgn" }),
    loadGoogleFont("Newsreader", { weight: 300, text: profile.name }),
    loadGoogleFont("Instrument Sans", { weight: 400, text: tagline }),
  ]);

  // Any font that failed to download is skipped; the default font fills in.
  const fonts: { name: string; data: ArrayBuffer; style: "normal" | "italic"; weight: 300 | 400 }[] = [];
  if (logo) fonts.push({ name: "Newsreader", data: logo, style: "italic", weight: 400 });
  if (name) fonts.push({ name: "Newsreader", data: name, style: "normal", weight: 300 });
  if (body) fonts.push({ name: "Instrument Sans", data: body, style: "normal", weight: 400 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: "#0b1f1c",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Newsreader",
            fontStyle: "italic",
            fontSize: 88,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#f2c14e",
          }}
        >
          msgn
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Newsreader",
              fontWeight: 300,
              fontSize: 80,
              lineHeight: 1.05,
              color: "#e9efef",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Instrument Sans",
              fontSize: 34,
              color: "#9ab0ab",
            }}
          >
            {tagline}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}

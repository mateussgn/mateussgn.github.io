import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/fonts";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon on iPhone and iPad. iOS rounds the corners itself. */
export default async function AppleIcon() {
  const italic = await loadGoogleFont("Newsreader", { weight: 500, italic: true, text: "m" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2c14e",
          color: "#0b1f1c",
          fontFamily: "Newsreader",
          fontStyle: "italic",
          fontSize: 140,
          lineHeight: 1,
          paddingBottom: 22,
        }}
      >
        m
      </div>
    ),
    {
      ...size,
      fonts: italic ? [{ name: "Newsreader", data: italic, style: "italic", weight: 500 }] : undefined,
    },
  );
}

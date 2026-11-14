import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/fonts";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: an italic "m" on the site's yellow. */
export default async function Icon() {
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
          borderRadius: 14,
          background: "#f2c14e",
          color: "#0b1f1c",
          fontFamily: "Newsreader",
          fontStyle: "italic",
          fontSize: 50,
          lineHeight: 1,
          paddingBottom: 8,
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

/**
 * Loads a Google Font as TrueType for `next/og` image generation, which can't
 * read woff2. Runs at build time only. Returns undefined if the download fails,
 * so the build still succeeds with the default font.
 */
export async function loadGoogleFont(
  family: string,
  { weight = 400, italic = false, text }: { weight?: number; italic?: boolean; text?: string } = {},
): Promise<ArrayBuffer | undefined> {
  const axis = `ital,wght@${italic ? 1 : 0},${weight}`;
  const params = new URLSearchParams({ family: `${family}:${axis}` });
  if (text) params.set("text", text);

  try {
    // Without a browser user agent, Google Fonts answers with TrueType URLs.
    const css = await (await fetch(`https://fonts.googleapis.com/css2?${params}`)).text();
    const url = /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/.exec(css)?.[1];
    if (!url) return undefined;
    const font = await fetch(url);
    return font.ok ? await font.arrayBuffer() : undefined;
  } catch {
    return undefined;
  }
}

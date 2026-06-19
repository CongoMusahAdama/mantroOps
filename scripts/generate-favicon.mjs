import sharp from "sharp";
import toIco from "to-ico";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ICON_SRC = path.join(ROOT, "public/logo-icon.png");
const APP_DIR = path.join(ROOT, "src/app");
const PUBLIC_DIR = path.join(ROOT, "public");

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };
const VERDEMAR = { r: 0, g: 166, b: 145, alpha: 1 };

async function loadMarkTransparent() {
  const { data, info } = await sharp(ICON_SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 50 && g < 50 && b < 50) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function buildSquare(mark, size, background, paddingRatio = 0.17) {
  const padding = Math.round(size * paddingRatio);
  const inner = size - padding * 2;

  const resized = await sharp(mark)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  const mark = await loadMarkTransparent();

  const icon16 = await buildSquare(mark, 16, WHITE, 0.12);
  const icon32 = await buildSquare(mark, 32, WHITE);
  const icon48 = await buildSquare(mark, 48, WHITE);
  const apple180 = await buildSquare(mark, 180, VERDEMAR, 0.2);
  const icon512 = await buildSquare(mark, 512, VERDEMAR, 0.2);

  const ico = await toIco([icon16, icon32, icon48]);

  await fs.writeFile(path.join(APP_DIR, "favicon.ico"), ico);
  await fs.writeFile(path.join(APP_DIR, "icon.png"), icon32);
  await fs.writeFile(path.join(APP_DIR, "apple-icon.png"), apple180);

  await fs.writeFile(path.join(PUBLIC_DIR, "favicon.ico"), ico);
  await fs.writeFile(path.join(PUBLIC_DIR, "favicon-16x16.png"), icon16);
  await fs.writeFile(path.join(PUBLIC_DIR, "favicon-32x32.png"), icon32);
  await fs.writeFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"), apple180);
  await fs.writeFile(path.join(PUBLIC_DIR, "icon-512.png"), icon512);

  console.log("Favicons generated in src/app/ and public/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

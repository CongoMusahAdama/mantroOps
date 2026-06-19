import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SOURCE = path.join(
  __dirname,
  "../public/logo-source.jpg"
);
const OUTPUT = path.join(__dirname, "../public/logo.png");
const ICON_OUTPUT = path.join(__dirname, "../public/logo-icon.png");

async function processLogo() {
  const { data, info } = await sharp(SOURCE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const foggy = { r: 79, g: 78, b: 79 };

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const isDark = r < 40 && g < 40 && b < 40;
    const isLight = r > 220 && g > 220 && b > 220;

    if (isDark) {
      data[i + 3] = 0;
      continue;
    }

    if (isLight) {
      data[i] = foggy.r;
      data[i + 1] = foggy.g;
      data[i + 2] = foggy.b;
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(OUTPUT);

  await sharp(OUTPUT)
    .extract({ left: 0, top: 0, width: Math.round(info.width * 0.22), height: info.height })
    .png()
    .toFile(ICON_OUTPUT);

  console.log("Logo processed:", OUTPUT);
}

processLogo().catch((error) => {
  console.error(error);
  process.exit(1);
});

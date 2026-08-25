const { execSync } = require('child_process');
const fs = require('fs');

console.log('Starting background removal with precise alpha extraction...');

// Find the latest image in src/assets/images
const files = fs.readdirSync('src/assets/images').filter(f => f.startsWith('athenian_logo') && f.endsWith('.jpg'));
if (files.length === 0) {
  console.error('No logo jpg file found in src/assets/images');
  process.exit(1);
}
const inputImg = 'src/assets/images/' + files[files.length - 1];
console.log('Using input image:', inputImg);

// Export RGB to raw file to prevent buffer overflow
execSync(`convert ${inputImg} -depth 8 rgb:temp_rgb.raw`);
const rawRgb = fs.readFileSync('temp_rgb.raw');
fs.unlinkSync('temp_rgb.raw');

const width = 1024;
const height = 1024;
const totalPixels = width * height;
const rgbaBuffer = Buffer.alloc(totalPixels * 4);

let redCount = 0;
let bgCount = 0;
let edgeCount = 0;

for (let i = 0; i < totalPixels; i++) {
  const r = rawRgb[i * 3];
  const g = rawRgb[i * 3 + 1];
  const b = rawRgb[i * 3 + 2];

  // Whiteness measure: average of green & blue
  const gbAvg = (g + b) / 2;
  // Redness measure: difference of red from green/blue
  const redness = r - gbAvg;

  let alpha = 0;
  let outR = 0;
  let outG = 0;
  let outB = 0;

  if (redness < 18 && (r > 190 && g > 190 && b > 190)) {
    // Pure background pixel -> completely transparent
    alpha = 0;
    outR = 0;
    outG = 0;
    outB = 0;
    bgCount++;
  } else if (redness > 75) {
    // Solid red logo pixel
    alpha = 255;
    outR = r;
    outG = g;
    outB = b;
    redCount++;
  } else {
    // Edge antialiasing transition (18 <= redness <= 75)
    const t = Math.max(0, Math.min(1, (redness - 18) / (75 - 18)));
    alpha = Math.round(t * 255);
    
    if (alpha > 0) {
      // De-fringe: unblend background to restore original crisp red
      outR = Math.min(255, Math.max(0, Math.round((r - (1 - t) * 255) / t)));
      outG = Math.max(0, Math.min(255, Math.round((g - (1 - t) * 255) / t)));
      outB = Math.max(0, Math.min(255, Math.round((b - (1 - t) * 255) / t)));
    } else {
      outR = 0;
      outG = 0;
      outB = 0;
    }
    edgeCount++;
  }

  rgbaBuffer[i * 4] = outR;
  rgbaBuffer[i * 4 + 1] = outG;
  rgbaBuffer[i * 4 + 2] = outB;
  rgbaBuffer[i * 4 + 3] = alpha;
}

console.log({ redCount, bgCount, edgeCount, totalPixels });

fs.writeFileSync('temp_rgba.raw', rgbaBuffer);

// Convert raw RGBA directly into PNG with true alpha transparency
execSync('convert -size 1024x1024 -depth 8 rgba:temp_rgba.raw public/athenian-logo.png');
execSync('convert -size 1024x1024 -depth 8 rgba:temp_rgba.raw src/assets/images/athenian-logo-transparent.png');
execSync('cp public/athenian-logo.png public/favicon.png');
execSync('cp public/athenian-logo.png public/athenian-logo.jpg');

fs.unlinkSync('temp_rgba.raw');
console.log('Alpha transparency PNG generation complete!');

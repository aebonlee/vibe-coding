import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

// Royal blue theme colors
const BG_DARK = '#002E8A';
const BG_MID = '#0046C8';
const BG_LIGHT = '#4A8FE7';

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BG_MID}" />
      <stop offset="50%" stop-color="${BG_DARK}" />
      <stop offset="100%" stop-color="#1E3A5F" />
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${BG_LIGHT}" />
      <stop offset="100%" stop-color="#93C5FD" />
    </linearGradient>
    <!-- Decorative circles -->
    <radialGradient id="glow1" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="rgba(74,143,231,0.25)" />
      <stop offset="100%" stop-color="rgba(74,143,231,0)" />
    </radialGradient>
    <radialGradient id="glow2" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="rgba(147,197,253,0.15)" />
      <stop offset="100%" stop-color="rgba(147,197,253,0)" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <!-- Decorative elements -->
  <circle cx="950" cy="120" r="300" fill="url(#glow1)" />
  <circle cx="200" cy="500" r="250" fill="url(#glow2)" />

  <!-- Grid pattern overlay -->
  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
    <rect width="60" height="60" fill="none" />
    <line x1="0" y1="60" x2="60" y2="60" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
    <line x1="60" y1="0" x2="60" y2="60" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
  </pattern>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />

  <!-- Top accent line -->
  <rect x="0" y="0" width="${WIDTH}" height="6" fill="url(#accent)" />

  <!-- Code bracket decorative -->
  <text x="80" y="200" font-family="monospace" font-size="180" font-weight="900" fill="rgba(255,255,255,0.06)">&lt;/&gt;</text>

  <!-- Emoji icon -->
  <text x="80" y="260" font-size="72">🎵</text>

  <!-- Main title: 바이브코딩 마스터 -->
  <text x="80" y="340" font-family="'Noto Sans KR', 'Segoe UI', sans-serif" font-size="64" font-weight="900" fill="white" letter-spacing="-1">바이브코딩 마스터</text>

  <!-- Subtitle -->
  <text x="80" y="405" font-family="'Noto Sans KR', 'Segoe UI', sans-serif" font-size="28" font-weight="500" fill="rgba(255,255,255,0.85)">체계적 커리큘럼으로 AI 코딩을 마스터하세요</text>

  <!-- Feature tags -->
  <rect x="80" y="440" width="180" height="40" rx="20" fill="rgba(255,255,255,0.15)" />
  <text x="170" y="467" font-family="'Noto Sans KR', 'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="white" text-anchor="middle">3단계 커리큘럼</text>

  <rect x="280" y="440" width="180" height="40" rx="20" fill="rgba(255,255,255,0.15)" />
  <text x="370" y="467" font-family="'Noto Sans KR', 'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="white" text-anchor="middle">실전 프로젝트 9개</text>

  <rect x="480" y="440" width="180" height="40" rx="20" fill="rgba(255,255,255,0.15)" />
  <text x="570" y="467" font-family="'Noto Sans KR', 'Segoe UI', sans-serif" font-size="18" font-weight="700" fill="white" text-anchor="middle">28일 부트캠프</text>

  <!-- Bottom bar -->
  <rect x="0" y="540" width="${WIDTH}" height="90" fill="rgba(0,0,0,0.2)" />

  <!-- DreamIT Biz logo text -->
  <text x="80" y="595" font-family="'Segoe UI', sans-serif" font-size="26" font-weight="800" fill="white">DreamIT Biz</text>

  <!-- URL -->
  <text x="1120" y="595" font-family="'Segoe UI', monospace" font-size="18" font-weight="500" fill="rgba(255,255,255,0.7)" text-anchor="end">vibe-coding.dreamitbiz.com</text>
</svg>
`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath}`);

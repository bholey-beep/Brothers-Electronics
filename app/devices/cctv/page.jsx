'use client';
import Nav from "../../components/Navbar/Navbar";
import { useState } from 'react';

const cctvs = [
  {
    id: 1,
    name: 'Hikvision DS-2CD2387G2-LSU',
    brand: 'HIKVISION',
    rating: 4.9,
    cpu: 'Hi3516DV300',
    gpu: 'N/A',
    ram: '512MB',
    storage: '256GB MicroSD',
    screen: '8MP 4K ColorVu',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/00/38/cctv-1852788_1280.jpg',
    tag: '4K',
  },
  {
    id: 2,
    name: 'Dahua IPC-HDW3849H-AS-PV',
    brand: 'DAHUA',
    rating: 4.8,
    cpu: 'Hi3516CV300',
    gpu: 'N/A',
    ram: '512MB',
    storage: '256GB MicroSD',
    screen: '8MP Starlight',
    image: 'https://cdn.pixabay.com/photo/2022/06/18/00/07/cctv-security-camera-7267534_1280.jpg',
    tag: 'AI',
  },
  {
    id: 3,
    name: 'Reolink RLC-820A',
    brand: 'REOLINK',
    rating: 4.7,
    cpu: 'Sunplus 3620EV200',
    gpu: 'N/A',
    ram: '512MB',
    storage: '256GB MicroSD',
    screen: '4K 8MP PoE',
    image: 'https://cdn.pixabay.com/photo/2015/11/07/11/40/cctv-1031978_1280.jpg',
    tag: 'PoE',
  },
  {
    id: 4,
    name: 'Arlo Ultra 2',
    brand: 'ARLO',
    rating: 4.8,
    cpu: 'Ambarella CV22',
    gpu: 'N/A',
    ram: '1GB',
    storage: 'Cloud',
    screen: '4K Spotlight',
    image: 'https://cdn.pixabay.com/photo/2018/11/04/09/31/cctv-3795809_1280.jpg',
    tag: 'Wireless',
  },
  {
    id: 5,
    name: 'Axis P1455-LE',
    brand: 'AXIS',
    rating: 4.6,
    cpu: 'ARTPEC-8',
    gpu: 'N/A',
    ram: '1GB',
    storage: 'SDXC',
    screen: '1080p IR Optimized',
    image: 'https://cdn.pixabay.com/photo/2020/04/11/15/20/cctv-5037599_1280.jpg',
    tag: 'IR',
  },
  {
    id: 6,
    name: 'Uniview IPC3618LR3-P',
    brand: 'UNIVIEW',
    rating: 4.9,
    cpu: 'Hi3516EV300',
    gpu: 'N/A',
    ram: '512MB',
    storage: '256GB MicroSD',
    screen: '8MP Smart IR',
    image: 'https://cdn.pixabay.com/photo/2017/12/20/18/51/cctv-3036553_1280.jpg',
    tag: 'Pro',
  },
];

export default function AestheticCCTVPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-slate-100 px-4 py-10 md:px-10 lg:px-20">
      <Nav />

      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          Aesthetic <span className="text-violet-400">CCTV Line‑up</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
          Explore advanced surveillance cameras with cutting-edge AI, 4K resolution, and professional-grade security features.
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cctvs.map((cctv) => (
            <article
              key={cctv.id}
              className={`group rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-all duration-500 ${
                hovered === cctv.id
                  ? 'scale-[1.02] -translate-y-2 border-violet-500/60 shadow-[0_32px_90px_rgba(139,92,246,0.45)]'
                  : ''
              }`}
              onMouseEnter={() => setHovered(cctv.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={cctv.image}
                  alt={cctv.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/70 border border-violet-400/60 text-[11px] font-medium text-violet-200 backdrop-blur">
                    {cctv.tag}
                  </span>
                </div>
              </div>

              <div className="px-5 pt-4 pb-5">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-1">
                  {cctv.brand}
                </p>

                <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-3">
                  {cctv.name}
                </h2>

                <div className="flex items-center gap-2 mb-4 text-xs">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-black text-[11px]">★</span>
                  <span className="font-semibold">{cctv.rating.toFixed(1)}</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-zinc-300">
                  <div className="flex gap-2"><span>⚙</span>{cctv.cpu}</div>
                  <div className="flex gap-2"><span>🎮</span>{cctv.gpu}</div>
                  <div className="flex gap-2"><span>⚡</span>{cctv.ram}</div>
                  <div className="flex gap-2"><span>💾</span>{cctv.storage}</div>
                  <div className="flex gap-2"><span>📹</span>{cctv.screen}</div>
                </div>

                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />
                <div className="mt-3 flex justify-end text-[11px] text-violet-300">
                  View details →
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

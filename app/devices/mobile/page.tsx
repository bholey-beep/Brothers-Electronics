'use client';
import Nav from "../../components/Navbar/Navbar";
import { useState } from 'react';

const mobiles = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'APPLE',
    rating: 4.9,
    cpu: 'A17 Pro',
    gpu: 'Apple GPU 6-core',
    ram: '8GB',
    storage: '1TB',
    screen: '6.7\" Super Retina XDR',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&h=800&fit=crop',
    tag: 'Premium',
  },
  {
    id: 2,
    name: 'Galaxy S24 Ultra',
    brand: 'SAMSUNG',
    rating: 4.8,
    cpu: 'Snapdragon 8 Gen 3',
    gpu: 'Adreno 750',
    ram: '12GB',
    storage: '1TB',
    screen: '6.8\" Dynamic AMOLED 2X',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1200&h=800&fit=crop',
    tag: 'Flagship',
  },
  {
    id: 3,
    name: 'Pixel 8 Pro',
    brand: 'GOOGLE',
    rating: 4.7,
    cpu: 'Tensor G3',
    gpu: 'Mali-G715',
    ram: '12GB',
    storage: '1TB',
    screen: '6.7\" LTPO OLED 120Hz',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1200&h=800&fit=crop',
    tag: 'Camera',
  },
  {
    id: 4,
    name: 'OnePlus 12',
    brand: 'ONEPLUS',
    rating: 4.8,
    cpu: 'Snapdragon 8 Gen 3',
    gpu: 'Adreno 750',
    ram: '16GB',
    storage: '512GB',
    screen: '6.82\" AMOLED 120Hz',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=800&fit=crop',
    tag: 'Performance',
  },
  {
    id: 5,
    name: 'Xperia 1 V',
    brand: 'SONY',
    rating: 4.6,
    cpu: 'Snapdragon 8 Gen 2',
    gpu: 'Adreno 740',
    ram: '12GB',
    storage: '256GB',
    screen: '6.5\" 4K OLED 120Hz',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&h=800&fit=crop',
    tag: 'Creator',
  },
  {
    id: 6,
    name: 'ROG Phone 8 Pro',
    brand: 'ASUS',
    rating: 4.9,
    cpu: 'Snapdragon 8 Gen 3',
    gpu: 'Adreno 750',
    ram: '24GB',
    storage: '1TB',
    screen: '6.78\" AMOLED 165Hz',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&h=800&fit=crop',
    tag: 'Gaming',
  },
];

export default function AestheticMobilePage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-slate-100 px-4 py-10 md:px-10 lg:px-20">
      <Nav />

      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          Aesthetic <span className="text-violet-400">Mobile Line-up</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
          Explore cutting-edge smartphones crafted for creators, gamers, and professionals who demand the ultimate mobile experience.
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mobiles.map((mobile) => (
            <article
              key={mobile.id}
              className={`group rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-all duration-500 ${
                hovered === mobile.id
                  ? 'scale-[1.02] -translate-y-2 border-violet-500/60 shadow-[0_32px_90px_rgba(139,92,246,0.45)]'
                  : ''
              }`}
              onMouseEnter={() => setHovered(null)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={mobile.image}
                  alt={mobile.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/70 border border-violet-400/60 text-[11px] font-medium text-violet-200 backdrop-blur">
                    {mobile.tag}
                  </span>
                </div>
              </div>

              <div className="px-5 pt-4 pb-5">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-1">
                  {mobile.brand}
                </p>

                <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-3">
                  {mobile.name}
                </h2>

                <div className="flex items-center gap-2 mb-4 text-xs">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-black text-[11px]">
                    ★
                  </span>
                  <span className="font-semibold">{mobile.rating.toFixed(1)}</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-zinc-300">
                  <div className="flex items-center gap-2"><span>⚙</span>{mobile.cpu}</div>
                  <div className="flex items-center gap-2"><span>🎮</span>{mobile.gpu}</div>
                  <div className="flex items-center gap-2"><span>⚡</span>{mobile.ram}</div>
                  <div className="flex items-center gap-2"><span>💾</span>{mobile.storage}</div>
                  <div className="flex items-center gap-2"><span>📱</span>{mobile.screen}</div>
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

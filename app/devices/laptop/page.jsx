'use client';
import Nav from "../../components/Navbar/Navbar";
import { useState } from 'react';

const laptops = [
  {
    id: 1,
    name: 'MacBook Pro M3 Pro',
    brand: 'APPLE',
    rating: 4.9,
    cpu: 'M3 Pro',
    gpu: 'Integrated 18‑core',
    ram: '18GB Unified',
    storage: '512GB SSD',
    screen: '14.2" Liquid Retina XDR',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=800&fit=crop',
    tag: 'Creator',
  },
  {
    id: 2,
    name: 'Dell XPS 15',
    brand: 'DELL',
    rating: 4.8,
    cpu: 'Intel i7‑13700H',
    gpu: 'RTX 4060',
    ram: '16GB DDR5',
    storage: '1TB NVMe SSD',
    screen: '15.6" OLED 3K',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop',
    tag: 'Premium',
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    brand: 'HP',
    rating: 4.7,
    cpu: 'Intel i7‑1355U',
    gpu: 'Intel Iris Xe',
    ram: '16GB DDR5',
    storage: '512GB SSD',
    screen: '13.5" OLED Touch',
    image:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1200&h=800&fit=crop',
    tag: '2‑in‑1',
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'LENOVO',
    rating: 4.6,
    cpu: 'Intel i7‑1360P',
    gpu: 'Intel Iris Xe',
    ram: '16GB LPDDR5',
    storage: '1TB SSD',
    screen: '14" 2.8K',
    image:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&h=800&fit=crop',
    tag: 'Business',
  },
  {
    id: 5,
    name: 'Asus ZenBook Pro',
    brand: 'ASUS',
    rating: 4.8,
    cpu: 'Ryzen 7 7840U',
    gpu: 'RTX 4070',
    ram: '32GB DDR5',
    storage: '1TB NVMe SSD',
    screen: '14.5" 120Hz OLED',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=800&fit=crop',
    tag: 'Studio',
  },
  {
    id: 6,
    name: 'Razer Blade 16',
    brand: 'RAZER',
    rating: 4.9,
    cpu: 'Intel i9‑13950HX',
    gpu: 'RTX 4080',
    ram: '32GB DDR5',
    storage: '1TB NVMe SSD',
    screen: '16" QHD+ 240Hz',
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200&h=800&fit=crop',
    tag: 'Gaming',
  },
];

export default function AestheticLaptopPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-slate-100 px-4 py-10 md:px-10 lg:px-20">
      {/* Header */}
      <Nav />
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          Aesthetic <span className="text-violet-400">Laptop Line‑up</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
          Explore sleek, high‑performance laptops crafted for creators, gamers, and
          professionals who love the dark side of design.
        </p>
      </header>

      {/* Grid of cards */}
      <main className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {laptops.map((laptop) => (
            <article
              key={laptop.id}
              className={`group rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-all duration-500 ${
                hovered === laptop.id
                  ? 'scale-[1.02] -translate-y-2 border-violet-500/60 shadow-[0_32px_90px_rgba(139,92,246,0.45)]'
                  : ''
              }`}
              onMouseEnter={() => setHovered(laptop.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={laptop.image}
                  alt={laptop.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                {/* Tag pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/70 border border-violet-400/60 text-[11px] font-medium text-violet-200 backdrop-blur">
                    {laptop.tag}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="px-5 pt-4 pb-5">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-1">
                  {laptop.brand}
                </p>

                <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-3">
                  {laptop.name}
                </h2>

                <div className="flex items-center gap-2 mb-4 text-xs">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-black text-[11px]">
                    ★
                  </span>
                  <span className="font-semibold">{laptop.rating.toFixed(1)}</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-zinc-300">
                  <div className="flex gap-2 items-center"><span>⚙</span>{laptop.cpu}</div>
                  <div className="flex gap-2 items-center"><span>🎮</span>{laptop.gpu}</div>
                  <div className="flex gap-2 items-center"><span>⚡</span>{laptop.ram}</div>
                  <div className="flex gap-2 items-center"><span>💾</span>{laptop.storage}</div>
                  <div className="flex gap-2 items-center"><span>🖥</span>{laptop.screen}</div>
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

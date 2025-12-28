'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';



const logos = [
  { src: '/laptop.png', name: 'Laptop', href: "./devices/laptop" },
  { src: '/mobile.png', name: 'Mobile Phone', href: "./devices/mobile" },
  { src: '/cctv.png', name: 'CCTV', href: "./devices/cctv" },
  
  { src: '/laptop.png', name: 'Laptop', href: './devices/laptop' },
  { src: '/mobile.png', name: 'Mobile Phone', href: './devices/mobile' },
  { src: '/cctv.png', name: 'CCTV', href: './devices/cctv' },
  { src: '/laptop.png', name: 'Laptop', href: './devices/laptop' },
  { src: '/mobile.png', name: 'Mobile Phone', href: './devices/mobile' },
  { src: '/cctv.png', name: 'CCTV', href: './devices/cctv' },
];

export default function LogoMarquee() {
  return (
    <div>
      
      




    <div id="devices"
      className="p-4 mt-80 w-full "
      style={{
        boxShadow: `
          0px -30px 6px -25px rgba(144, 0, 255, 0.4),
          -0px 30px 6px -25px rgba(144, 0, 255, 0.4)
        `,
      }}
    >
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="left"
        className="w-full"
      >
        {logos.map(({ src, name, href },i ) => (
          <Link 
            key={i} 
            href={href}
            className="mx-12 flex flex-col items-center justify-center bg-black relative hover:scale-105 transition-all duration-200 hover:shadow-lg"
          >
            <Image
              src={src}
              alt={name}
              width={80}
              height={90}
              unoptimized
              className="hover:brightness-110 transition-all duration-200"
              style={{
                backgroundColor: '#000000',
              }}
            />
            <p className="text-white mt-2 text-sm font-medium hover:text-gray-300 transition-colors duration-200">
              {name}
            </p>
          </Link>
        ))}
      </Marquee>
    </div>
    </div>
  );
}

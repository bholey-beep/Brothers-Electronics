'use client';
import { useState } from 'react';
import Link from "next/link";
export default function DropdownFixed() {

  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    if (!isClicked) setIsOpen(true);
  };

  const handleClick = () => {
    setIsOpen(true);
    setIsClicked(!isClicked);
  };

  const handleMouseLeave = () => {
    if (!isClicked) setIsOpen(false);
  };



  return (
    <div
      className="flex items-center justify-between" // key change
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      {/* left: logo */}
      <div
        className="rounded-4xl p-2 m-2 inline-block"
        style={{
          width: "50px",
          height: "50px",
          boxShadow: "0 0 10px 4px rgba(144, 0, 255, 0.6)",
        }}
      >
        <img src="/b.png" className="w-[40px] h-[35px]" />
      </div>

      {/* right: menu button */}
      <div>
        <button>
          <div>
            <div
              className="rounded p-3 m-6 inline-flex flex-col justify-between"
              style={{
                width: "50px",
                height: "50px",
                boxShadow: "0 0 10px 4px rgba(144, 0, 255, 0.6)",
              }}
            >
              <span className="h-1 w-full bg-white"></span>
              <span className="h-1 w-full bg-white"></span>
              <span className="h-1 w-full bg-white"></span>
            </div>
          </div>
        </button>
      </div>

      <div
        className={` mt-40 mr-20 transition-all duration-300 ease-out origin-top transform ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          } absolute right-0  bg-black border border-gray-300 rounded shadow-lg z-10`}
      >
        
         <ul className=" divide-y divide-white">
  <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">
    <Link href="#home" className="flex items-center">
      <img src="/home.svg" className="w-[20px] h-[20px]" />
      Home
    </Link>
  </li>
  <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">
    <Link href="/about" className="flex items-center">
      <img src="/about.svg" className="w-[20px] h-[20px]" />
      About
    </Link>
  </li>
  {/* <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">
    <Link href="/skills" className="flex items-center">
      <img src="/skill.svg" className="w-[20px] h-[20px]" />
      Skills
    </Link> */}
  {/* </li> */}
  <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">
    <a href="#Swiper" className="flex items-center">
      <img src="/laptop.png" className="w-[25px] h-[25px]" />
      Devices
    </a>
  </li>
  <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">
    <Link href="/contacts" className="flex items-center">
      <img src="/home.svg" className="w-[20px] h-[20px]" />
      Contacts
    </Link>
  </li>
</ul>


      </div>
    </div>
  )
}



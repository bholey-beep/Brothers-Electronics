'use client';

import { useState } from 'react';

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
      className="relative w-40 mx-auto mt-40"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        Dropdown
      </button>

      {/* Animated Dropdown */}
      <div
        className={`transition-all duration-300 ease-out origin-top transform ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        } absolute right-0 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg z-10`}
      >
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
        </ul>
      </div>
    </div>
  );
}

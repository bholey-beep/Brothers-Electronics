'use client'
import {useEffect} from 'react';
 


function Header() {
   
  return (
   <header className=" ">
  <div className="relative pt-24 flex " >
  
  <div className=" " style={{
    paddingLeft: 'clamp(0.5rem, 0vw, 30rem)'}}>
  {/* <img 
    src={bhol} 
    alt="circle" 
    className="w-[150px] h-[150px] rounded-full border-2 border-black" 
  /> */}
</div>
 <div className=" ">
      <div className="flex flex-col items-start  sm:px-30 py-1  ">

<div className="bg-gradient-to-r  from-black  via-purple-950 to-black p-4 rounded-2xl inline-block"
data-aos="fade-up"
   style={{
     boxShadow: '0 -30px 6px -25px rgba(144, 0, 255, 0.4)'
, // glowing top line
  }}
>

  <h1
    className="font-bold rounded-xl px-3 text-5xl bg-gradient-to-r text-gray-100 top-0 z-50 transition sm:w-100 text-center md:mx-23 md:w-200"
    
  >
    Brother Electronics and Computer
  </h1>
</div>



   <h2 className="dark:bg-transparent rounded-xl py-2 my-2 px-1 leading-snug bg-gradient-to-r   text-white z-20 transition sm:w-100 text-center md:mx-50 md:w-150  "
   data-aos="fade-up"   data-aos-duration="1500">
    “Brother Electronics & Computer is your one-stop destination for modern electronics, computer solutions, and professional support.”
</h2>

</div>

      {/* {/* <button
        onClick={toggleMode}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition"
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button> */}
    </div> 
  </div>
</header>
);
}

export default Header;
'use client';

import instagram from  '/public/instgram.svg'
import facebook from  '/public/facebook.svg'


const Footer = () => {
  return (
    <footer id="footer" className="text-center py-10 mt-175 bg-[#000] text-gray-400 text-sm">
<div className='px-75 '>

  </div>
<div className="flex items-center justify-center gap-4">
    <img src="/instgram.svg"  className="h- w-6  "  />
  
   
    <img src="/facebook.svg"  className="h- w-6  "  />
  <span className=" text-center">
    
  </span>
</div>
</footer>
)
}

export default Footer

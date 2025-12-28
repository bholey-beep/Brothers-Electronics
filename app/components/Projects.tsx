'use client'
import React, { useEffect } from 'react';



const Projects = () => {
  
  return (
   <section id="projects" className="max-w-5xl mx-auto px-4 py-8 ">
  <h2 className="text-3xl font-bold border-l-4 border-b-0 pl-4 mb-6 text-white">Projects</h2>
  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
    <div data-aos="fade-right" className="bg-[#9d96b1] p-2 rounded-lg">
      <h3 className="text-xl font-bold ">Modern Portfolio</h3>
      <p>A responsive and stylish portfolio using HTML, CSS, and JavaScript.</p>
    </div>
    <div data-aos="fade-left" className="bg-[#9d96b1] p-2 rounded-lg ">
      <a href="https://todolist-steel-one.vercel.app/" >
        <h3 className="text-xl font-bold">To-do List</h3>
      </a>
      <p>Organize your daily goals efficiently. Stay focused and complete your tasks with ease.</p>
    </div>
    <div data-aos="fade-right" className="bg-[#9d96b1] p-2 rounded-lg">
      <h3 className="text-xl font-bold">Clear the Clutter</h3>
      <p>A utility script that organizes files into folders based on their file extensions. <a href="/run-organizer.bat" download className="text-black font-bold underline">Download</a>
    </p>
     </div>
  </div>
</section>

  );
};

export default Projects;

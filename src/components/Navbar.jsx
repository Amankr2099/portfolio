import React from 'react';

const Navbar = () => {
  return (
<nav className="bg-gray-600 opacity-80 p-1 sm:p-2 md:p-4  fixed w-4/5 md:w-3/4 sm:w-3/5 mx-auto rounded-full shadow-lg m-4 z-10 drop-shadow-md">
  <ul className="flex justify-around text-white font-semibold">
    <li>
      <a href="#profile" className="text-sm sm:text-base md:text-lg hover:text-blue-400 transition">Home</a>
    </li>
    <li>
      <a href="#about" className="text-sm sm:text-base md:text-lg hover:text-blue-400 transition">About Me</a>
    </li>
    <li>
      <a href="#projects" className="text-sm sm:text-base md:text-lg hover:text-blue-400 transition">Projects</a>
    </li>
    <li>
      <a href="#contact" className="text-sm sm:text-base md:text-lg hover:text-blue-400 transition">Contact Me</a>
    </li>
  </ul>
</nav>

  );
};

export default Navbar;


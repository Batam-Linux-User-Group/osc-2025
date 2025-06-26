import React from "react";

const Header = () => {
  return (
    <div className="bg-[#222222] py-5 flex justify-between items-center px-2 sm:px-10 ">
      <div className="text-white font-semibold">LOGO</div>
      <ul className="flex gap-5 sm:mr-20 text-gray-200 ">
        <li>
          <a href="#" className="hover:underline font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline font-semibold">
            Division
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline font-semibold">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

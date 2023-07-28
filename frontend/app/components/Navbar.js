"use client";
import Rainbow from "./Rainbow";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 text-white pt-3 bg-black backdrop-contrast-100 bg-opacity-40">
      <p className="text-2xl py-2">kitcoIN</p>
      <p className="flex gap-6">
        <span className="text-lg py-2 hover:text-blue-300 cursor-pointer">
          Token Minting
        </span>
        <Rainbow />
      </p>
    </div>
  );
};

export default Navbar;

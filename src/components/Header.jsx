import Link from 'next/link';
import React from 'react';
import { CgMenuGridR } from 'react-icons/cg';
function Header() {
  return (
    <header className=" h-[10vh]">
      <nav className="flex flex-row-reverse p-5 items-center space-x-5 ">
        <button className=" hover:shadow-md hover:brightness-105 rounded-md bg-blue-600 text-white px-6 py-2">
          Sign in
        </button>
        <div className=" flex p-2 items-center mx-auto hover:bg-gray-300 hover:rounded-full transition">
          <CgMenuGridR className="" size={30} />
        </div>
        <Link className=" hover:underline" href="/">
          Images
        </Link>
        <Link className=" hover:underline" href="/">
          Gmail
        </Link>
      </nav>
    </header>
  );
}

export default Header;

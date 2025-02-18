"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="shadow p-[1rem] bg-[#000000] flex justify-between items-center fixed top-0 left-0 right-0 z-30">
        <div>
          {/* <Image src="/agentia-01 (1).png" width={200} height={200} alt="agentia"/> */}
          <h1 className="font-bold text-2xl">Agentia World</h1>
        </div>
        {toggle ? (
          <IoMdClose
            className="z-20 block md:hidden cursor-pointer text-white"
            onClick={() => setToggle(false)}
          />
        ) : (
          <FaBars
            className="z-20 block md:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}
        <ul className="hidden gap-10 md:flex items-center">
          <li className="cursor-pointer  hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/">Features</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/about">Technology</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/services">Agents</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/contact">Pricing</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-600 text-black py-2 px-5 rounded-lg shadow-lg hover:bg-[#ece525e8] transition-all duration-300 ease-in-out transform hover:scale-105">
              Launch Console
            </button>
          </li>
        </ul>

        {/* Responsive */}
        <ul
          className={`z-10 w-[60%] h-screen fixed top-0 flex justify-center items-center gap-10 flex-col bg-[#0b0b0b] text-white font-bold md:hidden transition-all duration-500 ease-in-out ${
            toggle ? "right-0" : "right-[-100%]"
          }`}
        >
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/">Features</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/about">Technology</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/service">Agents</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/contact">Pricing</Link>
          </li>
          <li className="cursor-pointer hover:text-lg transition-all duration-300 ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button className=" bg-gradient-to-r from-orange-500 to-yellow-600 text-black py-2 px-5 rounded-lg shadow-lg hover:bg-[#ece525e8] transition-all duration-300 ease-in-out transform hover:scale-100">
              {" "}
              Launch Console
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

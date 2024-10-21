"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Suspense, useEffect, useRef, useState } from 'react'

export default function Navbar_For_Top() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname(); // Get the current path

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
      <div className="md:pt-5 pt-3">
        <div className="navbar z-50 relative rounded-lg" ref={menuRef}>
          <div className="navbar-start">
            <Link href="/">
              <Image
                src="/images/logo.png"
                height={100}
                width={300}
                alt=""
                className="md:h-24 h-20 w-auto rounded-lg "
              />
            </Link>
          </div>
          <div className="navbar-end lg:hidden">
            <div className="dropdown dropdown-end">
              <label className="rounded-lg swap swap-rotate bg-[#1b74e4] text-white h-10 w-12 lg:text-[#1b74e4]  md:h-12 md:w-14">
                <input
                  type="checkbox"
                  className=""
                  checked={menuOpen}
                  onChange={() => setMenuOpen(!menuOpen)}
                />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
              {/* dropdown-content */}
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content lg:hidden glass bg-[#1b74e4] bg-opacity-100 z-[1] mt-3 md:w-52 w-44 p-2 shadow rounded-lg focus:text-white text-white ${
                  menuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    href="/"
                    className={`text-lg md:text-xl hover:text-white ${
                      pathname === "/"
                        ? "font-semibold underline underline-offset-4"
                        : "text-white"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`text-lg md:text-xl hover:text-white ${
                      pathname === "/about"
                        ? "font-semibold underline underline-offset-4"
                        : "text-white"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resume"
                    className={`text-lg md:text-xl hover:text-white ${
                      pathname === "/resume"
                        ? "font-semibold underline underline-offset-4"
                        : "text-white"
                    }`}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works"
                    className={`text-lg md:text-xl hover:text-white ${
                      pathname === "/works"
                        ? "font-semibold underline underline-offset-4"
                        : "text-white"
                    }`}
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className={`text-lg md:text-xl hover:text-white ${
                      pathname === "/blogs"
                        ? "font-semibold underline underline-offset-4"
                        : "text-white"
                    }`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`text-lg md:text-xl hover:text-white ${
                      pathname === "/contact"
                        ? "font-semibold underline underline-offset-4"
                        : "text-white"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

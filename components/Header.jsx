"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "FAQ"];
  return (
    <header className="fixed inset-x-2 z-50 mt-4 rounded-md border border-primary bg-base-200 shadow-md transition-all">
      <div className="navbar">
        <div className="navbar-start">
          <button className="btn btn-ghost">
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
              <span className="relative text-primary-content">PaKar</span>
            </span>
          </button>
        </div>
        <div className="navbar-center hidden lg:block">
          <nav className="flex gap-4  [&_button]:btn [&_button]:btn-ghost">
            {links.map((link, index) => (
              <Link href={`/#${link.toLocaleLowerCase()}`} key={index}>
                <button>{link}</button>
              </Link>
            ))}
          </nav>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            <Link href="/login">
              <button className="btn btn-primary hidden lg:block">Login</button>
            </Link>
            <Link href="/register">
              <button className="btn btn-outline btn-primary hidden lg:block">
                Register
              </button>
            </Link>
            <button
              id="btn-mobile"
              className="btn btn-outline lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden rounded-md bg-base-200 duration-150 lg:hidden ${
          open ? "h-[280px]" : "h-0 "
        }`}
      >
        <nav className="flex w-full flex-col items-center justify-center gap-1 py-2 [&_button]:btn [&_button]:btn-ghost ">
          {links.map((link, index) => (
            <Link href={`/#${link.toLocaleLowerCase()}`} key={index}>
              <button key={index}>{link}</button>
            </Link>
          ))}
        </nav>
        <div className="flex w-full justify-center gap-2 pb-4">
          <Link href="/login">
            <button className="btn  btn-primary">Login</button>
          </Link>
          <Link href="/register">
            <button className="btn btn-outline">Register</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

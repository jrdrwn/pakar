"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "FAQ"];
  const onClick = () => {
    const modal = document.getElementById("my_modal_3");
    modal.showModal();
  };

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
              <Link
                href={`/${link === "Home" ? "" : link.toLocaleLowerCase()}`}
                key={index}
              >
                <button>{link}</button>
              </Link>
            ))}
          </nav>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            <button
              className="btn btn-primary hidden lg:block"
              onClick={onClick}
            >
              Login
            </button>
            <button
              className="btn btn-outline btn-primary hidden lg:block"
              onClick={onClick}
            >
              Sign Up
            </button>
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
        className={`overflow-hidden rounded-md bg-base-200 duration-150 lg:hidden ${open ? "h-[280px]" : "h-0 "
          }`}
      >
        <nav className="flex w-full flex-col items-center justify-center gap-1 py-2 [&_button]:btn [&_button]:btn-ghost ">
          {links.map((link, index) => (
            <Link
              href={`/${link === "Home" ? "" : link.toLocaleLowerCase()}`}
              key={index}
            >
              <button key={index}>{link}</button>
            </Link>
          ))}
        </nav>
        <div className="flex w-full justify-center gap-2 pb-4">
          <button className="btn  btn-primary" onClick={onClick}>
            Login
          </button>
          <button className="btn btn-outline" onClick={onClick}>
            Sign Up
          </button>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              X
            </button>
          </form>
          <h3 className="text-lg font-bold">Segera hadir!</h3>
          <p className="py-4">Fitur ini akan segera hadir, Terima Kasih!</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </header>
  );
}

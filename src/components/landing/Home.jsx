"use client";

import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css";
import { MdCheckCircleOutline } from "react-icons/md";
import Hero from "../media/Hero";

export default function Home() {
  const driver = new Driver({
    popoverClass: "driverjs-theme",
    showProgress: true,
  });
  const desktopSteps = [
    {
      element: ".navbar",
      popover: {
        title: "Header",
        description:
          "Menyajikan informasi-informasi penting tentang halaman web",
      },
    },
    {
      element: ".navbar-start",
      popover: {
        title: "Brand Logo",
        description:
          "Logo dari brand yang bersangkutan, dalam konteks ini Pakar",
      },
    },
    {
      element: ".navbar-center",
      popover: {
        title: "Navigation",
        description:
          "Menu navigasi yang berisi link-link yang mengarah ke halaman lain",
      },
    },
    {
      element: ".navbar-end",
      popover: { title: "Login", description: "Menu untuk login atau sign up" },
    },
    {
      element: "#hero",
      popover: {
        title: "Hero",
        description:
          "bagian teratas dari suatu halaman web yang biasanya mencakup elemen-elemen besar dan menonjol untuk menarik perhatian pengguna",
      },
    },
    {
      element: "#about",
      popover: {
        title: "Tentang Kami",
        description: "Menjelaskan lebih lanjut tentang apa itu Pakar?",
      },
    },
    {
      element: ".stats",
      popover: {
        title: "Statistik",
        description: "Menampilkan statistik karya yang ada di Pakar",
      },
    },
    {
      element: "#services",
      popover: {
        title: "Layanan",
        description: "Beberapa layanan yang ditawarkan oleh Pakar",
      },
    },
    {
      element: "#faq",
      popover: {
        title: "FAQ",
        description:
          "Beberapa pertanyaan yang sering ditanyakan terkait tentang Pakar",
      },
    },
    {
      element: "footer",
      popover: {
        title: "Footer",
        description:
          "Bagian bawah dari suatu halaman web yang biasanya berisi informasi-informasi penting lainnya",
      },
    },
  ];
  const mobileSteps = [
    {
      element: ".navbar",
      popover: {
        title: "Header",
        description:
          "Menyajikan informasi-informasi penting tentang halaman web",
      },
    },
    {
      element: ".navbar-start",
      popover: {
        title: "Brand Logo",
        description:
          "Logo dari brand yang bersangkutan, dalam konteks ini Pakar",
      },
    },
    {
      element: "#btn-mobile",
      popover: {
        title: "Hamburger Menu",
        description:
          "Untuk Membuka Navigasi ke halaman lain dan melakukan login atau signup",
      },
    },
    {
      element: "#hero",
      popover: {
        title: "Hero",
        description:
          "bagian teratas dari suatu halaman web yang biasanya mencakup elemen-elemen besar dan menonjol untuk menarik perhatian pengguna",
      },
    },
    {
      element: "#about",
      popover: {
        title: "Tentang Kami",
        description: "Menjelaskan lebih lanjut tentang apa itu Pakar?",
      },
    },
    {
      element: ".stats",
      popover: {
        title: "Statistik",
        description: "Menampilkan statistik karya yang ada di Pakar",
      },
    },
    {
      element: "#services",
      popover: {
        title: "Layanan",
        description: "Beberapa layanan yang ditawarkan oleh Pakar",
      },
    },
    {
      element: "#faq",
      popover: {
        title: "FAQ",
        description:
          "Beberapa pertanyaan yang sering ditanyakan terkait tentang Pakar",
      },
    },
    {
      element: "footer",
      popover: {
        title: "Footer",
        description:
          "Bagian bawah dari suatu halaman web yang biasanya berisi informasi-informasi penting lainnya",
      },
    },
  ];
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-4xl flex-col items-center gap-6"
    >
      <h1 className="z-10 text-center text-4xl font-bold leading-tight tracking-wide lg:text-6xl">
        Ayo jadikan karya Anda menjadi{" "}
        <span className="relative mt-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
          <span className="relative text-primary-content">berharga!</span>
        </span>
      </h1>

      <ul className="z-10 flex gap-6 [&_li>span]:text-xl [&_li>span]:text-primary [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:text-lg [&_li]:font-medium [&_li]:tracking-wide">
        <li>
          <span>
            <MdCheckCircleOutline />
          </span>
          Memamerkan
        </li>
        <li>
          <span>
            <MdCheckCircleOutline />
          </span>
          Melihat
        </li>
        <li>
          <span>
            <MdCheckCircleOutline />
          </span>
          Menjual
        </li>
      </ul>
      <div className="z-10">
        <button
          className="btn btn-primary  lg:hidden"
          onClick={() => {
            driver.setSteps(mobileSteps);
            driver.drive();
          }}
        >
          Ayo Mulai Tour Sekarang!
        </button>
        <button
          className="btn btn-primary  hidden lg:block"
          onClick={() => {
            driver.setSteps(desktopSteps);
            driver.drive();
          }}
        >
          Mulai Tour Sekarang!
        </button>
      </div>
      <Hero />
    </section>
  );
}

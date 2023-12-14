"use client";

import { MdCheckCircleOutline } from "react-icons/md";
import Hero from "../../components/Hero";
import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
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
      element: "footer",
      popover: {
        title: "Footer",
        description:
          "Bagian bawah dari suatu halaman web yang biasanya berisi informasi-informasi penting lainnya",
      },
    },
  ];

  return (
    <main className="container mx-auto min-h-max p-4 pt-28">
      <section
        id="hero"
        className="mx-auto flex flex-col items-center lg:flex-row-reverse  lg:justify-around"
      >
        <div className="max-w-[600px]">
          <h1 className="text-4xl font-bold leading-tight tracking-wide lg:text-6xl">
            Ayo jadikan karya Anda menjadi berharga di{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
              {" "}
              <span className="relative text-primary-content">PaKar!</span>{" "}
            </span>
          </h1>
          <p className="my-4 leading-relaxed tracking-wide">
            Sebagai tempat penyimpanan yang aman dan terorganisir untuk beragam
            karya yang dihasilkan oleh mahasiswa atau masyarakat umum serta
            menjadikan karya-karya tersebut mempunyai nilai jual.
          </p>
          <ul className="mb-4 mt-2 [&_li>span]:text-xl [&_li>span]:text-primary [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:text-lg [&_li]:font-medium [&_li]:tracking-wide">
            <li>
              {" "}
              <span>
                <MdCheckCircleOutline />{" "}
              </span>{" "}
              Memamerkan{" "}
            </li>
            <li>
              {" "}
              <span>
                <MdCheckCircleOutline />{" "}
              </span>{" "}
              Melihat{" "}
            </li>
            <li>
              {" "}
              <span>
                <MdCheckCircleOutline />{" "}
              </span>{" "}
              Menjual{" "}
            </li>
          </ul>
          <div>
            <button
              className="btn btn-primary lg:hidden"
              onClick={() => {
                driver.setSteps(mobileSteps);
                driver.drive();
              }}
            >
              Ayo Mulai Tour Sekarang!
            </button>
            <button
              className="btn btn-primary hidden lg:block"
              onClick={() => {
                driver.setSteps(desktopSteps);
                driver.drive();
              }}
            >
              Ayo Mulai Tour Sekarang!
            </button>
          </div>
        </div>
        <div className="w-full max-w-[600px]">
          <Hero />
        </div>
      </section>
    </main>
  );
}

export default Home;

"use client";

import HeroAbout from "../../../components/HeroAbout";
import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const driver = new Driver({
      popoverClass: "driverjs-theme",
      showProgress: true,
      steps: [
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
      ],
    });
    driver.drive();
  }, []);
  return (
    <>
      <main className="container mx-auto min-h-max p-4 pt-28">
        <section
          id="about"
          className="relative mx-auto flex flex-col items-center justify-center lg:flex-col-reverse lg:justify-around"
        >
          <div className="fixed top-24 -z-10 w-full max-w-lg opacity-10">
            <HeroAbout />
          </div>
          <div className=" text-center">
            <div className="mx-auto">
              <h1 className="mx-auto text-center text-4xl font-bold">
                About{" "}
                <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
                  {" "}
                  <span className="relative text-primary-content">us</span>{" "}
                </span>
              </h1>
              <p className=" mx-auto mt-1 text-center font-medium">
                Platform Pengelolaan, Pameran, dan Penjualan Karya Kreatif
              </p>
            </div>
            <p className="mx-auto mt-4 max-w-[600px] leading-relaxed tracking-wide">
              Pameran Karya (PAKAR) adalah sebuah perangkat lunak berbasis
              website yang menyediakan platform inovatif untuk mengelola,
              menampilkan, dan menjual berbagai jenis karya, baik yang berbasis
              teknologi maupun non-teknologi. Dikembangkan sebagai respons
              terhadap era perkembangan teknologi yang pesat, PAKAR dirancang
              untuk dapat diakses secara multiplatform, termasuk Android dan
              Desktop , memanfaatkan ketersediaan akses internet dan browser di
              berbagai platform.
            </p>
            <div className="stats stats-vertical mx-auto mt-8 border border-primary shadow lg:stats-horizontal">
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Total Karya</div>
                <div className="stat-value">234K</div>
                <div className="stat-desc">100% meningkat dari sebelumnya</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Total Pengguna</div>
                <div className="stat-value">1M</div>
                <div className="stat-desc">100% meningkat dari sebelumnya</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Karya Terjual</div>
                <div className="stat-value">193</div>
                <div className="stat-desc">100% meningkat dari sebelumnya</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

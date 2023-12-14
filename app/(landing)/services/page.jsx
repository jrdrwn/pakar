"use client";

import HeroServices from "../../../components/HeroServices";
import { MdOutlineAttachMoney, MdOutlineDesignServices } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const driver = new Driver({
      popoverClass: "driverjs-theme",
      showProgress: true,
      steps: [
        {
          element: "#services",
          popover: {
            title: "Layanan",
            description: "Beberapa layanan yang ditawarkan oleh Pakar",
          },
        },
      ],
    });
    driver.drive();
  }, []);
  return (
    <>
      <main className="container mx-auto min-h-max p-4 pt-28" id="services">
        <section className="relative mx-auto mb-4 flex flex-col items-center justify-center lg:flex-col-reverse lg:justify-around">
          <div className="fixed top-24 -z-10 w-full max-w-3xl opacity-10">
            <HeroServices />
          </div>
          <div className=" text-center">
            <div className="mx-auto">
              <h1 className="mx-auto text-center text-4xl font-bold">
                <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
                  {" "}
                  <span className="relative text-primary-content">
                    Services
                  </span>{" "}
                </span>
              </h1>
              <p className="mx-auto mt-1 max-w-xl text-center font-medium">
                PAKAR Menyediakan berbagai layanan untuk membantu para
                penggunannya agar tetap semangat untuk menghasilkan karya.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col flex-wrap items-center gap-4 lg:flex-row lg:justify-center">
          <div className="w-60 rounded-xl border  border-primary p-3">
            <div className="w-min rounded-full border border-primary p-1">
              <span className="text-4xl text-primary">
                <TbLicense />
              </span>
            </div>
            <div className="my-2 text-xl font-bold uppercase">Hak Cipta</div>
            <div className="leading-relaxed">
              Layanan pemeriksaan lisensi untuk memastikan keabsahan dan
              perlindungan hukum terkait karya seni atau desain Anda
            </div>
          </div>
          <div className="w-60 rounded-xl bg-primary p-3 text-primary-content shadow">
            <div className="w-min rounded-full border border-primary-content p-1">
              <span className="text-4xl text-primary">
                <MdOutlineAttachMoney className="text-primary-content" />
              </span>
            </div>
            <div className="my-2 text-xl font-bold uppercase">Jual Beli</div>
            <div className="leading-relaxed">
              Menyediakan fitur transaksi jual beli karya, menciptakan ekosistem
              ekonomi kreatif dan mendukung pertumbuhan kolaborasi di antara
              pengguna
            </div>
          </div>

          <div className="w-60 rounded-xl border border-primary p-3">
            <div className="w-min rounded-full border border-primary p-1">
              <span className="text-4xl text-primary">
                <MdOutlineDesignServices />
              </span>
            </div>
            <div className="my-2 text-xl font-bold uppercase">Manajemen</div>
            <div className="leading-relaxed">
              {" "}
              Dengan fokus pada efisiensi, kolaborasi, dan inovasi, tim kami
              menyediakan solusi yang mendukung proses penciptaan, distribusi,
              dan pemasaran karya Anda
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

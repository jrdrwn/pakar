"use client";

import {
  MdCheckCircleOutline,
  MdOutlineAttachMoney,
  MdOutlineDesignServices,
} from "react-icons/md";
import Hero from "../../components/media/Hero";
import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css";
import HeroAbout from "../../components/media/HeroAbout";
import HeroServices from "../../components/media/HeroServices";
import { TbLicense } from "react-icons/tb";
import HeroFAQ from "../../components/media/HeroFAQ";

function Home() {
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
  const pakarFAQ = [
    {
      question: "Apakah PAKAR dapat diakses dari berbagai platform?",
      answer:
        "Ya, PAKAR dapat diakses dari berbagai platform, termasuk Android dan Desktop, hanya membutuhkan akses internet dan browser.",
    },
    {
      question: "Apa saja fitur utama yang ditawarkan oleh PAKAR?",
      answer:
        "Fitur utama PAKAR meliputi login, logout, pembuatan akun, eksplorasi karya, dashboard pengguna, dan transaksi jual beli karya.",
    },
    {
      question: "Bagaimana PAKAR mendukung transaksi jual beli karya?",
      answer:
        "PAKAR menyediakan fitur transaksi jual beli karya yang menciptakan ekosistem ekonomi kreatif, termasuk dukungan dari payment gateway terpercaya di Indonesia, yaitu Midtrans.",
    },
    {
      question: "Apa kelebihan PAKAR dibandingkan dengan platform sejenis?",
      answer:
        "PAKAR menonjol dengan menyediakan wadah untuk karya mahasiswa dan masyarakat umum, dengan fokus pada manajemen karya dan transaksi jual beli yang mendukung pertumbuhan kolaborasi.",
    },
  ];
  return (
    <main className="container mx-auto min-h-max p-4 pt-28 [&_section]:pt-20">
      <section
        id="home"
        className="mx-auto flex flex-col items-center gap-2 lg:flex-row-reverse lg:justify-around"
      >
        <div className="max-w-[600px]">
          <h1 className="text-4xl font-bold leading-tight tracking-wide lg:text-6xl">
            Ayo jadikan karya Anda menjadi berharga di{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
              <span className="relative text-primary-content">PaKar!</span>
            </span>
          </h1>
          <p className="my-4 leading-relaxed tracking-wide">
            Sebagai tempat penyimpanan yang aman dan terorganisir untuk beragam
            karya yang dihasilkan oleh mahasiswa atau masyarakat umum serta
            menjadikan karya-karya tersebut mempunyai nilai jual.
          </p>
          <ul className="mb-4 mt-2 [&_li>span]:text-xl [&_li>span]:text-primary [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:text-lg [&_li]:font-medium [&_li]:tracking-wide">
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
      <section
        id="about"
        className="flex flex-col items-center gap-2  lg:flex-row lg:justify-around "
      >
        <div className="max-w-[600px]">
          <div className="">
            <h1 className="mx-auto text-4xl font-bold">
              About{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
                <span className="relative text-primary-content">us</span>
              </span>
            </h1>
            <p className=" mx-auto mt-1 font-medium">
              Platform Pengelolaan, Pameran, dan Penjualan Karya Kreatif
            </p>
          </div>
          <p className="mt-4 leading-relaxed tracking-wide">
            Pameran Karya (PAKAR) adalah sebuah perangkat lunak berbasis website
            yang menyediakan platform inovatif untuk mengelola, menampilkan, dan
            menjual berbagai jenis karya, baik yang berbasis teknologi maupun
            non-teknologi. Dikembangkan sebagai respons terhadap era
            perkembangan teknologi yang pesat, PAKAR dirancang untuk dapat
            diakses secara multiplatform, termasuk Android dan Desktop ,
            memanfaatkan ketersediaan akses internet dan browser di berbagai
            platform.
          </p>
          <div className="flex items-center justify-center">
            <div className="stats stats-vertical mx-auto mt-8  border border-primary shadow sm:stats-horizontal sm:w-full">
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
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg">
          <HeroAbout />
        </div>
      </section>
      <section
        id="services"
        className="mx-auto mb-4 flex flex-col-reverse items-center justify-center gap-2 lg:flex-row lg:justify-around "
      >
        <div className="w-full max-w-[600px]">
          <HeroServices />
        </div>
        <div className="max-w-[600px]">
          <div>
            <div>
              <h1 className="text-4xl font-bold">
                <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
                  <span className="relative text-primary-content">
                    Services
                  </span>
                </span>
              </h1>
              <p className="mt-1 max-w-xl font-medium">
                PAKAR Menyediakan berbagai layanan untuk membantu para
                penggunannya agar tetap semangat untuk menghasilkan karya.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-around gap-2 sm:flex-row sm:flex-nowrap">
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
                Menyediakan fitur transaksi jual beli karya, menciptakan
                ekosistem ekonomi kreatif dan mendukung pertumbuhan kolaborasi
                di antara pengguna
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
                Dengan fokus pada efisiensi, kolaborasi, dan inovasi, tim kami
                menyediakan solusi yang mendukung proses penciptaan, distribusi,
                dan pemasaran karya Anda
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="flex flex-col items-center gap-2  lg:flex-row  lg:justify-around"
      >
        <div className="max-w-[600px]">
          <div className="">
            <h1 className="  text-4xl font-bold">
              Frequently{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
                <span className="relative text-primary-content">Asked </span>
              </span>{" "}
              Questions
            </h1>
            <p className=" mt-1 max-w-xl  font-medium">
              Kumpulan pertanyaan yang sering diajukan oleh pengguna atau
              pelanggan dan jawaban singkat dan jelas untuk membantu pengguna
              mendapatkan informasi.
            </p>
          </div>
          <div className=" mt-10 flex  flex-col gap-2" id="faq">
            {pakarFAQ.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus border border-primary bg-base-200"
              >
                {index === 0 ? (
                  <input
                    type="radio"
                    name="my-accordion-3"
                    defaultChecked="checked"
                  />
                ) : (
                  <input type="radio" name="my-accordion-3" />
                )}

                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content text-primary">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[600px]">
          <HeroFAQ />
        </div>
      </section>
    </main>
  );
}

export default Home;

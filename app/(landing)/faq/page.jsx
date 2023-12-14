"use client";

import HeroFAQ from "../../../components/HeroFAQ";
import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    const driver = new Driver({
      popoverClass: "driverjs-theme",
      showProgress: true,
      steps: [
        {
          element: "#faq",
          popover: {
            title: "FAQ",
            description:
              "Beberapa pertanyaan yang sering ditanyakan terkait tentang Pakar",
          },
        },
      ],
    });
    driver.drive();
  }, []);
  const pakarFAQ = [
    {
      question: "Apa itu Pameran Karya (PAKAR)?",
      answer:
        "PAKAR adalah perangkat lunak berbasis website yang menyediakan platform untuk mengelola, menampilkan, dan menjual berbagai jenis karya, termasuk proyek desain, website, dan kerajinan tangan.",
    },
    {
      question: "Apa yang mendorong pengembangan PAKAR?",
      answer:
        "Pengembangan PAKAR dipicu oleh peningkatan jumlah proyek mahasiswa yang seringkali tidak memiliki wadah yang sesuai untuk menampung dan mengembangkan potensi kreatif mereka.",
    },
    {
      question: "Apa tujuan dari PAKAR?",
      answer:
        "PAKAR bertujuan memberikan wadah efisien bagi mahasiswa dan masyarakat umum untuk mengelola karya-karya mereka serta menciptakan tempat untuk mencari penghasilan dari karya yang dibuat.",
    },
    {
      question: "Bagaimana PAKAR mengatasi tantangan pengelolaan kreativitas?",
      answer:
        "PAKAR dirancang sebagai platform yang efisien untuk mengatasi tantangan pengelolaan kreativitas dengan menyediakan tempat penyimpanan yang aman dan terorganisir untuk beragam karya.",
    },
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
      question: "Bagaimana cara mencari referensi lebih lanjut tentang PAKAR?",
      answer:
        "Anda dapat merujuk ke referensi utama, termasuk artikel 'Desain dan Implementasi Aplikasi Web untuk Pameran Karya Mahasiswa' dan disertasi 'Rancang Bangun Aplikasi Pameran Karya Mahasiswa Berbasis Web.'",
    },
    {
      question: "Apa kelebihan PAKAR dibandingkan dengan platform sejenis?",
      answer:
        "PAKAR menonjol dengan menyediakan wadah untuk karya mahasiswa dan masyarakat umum, dengan fokus pada manajemen karya dan transaksi jual beli yang mendukung pertumbuhan kolaborasi.",
    },
    {
      question: "Bagaimana cara menghubungi dukungan teknis PAKAR?",
      answer:
        "Untuk bantuan teknis atau pertanyaan lebih lanjut, silakan hubungi tim dukungan teknis kami melalui formulir kontak yang tersedia di platform PAKAR.",
    },
  ];
  return (
    <>
      <main className="container mx-auto min-h-max p-4 pt-28">
        <section className="relative mx-auto mb-4 flex flex-col items-center justify-center lg:flex-col-reverse lg:justify-around">
          <div className="fixed top-24 -z-10 w-full max-w-3xl opacity-10">
            <HeroFAQ />
          </div>
          <div className=" text-center">
            <div className="mx-auto">
              <h1 className="mx-auto text-center text-4xl font-bold">
                {" "}
                Frequently{" "}
                <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
                  {" "}
                  <span className="relative text-primary-content">
                    Asked
                  </span>{" "}
                </span>{" "}
                Questions
              </h1>
              <p className="mx-auto mt-1 max-w-xl text-center font-medium">
                Kumpulan pertanyaan yang sering diajukan oleh pengguna atau
                pelanggan dan jawaban singkat dan jelas untuk membantu pengguna
                mendapatkan informasi.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-10 flex max-w-lg flex-col gap-2" id="faq">
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
              <div className="collapse-content text-primary"> {faq.answer}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

import HeroFAQ from "../media/HeroFAQ";

export default function FAQ() {
  const data = [
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
          {data.map((faq, index) => (
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
              <div className="collapse-content text-primary">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[600px]">
        <HeroFAQ />
      </div>
    </section>
  );
}

import HeroAbout from "../media/HeroAbout";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-2  lg:flex-row lg:justify-around [&_div]:z-10"
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
          non-teknologi. Dikembangkan sebagai respons terhadap era perkembangan
          teknologi yang pesat, PAKAR dirancang untuk dapat diakses secara
          multiplatform, termasuk Android dan Desktop , memanfaatkan
          ketersediaan akses internet dan browser di berbagai platform.
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
  );
}

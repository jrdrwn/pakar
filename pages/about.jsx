import HeroAbout from "../components/HeroAbout";
import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css"
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        const driver = new Driver({
            popoverClass: 'driverjs-theme',
            showProgress: true,
            steps: [
              { element: '#about', popover: { title: 'Tentang Kami', description: 'Menjelaskan lebih lanjut tentang apa itu Pakar?' } },
              {element: '.stats', popover: { title: 'Statistik', description: 'Menampilkan statistik karya yang ada di Pakar'}} 
            ]
        });
        driver.drive();
    }, []);
    return <>
        <main className="container mx-auto p-4 pt-28 min-h-max">
            <section id="about" className="relative flex flex-col justify-center lg:flex-col-reverse lg:justify-around items-center mx-auto">
                <div className="w-full max-w-lg fixed top-24 -z-10 opacity-10">
                    <HeroAbout />
                </div>
                <div className=" text-center">
                    <div className="mx-auto">
                        <h1 className="text-4xl font-bold mx-auto text-center">About  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"> <span className="relative text-primary-content">us</span> </span></h1>
                        <p className=" font-medium mt-1 mx-auto text-center">Platform Pengelolaan, Pameran, dan Penjualan Karya Kreatif</p>
                    </div>
                    <p className="leading-relaxed tracking-wide mt-4 max-w-[600px] mx-auto">Pameran Karya (PAKAR) adalah sebuah perangkat lunak berbasis website yang menyediakan platform inovatif untuk mengelola, menampilkan, dan
                        menjual berbagai jenis karya, baik yang berbasis teknologi maupun non-teknologi. Dikembangkan sebagai respons terhadap era perkembangan teknologi
                        yang pesat, PAKAR dirancang untuk dapat diakses secara multiplatform, termasuk Android dan Desktop , memanfaatkan ketersediaan akses internet dan
                        browser di berbagai platform.</p>
                    <div className="stats stats-vertical lg:stats-horizontal shadow mx-auto mt-8 border border-primary">
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
}
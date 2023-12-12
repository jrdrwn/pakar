import HeroServices from "../components/HeroServices";
import { MdOutlineAttachMoney, MdOutlineDesignServices } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { driver as Driver } from "driver.js";
import "driver.js/dist/driver.css"
import { useEffect } from "react";

export default function Services() {
    useEffect(() => {
        const driver = new Driver({
            popoverClass: 'driverjs-theme',
            showProgress: true,
            steps: [
              { element: '#services', popover: { title: 'Layanan', description: 'Beberapa layanan yang ditawarkan oleh Pakar' } },
            ]
        });
        driver.drive();
    }, []);
    return <>
        <main className="container mx-auto p-4 pt-28 min-h-max" id="services">
            <section className="relative flex flex-col justify-center lg:flex-col-reverse lg:justify-around items-center mx-auto mb-4">
                <div className="w-full max-w-3xl fixed top-24 -z-10 opacity-10">
                    <HeroServices />
                </div>
                <div className=" text-center">
                    <div className="mx-auto">
                        <h1 className="text-4xl font-bold mx-auto text-center"><span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"> <span className="relative text-primary-content">Services</span> </span></h1>
                        <p className="font-medium mt-1 mx-auto text-center max-w-xl">PAKAR Menyediakan berbagai layanan untuk membantu para penggunannya agar tetap semangat untuk menghasilkan karya.</p>
                    </div>
                </div>
            </section>
            <div className="flex flex-col lg:flex-row flex-wrap gap-4 lg:justify-center items-center">
                <div className="w-60 border-primary border  rounded-xl p-3">
                    <div className="rounded-full border border-primary w-min p-1">
                        <span className="text-4xl text-primary"><TbLicense /></span>
                    </div>
                    <div className="font-bold uppercase text-xl my-2">Hak Cipta</div>
                    <div className="leading-relaxed">Layanan pemeriksaan lisensi untuk memastikan keabsahan dan perlindungan hukum terkait karya seni atau desain Anda</div>
                </div>
                <div className="w-60 bg-primary text-primary-content rounded-xl p-3 shadow">
                    <div className="rounded-full border border-primary-content w-min p-1">
                        <span className="text-4xl text-primary"><MdOutlineAttachMoney className="text-primary-content" /></span>
                    </div>
                    <div className="font-bold uppercase text-xl my-2">Jual Beli</div>
                    <div className="leading-relaxed">Menyediakan fitur transaksi jual beli karya,
                        menciptakan ekosistem ekonomi kreatif dan
                        mendukung pertumbuhan kolaborasi di antara
                        pengguna</div>
                </div>

                <div className="w-60 border-primary border rounded-xl p-3">
                    <div className="rounded-full border border-primary w-min p-1">
                        <span className="text-4xl text-primary"><MdOutlineDesignServices /></span>
                    </div>
                    <div className="font-bold uppercase text-xl my-2">Manajemen</div>
                    <div className="leading-relaxed"> Dengan fokus pada efisiensi, kolaborasi, dan inovasi, tim kami menyediakan solusi yang mendukung proses penciptaan, distribusi, dan pemasaran karya Anda</div>
                </div>

            </div>
        </main>
    </>
}
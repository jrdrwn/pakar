import { MdOutlineAttachMoney, MdOutlineDesignServices } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import HeroServices from "../media/HeroServices";

export default function Service() {
  return (
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
                <span className="relative text-primary-content">Services</span>
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
              Dengan fokus pada efisiensi, kolaborasi, dan inovasi, tim kami
              menyediakan solusi yang mendukung proses penciptaan, distribusi,
              dan pemasaran karya Anda
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { FaBattleNet } from "react-icons/fa";

export default function Page() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch("/api/karya", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data.entries())),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Gagal menambahkan karya!");
    } else {
      alert("Berhasil menambahkan karya!");
      response.redirected && router.push(response.url);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="max-w-sm flex-1 rounded-xl border border-primary bg-base-300 py-8 text-center">
        <FaBattleNet className="mx-auto mb-8 text-xl text-primary" size={48} />
        <div>
          <h1 className="mb-1 text-2xl font-bold">Menambahkan Karya Baru!</h1>
          <p className="text-sm">Mohon masukkan detail karya Anda</p>
        </div>
        <div className="mx-auto mt-6">
          <form className="mx-auto" onSubmit={handleSubmit}>
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Judul</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Masukkan Judul Karya..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Link Cover</span>
              </div>
              <input
                type="text"
                name="cover"
                placeholder="Masukkan Link Cover..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Tag</span>
              </div>
              <select
                name="tag"
                className="select select-bordered select-primary"
              >
                <option disabled selected>
                  Pilih Tag
                </option>
                <option value="projek-mandiri">Projek Mandiri</option>
                <option value="tugas-mata-kuliah">Tugas Mata Kuliah</option>
                <option value="tugas-akhir">Tugas Akhir</option>
                <option value="kerajinan-tangan">Kerajinan Tangan</option>
                <option value="other">Lainnya</option>
              </select>
            </label>
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Deskripsi</span>
              </div>
              <textarea
                className="textarea textarea-bordered textarea-primary h-24"
                placeholder="Deskripsikan Karya Anda..."
                name="description"
              ></textarea>
            </label>
            <button
              className="btn btn-primary  mt-4 w-full max-w-xs"
              type="submit"
            >
              Simpan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

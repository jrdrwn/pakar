"use client";

import { useClickAway } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
      router.push((await response.json()).redirect);
    }
  };

  const [categories, setCategories] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch(`/api/karya/categories?q=${q}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [q]);

  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const ref = useClickAway(() => {
    setShowAutoComplete(false);
  });
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
                <span className="label-text">Gambar</span>
              </div>
              <input
                type="text"
                name="image"
                placeholder="Masukkan Link Gambar..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <label
              className="form-control relative mx-auto w-full max-w-xs"
              ref={ref}
            >
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                onFocus={(e) => {
                  setShowAutoComplete(true);
                }}
                onChange={(e) => {
                  setQ(e.target.value);
                }}
                type="text"
                name="category"
                value={q}
                placeholder="Masukkan Category..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div
                className={`absolute top-full -mt-2 max-h-36 w-full flex-col items-start overflow-hidden overflow-y-scroll rounded-lg border border-primary bg-base-100 px-4 py-2 ${
                  showAutoComplete ? "flex" : "hidden"
                } `}
                onClick={(e) => {
                  e.preventDefault();
                  if (e.target.classList.contains("btn")) {
                    setQ(
                      e.target.textContent
                        .replace("Add", "")
                        .replace(/"/g, "")
                        .trim(),
                    );
                    setShowAutoComplete(false);
                  }
                }}
              >
                {q !== "" && (
                  <div className="btn btn-primary btn-sm w-full">Add "{q}"</div>
                )}
                {categories.map((category) => (
                  <div
                    className="btn btn-ghost btn-sm w-full"
                    key={category.category_id}
                  >
                    {category.name}
                  </div>
                ))}
              </div>
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Deskripsi</span>
              </div>
              <textarea
                className="textarea textarea-bordered textarea-primary h-24"
                placeholder="Deskripsikan Karya Anda..."
                name="about"
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

"use client";

import { useClickAway } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBattleNet } from "react-icons/fa";
import { MdUpload } from "react-icons/md";

export default function Page() {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [uploadImageLoading, setUploadImageLoading] = useState(false);
  const [generateDescriptionLoading, setGenerateDescriptionLoading] =
    useState(false);

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
      router.push("/explore");
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
            <label
              className="form-control mx-auto w-full max-w-xs"
              htmlFor="upload-image"
            >
              <div className="label">
                <span className="label-text">Cover</span>
              </div>
              <div className="">
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="mb-2 h-36 w-full rounded-md object-cover"
                  />
                )}
                <div className="btn btn-outline btn-primary w-full">
                  {uploadImageLoading ? (
                    <div className="loading loading-ring" />
                  ) : (
                    <>
                      <MdUpload size={24} /> Upload
                    </>
                  )}
                </div>
                <input type="text" name="image" value={image} hidden />
                <input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={async (e) => {
                    setUploadImageLoading(true);
                    const file = e.target.files[0];
                    const formData = new FormData();
                    formData.append("image", file);
                    const response = await fetch("/api/imagekit", {
                      method: "POST",
                      body: formData,
                    });

                    if (!response.ok) {
                      alert("Gagal mengupload gambar!");
                    } else {
                      const json = await response.json();
                      setImage(json.url);
                    }
                    setUploadImageLoading(false);
                  }}
                />
              </div>
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
                autoComplete="off"
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
                className="textarea textarea-bordered textarea-primary mb-2 h-24"
                placeholder="Deskripsikan Karya Anda..."
                value={description}
                name="about"
              ></textarea>
              <div
                className="btn btn-outline btn-accent  w-full"
                onClick={async () => {
                  setGenerateDescriptionLoading(true);
                  const formData = new FormData();
                  formData.append(
                    "title",
                    document.querySelector("input[name=title]").value,
                  );
                  formData.append(
                    "category",
                    document.querySelector("input[name=category]").value,
                  );
                  const image = document.querySelector("input[id=upload-image]")
                    .files[0];
                  if (image) {
                    formData.append("image", image);
                  }
                  const response = await fetch("/api/caption-generator", {
                    method: "POST",
                    body: formData,
                  });
                  if (!response.ok) {
                    alert("Gagal membuat deskripsi!");
                  } else {
                    setDescription((await response.json()).description);
                  }
                  setGenerateDescriptionLoading(false);
                }}
              >
                {generateDescriptionLoading ? (
                  <div className="loading loading-ring" />
                ) : (
                  <>
                    <div className="loading loading-infinity" />
                    Generate Description
                  </>
                )}
              </div>
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

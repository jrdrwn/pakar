"use client";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { FaHeart, FaRegHeart, FaRegUserCircle } from "react-icons/fa";

export default function CardSummary(props) {
  const [cookies] = useCookies(["user_id"]);

  const openModal = (e) => {
    // prevent paren event bubbling
    e.stopPropagation();
    e.preventDefault();
    const modal = document.getElementById(`edit-karya-modal-${props.karya_id}`);
    modal.showModal();
  };
  const openModalDelete = (e) => {
    // prevent paren event bubbling
    e.stopPropagation();
    e.preventDefault();
    const modal = document.getElementById(
      `delete-karya-modal-${props.karya_id}`,
    );
    modal.showModal();
  };
  const handleEditKarya = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch(`/api/karya/${props.karya_id}`, {
      method: "PUT",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert("Gagal mengubah profile.");
    } else {
      alert("Berhasil mengubah profile.");
      location.reload();
    }
  };
  const handleDeleteKarya = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/karya/${props.karya_id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      alert("Gagal menghapus karya.");
    } else {
      alert("Berhasil menghapus karya.");
      location.reload();
    }
  };
  return (
    <>
      <Link href={`/explore/${props.karya_id}`}>
        <div
          data-karya-id={props.karya_id}
          className=" w-96 max-w-sm cursor-pointer rounded-md p-2 hover:outline hover:outline-1 hover:outline-primary"
        >
          <div className="mb-2 flex justify-between">
            <div className="flex items-center gap-2">
              <FaRegUserCircle size={24} />
              <span className="">@{props.username}</span>
            </div>
            <div>
              <span className="badge badge-primary">{props.main_category}</span>
            </div>
          </div>
          <div className="mb-2 h-60 overflow-hidden rounded-md">
            <img
              src={props.image.split("|")[0]}
              alt="Karya Image"
              className="w-full object-cover object-center "
            />
          </div>
          <div className="mb-2 flex justify-between">
            <div>
              <span className="badge badge-primary badge-outline  badge-sm">
                {new Date().toDateString()}
              </span>
            </div>
            {cookies.user_id === props.user_id && (
              <div className="flex gap-2">
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={(e) => openModalDelete(e)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={(e) => openModal(e)}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
          <div className="line-clamp-2 text-lg font-medium">{props.title}</div>
        </div>
      </Link>
      <dialog id={`delete-karya-modal-${props.karya_id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              X
            </button>
          </form>
          <h3 className="text-lg font-bold">Hapus Karya?</h3>
          <form onSubmit={handleDeleteKarya}>
            <button className="btn btn-primary mt-4" type="submit">
              Hapus
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id={`edit-karya-modal-${props.karya_id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              X
            </button>
          </form>
          <h3 className="text-lg font-bold">Edit Karya</h3>
          <form onSubmit={handleEditKarya}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Judul Karya"
                defaultValue={props.title}
                className="input input-bordered"
              />
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Link Cover</span>
              </div>
              <input
                type="text"
                name="cover"
                placeholder="Link Cover..."
                defaultValue={props.image.split("|")[0]}
                className="input input-bordered"
              />
            </label>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tag</span>
              </label>
              <select
                name="tag"
                defaultValue={props.main_category}
                className="select select-bordered w-full max-w-xs"
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Deskripsi Karya"
                defaultValue={props.about}
                className="textarea textarea-bordered h-24"
              ></textarea>
            </div>
            <button className="btn btn-primary mt-4" type="submit">
              Simpan
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

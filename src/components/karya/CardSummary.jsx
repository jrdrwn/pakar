"use client";
import Link from "next/link";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import {
  MdDeleteOutline,
  MdFavorite,
  MdFavoriteBorder,
  MdInfo,
  MdOutlineEdit,
} from "react-icons/md";
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

  const [isLike, setIsLike] = useState(Number(props.is_user_like));
  const [likesCount, setLikesCount] = useState(props.likes_count);

  const handleLike = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/karya/${props.karya_id}/like`, {
      method: isLike ? "DELETE" : "PUT",
    });
    if (res.ok) {
      setLikesCount(isLike ? likesCount - 1 : likesCount + 1);
      setIsLike(!isLike);
    }
  };

  return (
    <>
      <div
        data-karya-id={props.karya_id}
        className="h-min w-96 max-w-sm cursor-pointer rounded-xl bg-base-300 p-2 hover:outline hover:outline-1 hover:outline-primary"
      >
        <div className="relative mb-2 h-60 overflow-hidden rounded-md">
          <details className="dropdown dropdown-end absolute right-2 top-2">
            <summary
              role="button"
              className="btn btn-circle btn-outline btn-xs  m-1"
            >
              <BsThreeDotsVertical size={20} />
            </summary>
            <ul className="menu dropdown-content menu-xs z-[1] rounded-box bg-base-100  shadow">
              {props.user_id === cookies.user_id && (
                <>
                  <li>
                    <button onClick={(e) => openModal(e)}>
                      <MdOutlineEdit size={20} /> Edit
                    </button>
                  </li>
                  <li>
                    <button onClick={(e) => openModalDelete(e)}>
                      <MdDeleteOutline size={20} /> Delete{" "}
                    </button>
                  </li>
                </>
              )}
              <li>
                <Link href={`/explore/${props.karya_id}`}>
                  <MdInfo size={20} /> Detail
                </Link>
              </li>
            </ul>
          </details>
          <img
            src={props.image}
            alt={props.title}
            className="w-full object-cover object-center "
          />
        </div>
        <div className="mb-2 flex justify-between">
          <div className="flex items-center gap-1">
            {props.image ? (
              <img
                src={props.user_image}
                className="h-5 w-5 rounded-full object-cover "
              />
            ) : (
              <FaRegUserCircle size={20} />
            )}
            <span className="">@{props.username}</span>
          </div>
          <div>
            <span className="badge badge-primary badge-outline">
              {props.category}
            </span>
          </div>
        </div>
        <div className="line-clamp-1 text-lg font-medium">{props.title}</div>
        <div className="mt-2 flex justify-between">
          <button
            className="btn btn-ghost btn-xs flex items-center gap-1"
            onClick={handleLike}
          >
            {isLike ? (
              <MdFavorite size={18} className="text-accent" />
            ) : (
              <MdFavoriteBorder size={18} />
            )}
            <span className="text-sm">
              {new Intl.NumberFormat("id-ID", {
                notation: "compact",
                compactDisplay: "short",
              }).format(likesCount)}
            </span>
          </button>
          {/* <div className="flex items-center gap-1">
            <MdOutlineVisibility size={18} />
            <span className="text-sm">
              {new Intl.NumberFormat("id-ID", {
                notation: "compact",
                compactDisplay: "short",
              }).format(props.visitior ?? 0)}
            </span>
          </div> */}
        </div>
      </div>
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

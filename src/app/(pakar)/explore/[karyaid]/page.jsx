"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export default function Page() {
  const params = useParams();
  const [karya, setKarya] = useState();
  const [isLike, setIsLike] = useState();
  const [likesCount, setLikesCount] = useState();

  useEffect(() => {
    fetch(`/api/karya/${params.karyaid}`)
      .then((res) => res.json())
      .then((data) => {
        setKarya(data[0]);
        setIsLike(Number(data[0].is_user_like));
        setLikesCount(data[0].likes_count);
      });
  }, []);

  const handleLike = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/karya/${karya?.karya_id}/like`, {
      method: isLike ? "DELETE" : "PUT",
    });
    if (res.ok) {
      setLikesCount(isLike ? likesCount - 1 : likesCount + 1);
      setIsLike(!isLike);
    }
  };
  return (
    <main>
      <section className="mx-auto max-w-2xl p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaRegUserCircle size={40} />
            <div className="flex flex-col">
              <span className="">
                {karya?.first_name} {karya?.middle_name} {karya?.last_name}
              </span>
              <span className="">@{karya?.username}</span>
            </div>
          </div>
          <div>
            <span className="badge badge-primary">{karya?.category}</span>
          </div>
        </div>
        <div className="mb-2 h-96 flex-1 overflow-hidden rounded-md ">
          <img
            src={karya?.image || "https://via.placeholder.com/150"}
            alt="Karya Image"
            className="w-full object-cover object-center "
          />
        </div>
        <div className="mb-2 flex justify-between">
          <div className="flex gap-1"></div>
        </div>
        <div className="mb-4 text-xl font-bold">{karya?.title}</div>
        <p>{karya?.about}</p>
        <div className="mt-2 flex justify-between">
          <button
            className="btn btn-ghost btn-xs flex items-center gap-1"
            onClick={handleLike}
          >
            {isLike ? <MdFavorite size={18} /> : <MdFavoriteBorder size={18} />}
            <span className="text-sm">
              {new Intl.NumberFormat("id-ID", {
                notation: "compact",
                compactDisplay: "short",
              }).format(likesCount)}
            </span>
          </button>
          {/* <div className="mt-4 flex items-center gap-1">
            <MdOutlineVisibility size={18} />
            <span className="text-sm">
              {new Intl.NumberFormat("id-ID", {
                notation: "compact",
                compactDisplay: "short",
              }).format(karya?.visitior ?? 0)}
            </span>
          </div> */}
        </div>
      </section>
    </main>
  );
}

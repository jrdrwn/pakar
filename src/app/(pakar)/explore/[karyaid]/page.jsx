"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";

export default function Page() {
  const params = useParams();
  const [karya, setKarya] = useState();
  useEffect(() => {
    fetch(`/api/karya/${params.karyaid}`)
      .then((res) => res.json())
      .then((data) => setKarya(data[0]));
  }, []);
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
            <span className="badge badge-primary">{karya?.main_category}</span>
          </div>
        </div>
        <div className="mb-2 h-96 flex-1 overflow-hidden rounded-md ">
          <img
            src={
              karya?.image.split("|")[0] || "https://via.placeholder.com/150"
            }
            alt="Karya Image"
            className="w-full object-cover object-center "
          />
        </div>
        <div className="mb-2 flex justify-between">
          <div className="flex gap-1"></div>
        </div>
        <div className="mb-4 text-xl font-bold">{karya?.title}</div>
        <p>{karya?.about}</p>
        <div className="my-4 text-lg font-medium">Specification</div>
        {karya?.specification.split("|").map((spec) => (
          <div className="mb-2 flex items-center gap-2">
            <span className="badge badge-primary badge-outline badge-sm">
              {spec}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
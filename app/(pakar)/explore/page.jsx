"use client";

import { FaRegUserCircle } from "react-icons/fa";

import Link from "next/link";
import { useEffect, useState } from "react";
import CardSummary from "../../../components/karya/CardSummary";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const [q, setQ] = useState("");
  const [karya, setKarya] = useState([]);
  useEffect(() => {
    fetch("/api/karya?tag=" + searchParams.get("tag") ?? "Semua")
      .then((res) => res.json())
      .then((data) => setKarya(data));
  }, [searchParams.get("tag")]);
  return (
    <main className="p-4">
      <section className="flex items-center justify-between rounded-xl border border-primary bg-base-300 px-2 py-2 shadow">
        <div>
          <button className="btn btn-ghost">
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
              <span className="relative text-xl text-primary-content">
                PaKar
              </span>
            </span>
          </button>
        </div>
        <div className="flex-1 text-center">
          <input
            type="search"
            onInput={(e) => setQ(e.target.value)}
            placeholder="Cari Karya Terbaik Anda..."
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/karya/add"}>
            <button className="btn btn-ghost">Tambah Karya</button>
          </Link>
          <Link href={"/profile"}>
            <button className="btn btn-ghost">
              <FaRegUserCircle size={32} />
            </button>
          </Link>
        </div>
      </section>
      <section className="my-8">
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2 px-2 py-2">
          {[
            { tag: "Semua" },
            { tag: "projek-mandiri" },
            { tag: "tugas-mata-kuliah" },
            { tag: "tugas-akhir" },
            { tag: "kerajinan-tangan" },
          ].map((data) => (
            <Link
              key={data.tag}
              href={`${
                data.tag === "Semua" ? "/explore" : `/explore?tag=${data.tag}`
              }`}
            >
              <button
                className={`btn capitalize ${
                  searchParams.get("tag") === data.tag ||
                  (searchParams.get("tag") === null && data.tag === "Semua")
                    ? "btn-primary"
                    : ""
                } btn-sm`}
              >
                {data.tag.split("-").join(" ")}
              </button>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-wrap justify-around gap-4">
        {karya?.map((data) => {
          if (q === "") return <CardSummary key={data.karya_id} {...data} />;
          if (data.title.toLowerCase().includes(q.toLowerCase()))
            return <CardSummary key={data.karya_id} {...data} />;
        })}
      </section>
    </main>
  );
}

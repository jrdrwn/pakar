"use client";

import { FaRegUserCircle } from "react-icons/fa";

import Link from "next/link";
import { useEffect, useState } from "react";
import CardSummary from "../../../components/karya/CardSummary";
import { useRef } from "react";

export default function Page() {
  const [q, setQ] = useState("");
  const [karya, setKarya] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("/api/karya/category-list")
      .then((res) => res.json())
      .then((data) => setTags(["Semua", ...data]));

    fetch(
      `/api/karya?tag=${encodeURIComponent(
        selectedCategory,
      )}&limit=10&offset=0`,
    )
      .then((res) => res.json())
      .then((data) => setKarya(data));
  }, []);

  useEffect(() => {
    fetch(
      `/api/karya?tag=${encodeURIComponent(
        selectedCategory,
      )}&limit=10&offset=0`,
    )
      .then((res) => res.json())
      .then((data) => setKarya(data));
  }, [selectedCategory]);

  const fetchMoreData = () => {
    fetch(
      `/api/karya?tag=${encodeURIComponent(selectedCategory)}&limit=10&offset=${
        karya.length
      }`,
    )
      .then((res) => res.json())
      .then((data) => setKarya((karya) => [...karya, ...data]));
  };

  const bottom = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreData();
        }
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 0.8,
      },
    );

    if (bottom.current) {
      observer.observe(bottom.current);
    }

    return () => {
      if (bottom.current) {
        observer.unobserve(bottom.current);
      }
    };
  }, [fetchMoreData]);

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
        <div className="flex-1 text-center"></div>
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
      <section className="my-8 flex flex-wrap justify-center gap-4">
        <input
          type="search"
          onKeyDown={(e) => e.key === "Enter" && setQ(e.target.value)}
          placeholder="Cari Karya Terbaik Anda..."
          className="input input-bordered w-full max-w-md"
        />
        <select
          className="select select-primary w-40"
          onChange={(ev) => {
            setSelectedCategory(ev.currentTarget.value);
          }}
        >
          <option disabled defaultValue>
            Select Category
          </option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </section>
      <section className="flex min-h-screen flex-wrap justify-center gap-4">
        {karya?.map((data) => {
          if (q === "") return <CardSummary key={data.karya_id} {...data} />;
          if (data.title.toLowerCase().includes(q.toLowerCase()))
            return <CardSummary key={data.karya_id} {...data} />;
        })}
      </section>
      <div ref={bottom} />
    </main>
  );
}

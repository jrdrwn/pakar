"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { FaPlus, FaRegUserCircle } from "react-icons/fa";
import CardSummary from "../../../components/karya/CardSummary";

export default function Page() {
  const [q, setQ] = useState("");
  const [karya, setKarya] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [cookies] = useCookies();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/karya/categories?q=`)
      .then((res) => res.json())
      .then((data) =>
        setCategories([{ category_id: 0, name: "Semua" }, ...data]),
      );

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/karya?user_id=${
        cookies["user_id"]
      }&tag=${encodeURIComponent(selectedCategory)}&limit=10&offset=0`,
    )
      .then((res) => res.json())
      .then((data) => setKarya(data));
  }, []);

  useEffect(() => {
    setIsEnd(false);

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/karya?user_id=${
        cookies["user_id"]
      }&tag=${encodeURIComponent(selectedCategory)}&limit=10&offset=0`,
    )
      .then((res) => res.json())
      .then((data) => setKarya(data));
  }, [selectedCategory]);
  const [isEnd, setIsEnd] = useState(false);
  const fetchMoreData = () => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/karya?user_id=${
        cookies["user_id"]
      }&tag=${encodeURIComponent(selectedCategory)}&limit=10&offset=${
        karya.length
      }`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setIsEnd(true);
        }
        setKarya((karya) => [...karya, ...data]);
      });
  };

  const bottom = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          !isEnd && fetchMoreData();
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
            <button className="btn btn-primary">
              <FaPlus size={20} />
              Tambah Karya
            </button>
          </Link>
          <Link href={"/profile"}>
            <button className="btn btn-ghost">
              {profile.image ? (
                <img
                  src={profile.image}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <FaRegUserCircle size={32} />
              )}
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
          {categories.map(({ category_id, name }) => (
            <option key={category_id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </section>
      <section className="flex min-h-screen flex-wrap justify-evenly gap-8">
        {karya?.map((data) => {
          if (q === "")
            return <CardSummary key={data.karya_id || data.f0} {...data} />;
          if (data.title.toLowerCase().includes(q.toLowerCase()))
            return <CardSummary key={data.karya_id || data.f0} {...data} />;
        })}
      </section>
      <div ref={bottom} />
    </main>
  );
}

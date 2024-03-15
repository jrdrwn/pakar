"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBattleNet } from "react-icons/fa";
import PasswordInput from "../../../components/auth/PasswordInput";
import Wrapper from "../../../components/auth/Wrapper";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    setLoading(false);
    if (!response.ok) {
      alert("Gagal masuk!");
    } else {
      const json = await response.json();
      document.cookie = json.cookies;
      router.push("/explore");
    }
  };

  return (
    <Wrapper>
      <section className="w-full max-w-sm flex-1 grow-0 rounded-xl border border-primary bg-base-300 py-8 text-center">
        <FaBattleNet className="mx-auto mb-8 text-xl text-primary" size={48} />
        <div>
          <h1 className="mb-1 text-2xl font-bold">Selamat Datang Kembali!</h1>
          <p className="text-sm">Mohon masukkan detail akun Anda</p>
        </div>
        <div className="mx-auto mt-6">
          <form className="mx-auto" onSubmit={handleSubmit}>
            <label
              className="form-control mx-auto w-full max-w-xs"
              for={"email"}
            >
              <div className="label">
                <span className="label-text before:mr-1 before:text-primary before:content-['*']">
                  Email
                </span>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Masukkan Email Anda..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <PasswordInput />
            <button
              className="btn btn-primary mb-8 mt-4 w-full max-w-xs"
              type="submit"
            >
              {loading ? (
                <span className="loading loading-ring"></span>
              ) : (
                "Login"
              )}
            </button>
            <p className="text-sm">
              Belum punya akun?{" "}
              <Link href="/register" className="text-primary">
                Daftar
              </Link>
            </p>
          </form>
        </div>
      </section>
    </Wrapper>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBattleNet } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data.entries())),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Gagal masuk!");
    } else {
      response.redirected && router.push(response.url);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="max-w-sm flex-1 rounded-xl border border-primary bg-base-300 py-8 text-center">
        <FaBattleNet className="mx-auto mb-8 text-xl text-primary" size={48} />
        <div>
          <h1 className="mb-1 text-2xl font-bold">Selamat Datang Kembali!</h1>
          <p className="text-sm">Mohon masukkan detail akun Anda</p>
        </div>
        <div className="mx-auto mt-6">
          <form className="mx-auto" onSubmit={handleSubmit}>
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                name="email"
                placeholder="Masukkan Email Anda..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password Anda..."
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text-alt">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox-primary checkbox checkbox-sm mr-2"
                      />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div>
                </span>
                <span className="label-text-alt">Forgot Password?</span>
              </div>
            </label>
            <button
              className="btn btn-primary mb-8 mt-4 w-full max-w-xs"
              type="submit"
            >
              Login
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
    </div>
  );
}

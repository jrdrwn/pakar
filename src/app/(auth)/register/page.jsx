"use client";

import Link from "next/link";
import { FaBattleNet } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data.entries())),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      alert("Gagal mendaftar!");
    } else {
      response.redirected && router.push(response.url);
    }
  };
  const [step, setStep] = useState(1);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="max-w-sm flex-1 rounded-xl border border-primary bg-base-300 py-8 text-center">
        <FaBattleNet className="mx-auto mb-8 text-xl text-primary" size={48} />
        <div>
          <h1 className="mb-1 text-2xl font-bold">Halo!</h1>
          <p className="text-sm">Mohon masukkan detail akun Anda</p>
        </div>
        <div className="mx-auto mt-6">
          <form className="mx-auto" onSubmit={handleSubmit}>
            <div className={step === 1 ? "block" : "hidden"}>
              <label className="form-control mx-auto w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Masukkan Nama Awal Anda..."
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </div>
              </label>
              <label className="form-control mx-auto w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Middle Name</span>
                </div>
                <input
                  type="text"
                  name="middle_name"
                  placeholder="Masukkan Nama Tengah Anda..."
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </div>
              </label>
              <label className="form-control mx-auto w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Masukkan Nama Akhir Anda..."
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </div>
              </label>
              <button
                onClick={() => setStep(2)}
                type="button"
                className="btn btn-primary mb-8 mt-4 w-full max-w-xs"
              >
                Next
              </button>
            </div>
            <div className={step === 2 ? "block" : "hidden"}>
              <label className="form-control mx-auto w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Masukkan Username Anda..."
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </div>
              </label>
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
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"></span>
                </div>
              </label>
              <button
                className="btn btn-primary mt-4 w-full max-w-xs"
                type="submit"
              >
                Register
              </button>
              <button
                onClick={() => setStep(1)}
                type="button"
                className="btn btn-outline btn-primary mb-8 mt-1 w-full max-w-xs"
              >
                Prev
              </button>
            </div>
            <p className="text-sm">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-primary">
                Masuk
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

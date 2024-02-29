"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBattleNet } from "react-icons/fa";
import PasswordInput from "../../../components/auth/PasswordInput";
import Wrapper from "../../../components/auth/Wrapper";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
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
      alert("Gagal mendaftar!");
    } else {
      router.push((await response.json()).redirect);
    }
  };
  const [step, setStep] = useState(1);
  return (
    <Wrapper>
      <section className="w-full max-w-sm flex-1 grow-0 rounded-xl border border-primary bg-base-300 py-8 text-center">
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
                  <span className="label-text before:mr-1 before:text-primary before:content-['*']">
                    First Name
                  </span>
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
                  <span className="label-text before:mr-1 before:text-primary before:content-['*']">
                    Username
                  </span>
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
                  <span className="label-text before:mr-1 before:text-primary before:content-['*']">
                    Email
                  </span>
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
              <PasswordInput bottomLabel={false} />
              <button
                className="btn btn-primary mt-6 w-full max-w-xs"
                type="submit"
              >
                {loading ? (
                  <span className="loading loading-ring"></span>
                ) : (
                  "Register"
                )}
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
    </Wrapper>
  );
}

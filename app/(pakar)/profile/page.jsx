"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import CardSummary from "../../../components/karya/CardSummary";

export default function Page() {
  const [profile, setProfile] = useState({});
  const openModal = () => {
    const modal = document.getElementById("edit-profile-modal");
    modal.showModal();
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch("/api/profile", {
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
  const [karya, setKarya] = useState([]);
  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data[0]));
    fetch("/api/karya?tag=me")
      .then((res) => res.json())
      .then((data) => setKarya(data));
  }, []);

  useEffect(() => {}, []);

  return (
    <main className="">
      <section className="relative h-72 bg-gradient-to-br from-primary to-secondary"></section>
      <section className="relative mx-auto max-w-screen-lg pt-24">
        <div className="absolute -top-14 h-28  w-28 rounded-full">
          <FaRegUserCircle size={112} />
        </div>
        <h1 className="mb-4 text-4xl font-bold">
          {profile.first_name} {profile.middle_name} {profile.last_name}
        </h1>
        <p></p>
        <div className="mb-2 flex items-center gap-4">
          <div>@{profile.username}</div>
          <div className="h-4 w-[2px] bg-primary"></div>
          <div>{profile.email}</div>
          <div className="h-4 w-[2px] bg-primary"></div>
          <div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => openModal()}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <h2 className="mb-2 text-2xl font-bold">Karya Saya</h2>
          <div className="flex flex-wrap justify-around gap-4">
            {karya.map((data) => (
              <CardSummary key={data.karya_id} {...data} />
            ))}
          </div>
        </div>
      </section>
      <dialog id="edit-profile-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              X
            </button>
          </form>
          <h3 className="text-lg font-bold">Edit Profile</h3>
          <form onSubmit={handleEditProfile}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Depan</span>
              </label>
              <input
                type="text"
                placeholder="Nama Depan"
                name="first_name"
                defaultValue={profile.first_name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Tengah</span>
              </label>
              <input
                type="text"
                placeholder="Nama Tengah"
                name="middle_name"
                defaultValue={profile.middle_name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Belakang</span>
              </label>
              <input
                type="text"
                placeholder="Nama Belakang"
                name="last_name"
                defaultValue={profile.last_name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                defaultValue={profile.username}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                defaultValue={profile.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                defaultValue={profile.password}
                className="input input-bordered"
              />
            </div>
            <button className="btn btn-primary mt-4" type="submit">
              <span>Simpan</span>
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  );
}

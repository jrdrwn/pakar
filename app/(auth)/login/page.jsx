import Link from "next/link";
import { FaBattleNet } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <section className="flex-1 text-center max-w-sm py-8 bg-base-300 rounded-xl border border-primary">
        <FaBattleNet className="text-primary text-xl mx-auto mb-8" size={48} />
        <div>
          <h1 className="font-bold text-2xl mb-1">Selamat Datang Kembali!</h1>
          <p className="text-sm">Mohon masukkan detail akun Anda</p>
        </div>
        <div className="mx-auto mt-6">
          <form className="mx-auto">
            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" placeholder="Masukkan Email Anda..." className="input input-bordered input-primary w-full max-w-xs" />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" placeholder="Masukkan Password Anda..." className="input input-bordered input-primary w-full max-w-xs" />
              <div className="label">
                <span className="label-text-alt">
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <input type="checkbox" class="checkbox checkbox-sm checkbox-primary mr-2" />
                      <span class="label-text">Remember me</span>
                    </label>
                  </div>
                </span>
                <span className="label-text-alt">Forgot Password?</span>
              </div>
            </label>
            <button className="btn btn-primary w-full max-w-xs mt-4 mb-8">Login</button>
            <p className="text-sm">
              Belum punya akun? <Link href="/register" className="text-primary">Daftar</Link>
            </p>
          </form>
        </div>

      </section>
    </div>
  );
}

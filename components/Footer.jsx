"use client";

export default function Footer() {
  return (
    <>
      <footer className="bg-base-200 p-10 text-base-content">
        <div className="container mx-auto flex flex-wrap justify-around gap-6 lg:flex-row [&_div:not(div:last-child)]:flex-col [&_div]:flex">
          <div>
            <h1 className="footer-title">Services</h1>
            <p className="link-hover link">Branding</p>
            <p className="link-hover link">Design</p>
            <p className="link-hover link">Marketing</p>
            <p className="link-hover link">Advertisement</p>
          </div>
          <div>
            <h1 className="footer-title">Company</h1>
            <p className="link-hover link">About us</p>
            <p className="link-hover link">Contact</p>
            <p className="link-hover link">Jobs</p>
            <p className="link-hover link">Press kit</p>
          </div>
          <div>
            <h1 className="footer-title">Legal</h1>
            <p className="link-hover link">Terms of use</p>
            <p className="link-hover link">Privacy policy</p>
            <p className="link-hover link">Cookie policy</p>
          </div>
          <form>
            <h1 className="footer-title">Newsletter</h1>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Masukkan alamat email Anda</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input join-item input-bordered"
                />
                <button className="btn btn-primary join-item">Langganan</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
      <footer className="footer flex justify-center border-t border-base-300 bg-base-200 px-10 py-4 text-base-content">
        <p className="text-center">@Copyright PaKar. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default function Footer() {
    return <>
        <footer className="p-10 bg-base-200 text-base-content">
            <div className="container flex lg:flex-row gap-6 flex-wrap justify-around mx-auto [&_div]:flex [&_div:not(div:last-child)]:flex-col">
                <div>
                    <h1 className="footer-title">Services</h1>
                    <p className="link link-hover">Branding</p>
                    <p className="link link-hover">Design</p>
                    <p className="link link-hover">Marketing</p>
                    <p className="link link-hover">Advertisement</p>
                </div>
                <div>
                    <h1 className="footer-title">Company</h1>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact</p>
                    <p className="link link-hover">Jobs</p>
                    <p className="link link-hover">Press kit</p>
                </div>
                <div>
                    <h1 className="footer-title">Legal</h1>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </div>
                <form>
                    <h1 className="footer-title">Newsletter</h1>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Masukkan alamat email Anda</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Langganan</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 flex justify-center">
            <p className="text-center">@Copyright PaKar. All Rights Reserved</p>
        </footer>
    </>
}
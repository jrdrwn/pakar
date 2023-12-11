import Link from "next/link";
import {  useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
    const [open, setOpen] = useState(false)

    const links = ['Home', 'About', 'Services', 'FAQ']
    const onClick = () => {
        const modal = document.getElementById("my_modal_3");
        modal.showModal();
    }

    return <header className="bg-base-200 border border-primary rounded-md shadow-md transition-all fixed inset-x-2 mt-4 z-50">
        <div className="navbar">
            <div className="navbar-start">
                <button className="btn btn-ghost"><span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"> <span className="relative text-primary-content">PaKar</span> </span></button>
            </div>
            <div className="navbar-center hidden lg:block">
                <nav className="flex gap-4  [&_button]:btn [&_button]:btn-ghost">
                    {
                        links.map((link, index) => <Link href={`/${link === 'Home' ? '' : link.toLocaleLowerCase()}`} key={index} ><button >{link}</button></Link>)
                    }
                </nav>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2">
                    <button className="btn btn-primary hidden lg:block" onClick={onClick}>
                        Login
                    </button>
                    <button className="btn btn-primary btn-outline hidden lg:block" onClick={onClick}>
                        Sign Up
                    </button>
                    <button id="btn-mobile" className="lg:hidden btn btn-outline" onClick={() => setOpen(!open)}>
                        {
                            open ? <MdClose /> : <MdMenu />
                        }
                    </button>
                </div>
            </div>
        </div>
        <div className={`bg-base-200 rounded-md duration-150 overflow-hidden lg:hidden ${open ? 'h-[280px]' : 'h-0 '}`}>
            <nav className="flex flex-col justify-center items-center gap-1 [&_button]:btn [&_button]:btn-ghost w-full py-2 ">
                {
                    links.map((link, index) => <Link href={`/${link === 'Home' ? '' : link.toLocaleLowerCase()}`} key={index} ><button key={index}>{link}</button></Link>)
                }
            </nav>
            <div className="flex justify-center gap-2 w-full pb-4">
                <button className="btn  btn-primary" onClick={onClick}>
                    Login
                </button>
                <button className="btn btn-outline" onClick={onClick}>
                    Sign Up
                </button>
            </div>
        </div>
        <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
                    </form>
                    <h3 className="font-bold text-lg">Segera hadir!</h3>
                    <p className="py-4">Fitur ini akan segera hadir, Terima Kasih!</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
        </dialog>
    </header>
}
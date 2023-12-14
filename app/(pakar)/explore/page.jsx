'use client';

import { FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdAttachMoney, MdMoneyOff, } from "react-icons/md"

export default function Page() {

    const [isLiked, setIsLiked] = useState(false);



    return <main className="p-4">
        <section className="flex justify-between py-2 px-2 items-center border border-primary bg-base-300 shadow rounded-xl">
            <div>
                <button className="btn btn-ghost">
                    <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary">
                        <span className="relative text-primary-content text-xl">PaKar</span>
                    </span>
                </button>
            </div>
            <div className="flex-1 text-center">
                <input type="search" placeholder="Cari Karya Terbaik Anda..." className="input input-bordered w-full max-w-md" />
            </div>
            <div>
                <button className="btn btn-ghost"><FaRegUserCircle size={32} /></button>
            </div>
        </section>
        <section className="my-8">
            <div className="flex justify-center py-2 px-2 items-center gap-2 mt-2 flex-wrap">
                <button className="btn btn-sm btn-primary">Semua</button>
                <button className="btn btn-sm btn-ghost">Projek Mandiri</button>
                <button className="btn btn-sm btn-ghost">Tugas Mata Kuliah</button>
                <button className="btn btn-sm btn-ghost">Tugas Akhir</button>
                <button className="btn btn-sm btn-ghost">Kerajinan Tangan</button>
            </div>
        </section>
        <section className="flex gap-4">
            <div className="flex-1 max-w-sm hover:outline-primary hover:outline hover:outline-1 rounded-md p-2 cursor-pointer">
                <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <FaRegUserCircle size={24} />
                        <span className="">@username</span>
                    </div>
                    <div>
                        <button className="btn btn-ghost  btn-sm ">
                            Apache-2.0
                            <MdAttachMoney className="text-primary" size={18} />
                        </button>
                    </div>
                </div>
                <div className="h-60 rounded-md overflow-hidden mb-2">
                    <img src={"https://picsum.photos/seed/picsum/200/300"} alt="Karya Image" className="object-center object-cover w-full " />
                </div>
                <div className="flex justify-between mb-2">
                    <div>
                        {
                            isLiked ? <FaHeart size={24} onClick={() => setIsLiked(!isLiked)} /> : <FaRegHeart size={24} onClick={() => setIsLiked(!isLiked)} />
                        }
                    </div>
                    <div className="flex gap-1">
                        <span>Rp200.000,00</span>
                    </div>
                </div>
                <div className="line-clamp-2 text-xl font-bold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam distinctio, nihil hic beatae ipsum numquam fugiat eligendi ex laudantium aliquid ullam id deleniti quis voluptatem qui ipsa ab. Atque!
                </div>
            </div>
            <div className="flex-1 max-w-sm hover:outline-primary hover:outline hover:outline-1 rounded-md p-2 cursor-pointer">
                <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <FaRegUserCircle size={24} />
                        <span className="">@username</span>
                    </div>
                    <div>
                        <button className="btn btn-ghost  btn-sm ">
                            Unlicense
                            <MdMoneyOff className="text-primary" size={18} />
                        </button>
                    </div>
                </div>
                <div className="h-60 rounded-md overflow-hidden mb-2">
                    <img src={"https://picsum.photos/seed/picsum/200/300"} alt="Karya Image" className="object-center object-cover w-full " />
                </div>
                <div className="flex justify-between mb-2">
                    <div>
                        {
                            isLiked ? <FaHeart size={24} onClick={() => setIsLiked(!isLiked)} /> : <FaRegHeart size={24} onClick={() => setIsLiked(!isLiked)} />
                        }
                    </div>
                    <div className="flex gap-1">
                        <span>GRATIS</span>
                    </div>
                </div>
                <div className="line-clamp-2 text-xl font-bold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam distinctio, nihil hic beatae ipsum numquam fugiat eligendi ex laudantium aliquid ullam id deleniti quis voluptatem qui ipsa ab. Atque!
                </div>
            </div>
        </section>
    </main >
}
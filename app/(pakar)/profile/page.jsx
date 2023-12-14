'use client';

import { useState } from "react";
import { FaEdit, FaHeart, FaRegEdit, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { MdEdit, MdMoneyOff } from "react-icons/md";

export default function Page() {
    const [isLiked, setIsLiked] = useState(false);
    return <main className="">

        <section className="from-primary to-secondary bg-gradient-to-br h-72 relative">
        </section>
        <section className="max-w-screen-lg mx-auto relative pt-24">
            <div className="w-28 h-28 rounded-full bg-white absolute -top-14">
            </div>
            <h1 className="font-bold text-4xl mb-4">Jordi Irawan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex optio saepe ducimus itaque deleniti quis, nam, doloribus aspernatur ea voluptatibus officia dolorum reiciendis odio autem ipsam perspiciatis voluptatem exercitationem.</p>
            <div className="flex items-center gap-4 mb-2">
                <div>@jrdrwan</div>
                <div className="bg-primary h-4 w-[2px]"></div>
                <div>Indonesia</div>
                <div className="bg-primary h-4 w-[2px]"></div>
                <div>Mahasiswa</div>
                <div className="bg-primary h-4 w-[2px]"></div>
                <div>Joined Desember 2023</div>
            </div>
            <hr />

            <div className="mt-4 tabs tabs-boxed" role="tablist" >
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Karya Saya" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6" >
                    1
                    <div className="flex-1 max-w-sm hover:outline-primary hover:outline hover:outline-1 rounded-md p-2 cursor-pointer">
                        <div className="flex justify-between mb-2">
                            <div className="">
                                <button className="btn btn-ghost btn-sm">

                                    <MdEdit size={24} />
                                    <span className="">Edit</span>
                                </button>
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
                            <div className="flex gap-1">
                                <span>GRATIS</span>
                            </div>
                        </div>
                        <div className="line-clamp-2 text-xl font-bold">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam distinctio, nihil hic beatae ipsum numquam fugiat eligendi ex laudantium aliquid ullam id deleniti quis voluptatem qui ipsa ab. Atque!
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Bookmark" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    2
                    <div className="flex-1 max-w-sm hover:outline-primary hover:outline hover:outline-1 rounded-md p-2 cursor-pointer">
                        <div className="flex justify-between mb-2">
                            <div className="">
                                <button className="btn btn-ghost btn-sm">

                                    <MdEdit size={24} />
                                    <span className="">Edit</span>
                                </button>
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
                            <div className="flex gap-1">
                                <span>GRATIS</span>
                            </div>
                        </div>
                        <div className="line-clamp-2 text-xl font-bold">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam distinctio, nihil hic beatae ipsum numquam fugiat eligendi ex laudantium aliquid ullam id deleniti quis voluptatem qui ipsa ab. Atque!
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Dibeli" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    3
                    <div className="flex-1 max-w-sm hover:outline-primary hover:outline hover:outline-1 rounded-md p-2 cursor-pointer">
                        <div className="flex justify-between mb-2">
                            <div className="">
                                <button className="btn btn-ghost btn-sm">

                                    <MdEdit size={24} />
                                    <span className="">Edit</span>
                                </button>
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
                            <div className="flex gap-1">
                                <span>GRATIS</span>
                            </div>
                        </div>
                        <div className="line-clamp-2 text-xl font-bold">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam distinctio, nihil hic beatae ipsum numquam fugiat eligendi ex laudantium aliquid ullam id deleniti quis voluptatem qui ipsa ab. Atque!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main >
}
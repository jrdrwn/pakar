"use client"

import { useState } from "react";
import { FaHeart, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";

export default function Page() {
    const [isLiked, setIsLiked] = useState(false);
    return <main>
        <section className="max-w-2xl mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <FaRegUserCircle size={40} />
                    <div className="flex flex-col">
                        <span className="">Full Name</span>
                        <span className="">@username</span>
                    </div>
                </div>
                <div>
                    <button className="btn btn-ghost  btn-sm ">
                        Unlicense
                        <MdMoneyOff className="text-primary" size={18} />
                    </button>
                </div>
            </div>
            <div className="flex-1 h-96 rounded-md overflow-hidden mb-2 ">
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
            <div className="text-xl font-bold mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veniam distinctio, nihil hic beatae ipsum numquam fugiat eligendi ex laudantium aliquid ullam id deleniti quis voluptatem qui ipsa ab. Atque!
            </div>
            <div className="flex gap-2 flex-wrap">
                <span className="badge badge-neutral mb-4">Tugas Kuliah</span>
                <span className="badge badge-neutral mb-4">Projek Mandiri</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel reiciendis quas quibusdam beatae laboriosam quae nisi odio labore quidem est, aspernatur necessitatibus eum, nam maxime? Placeat ex ut aliquam repellat asperiores accusantium maiores, hic sit debitis tenetur! Explicabo magni harum earum atque omnis eligendi, maiores perspiciatis a repellat fugiat quas architecto eaque illo obcaecati soluta sequi voluptatum nam impedit illum exercitationem fuga! Et iste aspernatur fugiat provident omnis earum commodi labore, rerum quo voluptatibus ipsa incidunt minima optio corrupti qui maiores voluptas delectus magni hic illo harum! Praesentium dicta repellendus aspernatur incidunt. Sit iste quas debitis voluptatem aperiam, ipsam ea quia doloremque laboriosam vero! Facere excepturi aliquid molestias harum deserunt quisquam tempora voluptates odit animi ad. Suscipit sapiente, id delectus rem veniam esse at illum quasi? Maxime inventore sed iste dignissimos dolore. Minima deserunt ullam vel adipisci magnam deleniti iste natus aliquid? Fugiat numquam quas itaque alias vero maxime pariatur corporis unde asperiores, voluptatem modi in. Rerum quidem necessitatibus ipsa illo fugiat repellendus modi aliquid distinctio enim at numquam quae officia sint dignissimos, mollitia nihil, quos quas? Tempora aspernatur eum quae. Et ipsum dolor reprehenderit alias rem ducimus dolores. Quisquam, nemo iste dolorum dolor sapiente veritatis eos debitis omnis.</p>
            <button className="btn btn-primary w-full my-4 ">Beli Karya Ini!</button>
            <p>
                Dengan membeli karya ini, anda setuju dengan <a href="#" className="text-primary">Syarat dan Ketentuan</a> yang berlaku.
            </p>
        </section>
    </main >
}
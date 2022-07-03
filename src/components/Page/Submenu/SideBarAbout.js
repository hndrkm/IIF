import { useState } from "react";

export default function SideBarAbout() {
    const [buttonOpen, setButtonOpen] = useState(false);


    return (
        <div className="w-full">
            <div className="text-black text-3xl font-extrabold p-3">Acerca del Istituto</div>
            <div className="flex flex-col text-gray-600 sm:self-center text-xl border-t sm:border-none">
                
                <div className="sm:inline-block border-2 font-bold">
                    <button className="p-3 hover:text-black" onClick={() => setButtonOpen(!buttonOpen)}>Description General</button>
                    <div className={buttonOpen ? "flex flex-col ml-5" : "hidden"}>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Descripcion
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Mision
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Vision
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Objetivos
                        </li>
                    </div>
                </div>
                <div className="sm:inline-block border-2 font-bold">
                    <div className="p-3 hover:text-black">Historia</div>
                </div>
                <div className="sm:inline-block border-2 font-bold">
                    <div className="p-3 hover:text-black">Administracion</div>
                </div>

            </div>
        </div>
    )
}
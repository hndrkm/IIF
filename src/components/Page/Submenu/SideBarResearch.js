import { useState } from "react";

export default function SideBarResearch() {
    const [btnAplicada, setBtnOpenA] = useState(false);
    const [btnTeorica, setBtnOpenT] = useState(false);
    const [btnAtmosfera, setBtnOpenAt] = useState(false);
    const [btnGeo, setBtnOpenG] = useState(false);
    const [btnRayos, setBtnOpenR] = useState(false);


    return (
        <div className="w-full">
            <div className="text-black text-3xl font-extrabold p-3">INVESTIGACIONES</div>
            <div className="flex flex-col text-gray-600 sm:self-center text-xl border-t sm:border-none">
                
                <div className="sm:inline-block border-2 font-bold">
                    <button className="p-3 hover:text-black font-bold" onClick={() => setBtnOpenA(!btnAplicada)}>Fisica Aplicada</button>
                    <div className={btnAplicada ? "flex flex-col ml-5" : "hidden"}>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Descripcion
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Personas
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Proyectos
                        </li>
                    </div>
                </div>
                <div className="sm:inline-block border-2 font-bold">
                    <button className="p-3 hover:text-black font-bold" onClick={() => setBtnOpenT(!btnTeorica)}>Fisica TEORICA</button>
                    <div className={btnTeorica ? "flex flex-col ml-5" : "hidden"}>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Descripcion
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Personas
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Proyectos
                        </li>
                    </div>
                </div>
                <div className="sm:inline-block border-2 font-bold">
                    <button className="p-3 hover:text-black font-bold" onClick={() => setBtnOpenAt(!btnAtmosfera)}>Fisica de la Atmosfera</button>
                    <div className={btnAtmosfera ? "flex flex-col ml-5" : "hidden"}>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Descripcion
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Personas
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Proyectos
                        </li>
                    </div>
                </div>
                <div className="sm:inline-block border-2 font-bold">
                    <button className="p-3 hover:text-black font-bold" onClick={() => setBtnOpenG(!btnGeo)}>Geofifica</button>
                    <div className={btnGeo ? "flex flex-col ml-5" : "hidden"}>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Descripcion
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Personas
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Proyectos
                        </li>
                    </div>
                </div>
                <div className="sm:inline-block border-2 font-bold">
                    <button className="p-3 hover:text-black font-bold" onClick={() => setBtnOpenR(!btnRayos)}>Rayos Cosmicos</button>
                    <div className={btnRayos ? "flex flex-col ml-5" : "hidden"}>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Descripcion
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Personas
                        </li>
                        <li className="sm:inline-block hover:text-black font-semibold">
                            Proyectos
                        </li>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
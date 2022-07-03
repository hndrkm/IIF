import { useState } from "react";
import SideBarResearch from "../../../components/Page/Submenu/SideBarResearch"
import Link from "next/dist/client/link"
export default function CosmicRays() {
  const [btn1, setBtnOpen1] = useState(false);
  const [btn2, setBtnOpen2] = useState(false);
  const [btn3, setBtnOpen3] = useState(false);

  return (
    <div className="w-full flex justify-center bg-gray-100">
      <div className="w-4/5 flex">
        <div className="flex w-1/4  bg-gray-100 justify-end mt-8">
          <SideBarResearch></SideBarResearch>
        </div>
        <div className="flex flex-col w-3/4 bg-gray-100 mt-10">
          <div className="pl-10 pt-10 text-6xl">
            RAYOS COSMICOS
          </div>
          <section className="w-full flex flex-col">
            <div className="bg-gray-500 w-full h-80 m-5">

            </div>
            <div className="text-justify p-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only

            </div>
          </section>
          <section className="w-full flex flex-col justify-center">
            <div className="pl-10 pt-10 text-4xl">
              Investigadores
            </div>

            <div className="w-full flex justify-center flex-col p-5 ">

              <div className="w-full flex flex-row shadow-xl p-1 mb-5">
                <div className="w-1/6 bg-gray-100 m-5 border-2 border-gray-300">

                </div>
                <div className="w-5/6 flex flex-col bg-gray-100 p-3">
                  <div className="pb-1 pt-5 pl-24 text-3xl">
                    Nombre
                  </div>
                  <div className="p-1 pl-24 ">
                    Cargo
                  </div>
                  <div className="p-1 pl-24 ">
                    Intereses de investigacion <br></br>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                  </div>
                  <div className="p-1 pl-24 ">
                    AREAS
                  </div>
                  <div className="p-1 pl-24 text-blue-400 ">
                    Ver Perfil Completo -{'>'}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-row shadow-xl p-1">
                <div className="w-1/6 bg-gray-100 m-5 border-2 border-gray-300">

                </div>
                <div className="w-5/6 flex flex-col bg-gray-100 p-3">
                  <div className="pb-1 pt-5 pl-24 text-3xl">
                    Nombre
                  </div>
                  <div className="p-1 pl-24 ">
                    Cargo
                  </div>
                  <div className="p-1 pl-24 ">
                    Intereses de investigacion <br></br>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                  </div>
                  <div className="p-1 pl-24 ">
                    AREAS
                  </div>
                  <div className="p-1 pl-24 text-blue-400 ">
                    Ver Perfil Completo -{'>'}
                  </div>
                </div>
              </div>



            </div>

          </section>
          <section className="w-full flex flex-col">
            <div className="pl-10 pt-10 text-4xl">
              Proyectos de Investigacion
            </div>
            <div className="w-full flex justify-center flex-col p-5">
              <div className="w-5/7 bg-gray-200 p-8">
                <div className=" bg-gray-300 m-4">
                  <button className="w-full p-3 text-4xl font-bold" onClick={() => setBtnOpen1(!btn1)}>
                    Proyecto 1
                  </button>
                  <div className={btn1 ? "flex flex-col w-full " : "hidden"}>
                    <div className="bg-gray-100 m-5 border-2 border-gray-300 h-60">

                    </div>
                    <div className=" p-2 text-justify">
                      Descripcion <br></br>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      
                    </div>
                    <div className="p-1 pl-24 text-blue-400 ">
                      Ver Completo -{'>'}
                    </div>
                  </div>
                </div>
                <div className=" bg-gray-300 m-4">
                  <button className="w-full p-3 text-4xl font-bold" onClick={() => setBtnOpen2(!btn2)}>
                    Proyecto 2
                  </button>
                  <div className={btn2 ? "flex flex-col w-full " : "hidden"}>
                    <div className="bg-gray-100 m-5 border-2 border-gray-300 h-60">

                    </div>
                    <div className=" p-2 text-justify">
                      Descripcion <br></br>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      
                    </div>
                    <div className="p-1 pl-24 text-blue-400 ">
                      Ver Completo -{'>'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

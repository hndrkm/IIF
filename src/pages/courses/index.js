import { useState } from "react";

function Courses() {
  const [btnState, setBtnOpen] = useState(false);
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 p-10">
        <div className="font-semibold text-3xl">
          Seminarios y cursos
        </div>
        <div className="w-full flex justify-center my-8">
          <div className="w-4/5">
            <div className="flex flex-col">
              <div className=" border-2 p-1 bg-gray-300 border-gray-100" >
                <button className="w-full flex text-left text-2xl font-bold hover:bg-white" onClick={() => setBtnOpen(!btnState)}>
                  <div className="w-1/5 text-center">
                    Sigla
                  </div>
                  <div className="w-4/5 flex ">
                    Nombre del Curso
                    <svg className="w-4 h-4 ml-6 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div className={btnState? "w-full flex justify-center bg-gray-100 my-2": "hidden"}>
                  <div className="w-4/5">
                    <div className="p-2 text-justify">
                      Descripcion
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                    </div>
                    <div className="text-center text-blue-500 p-2">
                      Enlaces
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="text-center text-xl font-bold text-white bg-gray-500">
                        Titulo del cursos
                      </div>
                      <div className="flex flex-row justify-around bg-gray-300">
                        <div className="text-xl font-semibold text-left">
                          Tipo
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Hora/Lugar e Instructor
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Durtacion
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Obs
                        </div>
                      </div>
                      <div className="flex flex-col justify-around bg-gray-50">
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-2 p-1 bg-gray-300 border-gray-100" >
                <button className="w-full flex text-left text-2xl font-bold hover:bg-white" onClick={() => setBtnOpen(!btnState)}>
                  <div className="w-1/5 text-center">
                    Sigla
                  </div>
                  <div className="w-4/5 flex ">
                    Nombre del Curso
                    <svg className="w-4 h-4 ml-6 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div className={btnState? "w-full flex justify-center bg-gray-100 my-2": "hidden"}>
                  <div className="w-4/5">
                    <div className="p-2 text-justify">
                      Descripcion
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                    </div>
                    <div className="text-center text-blue-500 p-2">
                      Enlaces
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="text-center text-xl font-bold text-white bg-gray-500">
                      TEmporada
                      </div>
                      <div className="flex flex-row justify-around bg-gray-300">
                        <div className="text-xl font-semibold text-left">
                          Tipo
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Hora/Lugar e Instructor
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Durtacion
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Obs
                        </div>
                      </div>
                      <div className="flex flex-col justify-around bg-gray-50">
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-2 p-1 bg-gray-300 border-gray-100" >
                <button className="w-full flex text-left text-2xl font-bold hover:bg-white" onClick={() => setBtnOpen(!btnState)}>
                  <div className="w-1/5 text-center">
                    Sigla
                  </div>
                  <div className="w-4/5 flex ">
                    Nombre del Curso
                    <svg className="w-4 h-4 ml-6 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div className={btnState? "w-full flex justify-center bg-gray-100 my-2": "hidden"}>
                  <div className="w-4/5">
                    <div className="p-2 text-justify">
                      Descripcion
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                    </div>
                    <div className="text-center text-blue-500 p-2">
                      Enlaces
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="text-center text-xl font-bold text-white bg-gray-500">
                      TEmporada
                      </div>
                      <div className="flex flex-row justify-around bg-gray-300">
                        <div className="text-xl font-semibold text-left">
                          Tipo
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Hora/Lugar e Instructor
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Durtacion
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Obs
                        </div>
                      </div>
                      <div className="flex flex-col justify-around bg-gray-50">
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-2 p-1 bg-gray-300 border-gray-100" >
                <button className="w-full flex text-left text-2xl font-bold hover:bg-white" onClick={() => setBtnOpen(!btnState)}>
                  <div className="w-1/5 text-center">
                    Sigla
                  </div>
                  <div className="w-4/5 flex ">
                    Nombre del Curso
                    <svg className="w-4 h-4 ml-6 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div className={btnState? "w-full flex justify-center bg-gray-100 my-2": "hidden"}>
                  <div className="w-4/5">
                    <div className="p-2 text-justify">
                      Descripcion
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                    </div>
                    <div className="text-center text-blue-500 p-2">
                      Enlaces
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="text-center text-xl font-bold text-white bg-gray-500">
                        TEmporada
                      </div>
                      <div className="flex flex-row justify-around bg-gray-300">
                        <div className="text-xl font-semibold text-left">
                          Tipo
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Hora/Lugar e Instructor
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Durtacion
                        </div>
                        <div className="text-xl font-semibold text-left">
                          Obs
                        </div>
                      </div>
                      <div className="flex flex-col justify-around bg-gray-50">
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>
                        <div className="flex flex-row justify-around">
                          <div className="font-semibold text-left">
                            Tipo
                          </div>
                          <div className="font-semibold text-left">
                            Hora/Lugar e Instructor
                          </div>
                          <div className="font-semibold text-left">
                            Durtacion
                          </div>
                          <div className="font-semibold text-left">
                            Obs
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Courses
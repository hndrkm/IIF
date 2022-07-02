function Descripction() {
    return (
    <div className="flex">

      <div className=" flex w-1/3  bg-gray-100 justify-end mt-8">
        <div className="w-2/3 m-5 ">
          <a className="text-black text-3xl font-bold p-3">Acerca del Istituto</a>
          <ul className="flex flex-col text-gray-600 sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <a className="p-3 hover:text-black">Description General</a>
              <div className="flex flex-col ml-5">
                <li className="sm:inline-block hover:text-black">
                  Descripcion
                </li>
                <li className="sm:inline-block hover:text-black">
                  Mision
                </li>
                <li className="sm:inline-block hover:text-black">
                  Vision
                </li>
                <li className="sm:inline-block hover:text-black">
                  Objetivos
                </li>
              </div>
            </li>
            <li className="sm:inline-block">
              <a className="p-3 hover:text-black">Historia</a>
            </li>
            <li className="sm:inline-block">
              <a className="p-3 hover:text-black">Administracion</a>
            </li>

          </ul>
        </div>
      </div>

      <div  className=" w-2/3 px-8" >

        <div className=" w-full pb-5 pt-4" >
            <h1 className="w-full my-4 text-5xl font-bold leading-tight text-center text-gray-900">Descripcion General</h1>
        </div>

        <div className=" w-full p-4 h-60 bg-gray-400 " >Video</div>

        <div className=" relative my-4 h-80 " >
          <div className=" absolute  right-0 h-full w-7/12 bg-purple-200 rounded-3xl ">foto</div>
          <div className=" absolute left-0 bg-blue-200  w-3/6 h-64 my-8  " >
            <h1 className="w-full my-4 text-xl font-bold leading-tight text-center text-gray-900" >Mision</h1>
            <p className=" mx-4" >
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
            </p>
          </div>
        </div>
        <div className=" relative my-4 h-80" >
          <div className=" absolute  left-0 h-full       w-7/12 bg-purple-200 rounded-3xl ">foto</div>
          <div className=" absolute right-0 bg-blue-200  w-3/6 h-64 my-8  " >
            <h1 className="w-full my-4 text-xl font-bold leading-tight text-center text-gray-900" >Vision</h1>
            <p className=" mx-4" >
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
            </p>
          </div>
        </div>

        <div className=" relative my-4 h-80 " >
          <div className=" absolute  right-0 h-full w-7/12 bg-purple-200 rounded-3xl ">foto</div>
          <div className=" absolute left-0 bg-blue-200  w-3/6 h-64 my-8  " >
            <h1 className="w-full my-4 text-xl font-bold leading-tight text-center text-gray-900" >Objetivos</h1>
            <p className=" mx-4" >
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
            </p>

          </div>
        </div>

        <div>Vision</div>
        <div>Objetivos</div>
      </div>
    </div>
    )
  }
  
  export default Descripction

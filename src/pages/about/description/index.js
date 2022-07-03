import SideBarAbout from "../../../components/Page/Submenu/SideBarAbout"
function Descripction() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex w-4/5">
        <div className=" flex w-1/4  bg-gray-100 justify-end mt-8">
          <div className="m-5">
            <SideBarAbout></SideBarAbout>
          </div>
        </div>
        <div className=" w-3/4 px-8" >
          <div className=" w-full pb-5 pt-4" >
            <h1 className="w-full my-4 text-5xl font-bold leading-tight text-center text-gray-900">Descripcion General</h1>
          </div>
          <div className=" w-full p-4 h-60 bg-gray-400 ">Video</div>
          
          <div className=" w-full p-4  bg-gray-200 my-8 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className=" relative my-4 h-80 " >
            <div className=" absolute  right-0 h-full w-7/12 bg-purple-200 rounded-3xl ">foto</div>
            <div className=" absolute left-0 bg-gray-400  w-3/6 h-64 my-8">
              <div className="w-full my-4 text-xl font-bold leading-tight text-center text-gray-900" >Mision</div>
              <div className=" mx-4" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              </div>
            </div>
          </div>
          <div className=" relative my-4 h-80" >
            <div className=" absolute  left-0 h-full w-7/12 bg-purple-200 rounded-3xl ">foto</div>
            <div className=" absolute right-0 bg-gray-400  w-3/6 h-64 my-8  " >
              <h1 className="w-full my-4 text-xl font-bold leading-tight text-center text-gray-900" >Vision</h1>
              <div className=" mx-4" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              </div>
            </div>
          </div>

          <div className=" relative my-4 h-80 " >
            <div className=" absolute  right-0 h-full w-7/12 bg-purple-200 rounded-3xl">foto</div>
            <div className=" absolute left-0 bg-gray-400  w-3/6 h-64 my-8">
              <div className="w-full my-4 text-xl font-bold leading-tight text-center text-gray-900" >Objetivos</div>
              <div className=" mx-4" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Descripction

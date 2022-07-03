import Image from "next/image"
import SideBarAbout from "../../../components/Page/Submenu/SideBarAbout"
function History() {
    return (    
    <div className="flex justify-center w-full">
      <div className="flex w-4/5">
        <div className=" flex w-1/4  bg-gray-100 justify-end mt-8">
          <div className="m-5">
            <SideBarAbout></SideBarAbout>
          </div>
        </div>
        <div className="w-3/4 px-10 ">
          <div className=" my-4 ">
            <div className="text-black text-4xl font-extrabold p-3 text-center">HISTORIA</div>
          </div>
          <div className=" my-0  ">
                <Image  src={"/profile/example.jpg"} width={800} height={400}/>
          </div>
          <div className=" my-4 bg-gray-300 p-4">
            <div> 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>

    )

  } 
  export default History

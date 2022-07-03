import Image from "next/image"

export default function Top({name , description ,image}){
    //<h1>top: {name} des : {description} img: {image}</h1>
    return(
        <section className="h-96 flex  bg-gray-200 px-28 ">
            <div className="w-3/6 p-8 ">
                <div className=" relative  left-20 p-4 bg-gray-300   h-full ">
                    <div className=" w-full m-4 text-4xl font-bold leading-tight text-gray-900 ">{name}</div>
                    <div className="mx-4">{description}</div>
                </div>
            </div>
            <div className="w-3/6 p-20" >
                <div className=" relative left-40 bottom-12 bg-purple-100 h-full  w-48" >
                    <Image  src={image} width={200} height={250}/>
                </div>
            </div>
        </section>
    )

} 


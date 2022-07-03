import Links from "./links"
export default function Bottom({ contact, links, biography, research ,teaching, service }){
    return(
        <section className=" flex   px-28 ">

            <div className="w-2/5 p-8  ">
                <div className="bg-white  relative  left-20 bottom-32 p-4 w-full " >
                    <div className="font-bold  text-xl uppercase my-8 ">Informacion de contacto</div>
                    <div className="my-2">
                        <div> Correo electronico:</div>
                        <div className=" text-gray-600" >{contact.email}</div>
                    </div>
                    <div className="my-2">
                        <div>Telefono</div>
                        <div className=" text-gray-600">{contact.call_me}</div>
                    </div>
                    <div className="my-2 ">
                        <div>Localizacion</div>
                        <div className=" text-gray-600 ">{contact.location}</div>
                    </div>
                    <div className="my-8">
                        <div className=" uppercase">enlaces personales</div>
                        <Links links={links} />
                   </div>
                </div>
            </div>

            <div className="w-3/5 px-20 " >
                <div className="">
                    <div className="my-4">
                        <div className="font-bold  text-2xl  my-4">Biografia</div>
                        <div className=" text-gray-800">{biography}</div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold  text-2xl  my-4">Investigacion</div>
                        <div className=" text-gray-800" >{research}</div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold  text-2xl  my-4">Ensenanza</div>
                        <div className=" text-gray-800" >{teaching.description}</div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold  text-2xl  my-4">Servicio</div>
                        <div className=" text-gray-800" >{service}</div>
                    </div>
                </div>
            </div>
        </section>
    )

} 


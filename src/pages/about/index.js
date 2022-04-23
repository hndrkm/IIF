function About() {
  return (
    <div className="flex">
      <div className=" flex w-1/3 bg-gray-100 justify-end mt-8">
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
      <div className="w-2/3 bg-gray-200">
        <div className=" bg-gradient-to-r from-gray-100 to-gray-300">
          <div className="w-full pb-5 pt-40">
            <h1 className="w-full my-4 text-5xl font-bold leading-tight text-center text-gray-900">
              Descripcion General
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex justify-center">
            <div className="p-5 " >
              <video autoPlay loop muted style={{ width: '600px', height: '600px' }}>
                <source src="/fisicaFCPN.mp4" />
              </video>
            </div>

          </div>
          <div className="flex w-full p-10">
            <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>)
}

export default About
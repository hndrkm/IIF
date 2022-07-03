import Image from "next/dist/client/image";
import dataobj from "./Data/dataDescription.json";
function Research() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-2/3">
        <section className="flex flex-col p-10">
          <div>
            <h1 className="text-4xl">Areas de Investigacion</h1>
            {dataobj.descriptionObj.Titile}
          </div>
          <div className="p-5">
            <div>
              <h2>INSTITUTO DE INVESTIGACIONES FISICAS</h2>

              RESUMEN DE PROYECTOS
              <br />
              RAYOS COSMICOS
              <br />
              FISICA DE LA ATMOSFERA
              <br />
              GEOFISICA
              <br />
              FISICA TEORICA
              <br />
              FISICA APLICADA
              <br />
              DATOS
              <br />
              Barómetro Cota Cota
              <br />
              NM64
              <br />
              Geomagnetismo
              <br />
              Meteorología_pty
            </div>
          </div>
        </section>
        <section className="grid grid-cols-3 place-content-center gap-2 p-5">
          <div className="p-5">
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image className="w-full" src="/NM64.jpg" width={300}
                height={170} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">FISICA APLICADA</div>
                <div className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image className="w-full" src="/NM64.jpg" width={300}
                height={170} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">FISICA TEORICA</div>
                <div className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image className="w-full" src="/NM64.jpg" width={300}
                height={170} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">GEOFISICA</div>
                <div className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image className="w-full" src="/NM64.jpg" width={300}
                height={170} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">FISICA DE LA ATMOSFERA</div>
                <div className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Image className="w-full" src="/NM64.jpg" width={300}
                height={170} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">RAYOS COSMICOS</div>
                <div className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}

export default Research
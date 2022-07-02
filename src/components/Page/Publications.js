import Publication from "./Publication";
export default function Publications() {

    return (
        <div className="container bg-gray-50 mx-auto w-full h-full">
            <h1 className="mb-3 font-bold text-gray-800 text-2xl text-center">Publicaciones</h1>
            <div className="relative wrap overflow-hidden p-5 h-full">
                <Publication></Publication>

                <div className="m-2 flex justify-between items-center w-full">
                    <div className="w-1/2 h-full flex justify-center">
                        <div className="rounded-lg w-10/12 h-full bg-gray-300">
                            
                        </div>
                    </div>
                    <div className="bg-gray-400 rounded-lg shadow-xl w-1/2 px-4 py-2">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Fecha / Titulo</h3>
                        <p className="text-sm  leading-snug tracking-wide text-gray-900 text-opacity-100">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className="m-2 flex justify-between flex-row-reverse items-center w-full">
                    <div className="w-1/2 h-full flex justify-center">
                        <div className="rounded-lg w-10/12 h-full bg-gray-300">
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="bg-gray-400 rounded-lg shadow-xl w-1/2 px-4 py-2">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Fecha / Titulo</h3>
                        <p className="text-sm  leading-snug tracking-wide text-gray-900 text-opacity-100">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
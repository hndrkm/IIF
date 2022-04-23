import Image from 'next/image'

export default function Title() {
    return (
        <>
            <div className="w-full h-12 bg-gray-200 flex justify-center">
                <div className="flex text-black text-2xl font-semibold p-2 font-serif">
                    Universidad Mayor de San Andres
                </div>
            </div>
            <div className="w-full flex justify-center pt-5  gap-3 bg-gray-50 pb-5">

                <div className='pr-4 flex justify-end border-r-4 border-gray-400'>
                    <Image className="pr-3" src="/MiniLogoUMSA.png" width={80}
                        height={140} />
                </div>
                <div className="text-justify p-1">
                    <div className="text-4xl  text-gray-900">
                        INSTITUTO DE
                    </div>
                    <div className="text-3xl font-semibold tracking-tighter text-gray-900">
                        INVESTIGACIONES
                    </div>
                    <div className="text-5xl font-semibold text-gray-900">
                        FISICAS
                    </div>
                </div>
                <div className="pl-4 flex justify-start border-l-4 border-gray-400">
                    <Image className="pr-3" src="/logoiif.jpg" width={110}
                        height={140} />
                </div>
            </div>
        </>

    );
}
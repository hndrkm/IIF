import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="text-gray-900 bg-gray-300 py-5">
            <div className="flex justify-evenly my-1">

                <div className="flex">
                    <div className="flex p-1 mx-5">
                        <div className="text-black flex flex-col justify-center">
                            <div className=" h-40 w-40 flex justify-center">
                                <Image className="pr-3" src="/negUMSA.png" width={100}
                                    height={170} />
                            </div>
                            <h1 className="text-xl text-bold text-center">UMSA</h1>
                        </div>
                    </div>
                    <div className="flex p-1 mx-5">
                        <div className="text-black flex flex-col  justify-center">
                            <div className=" h-40 w-40 flex justify-center">
                                <Image className="pr-3" src="/negFCPN.png" width={150}
                                    height={150} />
                            </div>
                            <h1 className="text-xl text-bold text-center">FCPN</h1>
                        </div>
                    </div>
                    <div className="flex p-1 mx-5">
                        <div className="text-black flex flex-col  justify-center">
                            <div className="bg-gray-300 h-40 w-40"></div>
                            <h1 className="text-xl text-bold text-center">FIUMSA</h1>
                        </div>
                    </div>
                </div>

                <div className="flex p-1 mx-5">
                    <div className="text-center pl-2">
                        <h1 className="text-lg text-bold">Instituto de Investigaciones Fisicas</h1>
                        <spam className="inline-flex mt-4 justify-center">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </spam>
                        <div className="text-gray-700">
                            Calle 27 Cota Cota<br />
                            Campus Universitario<br />
                            2792622 - 2792999<br />
                            Fax 591-2-2792622<br />
                            fisica@fiumsa.edu.bo <br />
                            Casilla de correos: 8635 <br />
                            La Paz - Bolivia  <br />
                            IIF © 2022
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}
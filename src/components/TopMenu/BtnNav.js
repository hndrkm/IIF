import Link from 'next/link'
import { useState } from "react";

export default function BtnNav({ itemName, url, drop, items }) {
    const [buttonOpen, setButtonOpen] = useState(false);
    //console.log(items);
    //<Link href={"/" + url}></Link>
    return (
        <>
            <li className="h-full">

                
                <button className="border-dashed 
                    border-gray-400  
                    text-black  
                    hover:text-gray-100
                    hover:bg-gray-400
                    px-3 py-2 flex 
                    items-center
                    h-full 
                    transition duration-150 
                    ease-in-out " onClick={() => setButtonOpen(!buttonOpen)} >
                    {itemName}
                    {drop ?
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg> :
                        <></>
                    }

                </button>
                
                
                <div
                    className={buttonOpen ? "" : "hidden"}
                >
                    <div className=" absolute w-52 bg-gray-100  shadow-md">
                        {
                        items.map((item) =>
                            <Link key={item.name} href={item.url} >
                                <a className="block px-4 py-2 hover:bg-gray-500 hover:text-gray-100">
                                    {item.name}
                                </a>
                            </Link>)
                        }
                    </div>
                </div>


            </li>

        </>
    );
}
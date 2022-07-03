import { useState, useEffect } from "react";
import BtnNav from "./BtnNav";
import Title from "./Title";
import DataNabBar from "./Data/NavBarData.json";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 100);
        });
    }, []);
    return (
        <>
            <Title></Title>
            <div
                className={"w-full z-30 clearNav h-auto bg-slate-100 bg-opacity-90 transition duration-300 ease-in-out " + (scrollActive ? "fixed shadow-md pt-0" : "mt-5 pt-2")}>
                <div className="h-16 flex flex-col max-w-6xl mx-auto border-b">

                    <div className={"md:flex flex-grow " + (navbarOpen ? " flex" : " hidden")}>
                        <nav className="flex-col flex-grow">
                                                    
                            <ul className="h-full flex flex-grow flex-wrap justify-between">
                                {DataNabBar.Items.map((item) => <BtnNav key={item.name} itemName={item.name} url={item.url} drop={item.drop} items={item.items}></BtnNav>)}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    );
}

import { useState, useEffect } from "react";
import BtnNav from "./BtnNav";
import Title from "./Title";

const itemsMenu = [
    {
        'name': "Inicio",
        'url': "/",
        'drop': false,
        'items': [
            
        ]
    },
    {
        'name': "Acerca del instituto",
        'url': "/about",
        'drop': true,
        'items': [
            {
                'name': "Descripción",
                'url': "/about"
            },
            {
                'name': "Historia",
                'url': "/about/history"
            },
            {
                'name': "Administracion",
                'url': "/about/adm"
            }
        ]
    },
    {
        'name': "Investigacion",
        'url': "/research",
        'drop': true,
        'items': [
            {
                'name': "Estudiantes de pregrado",
                'url': "/"
            },
            {
                'name': "Estudiantes de postgrado",
                'url': "/"
            },
            {
                'name': "Cursos",
                'url': "/"
            }
        ]
    },
    {
        'name': "Servicios",
        'url': "/services",
        'drop': true,
        'items': [
            {
                'name': "Planetario",
                'url': "/"
            },
            {
                'name': "Olimpiadas",
                'url': "/"
            },
            {
                'name': "Revista Boliviana de Física",
                'url': "/"
            },
        ]
    },
    {
        'name': "Seminarios y Cursos",
        'url': "/courses",
        'drop': true,
        'items': [
            {
                'name': "F.A.P.A",
                'url': "/"
            },
            {
                'name': "Convocatorias",
                'url': "/"
            },
            {
                'name': "Magia de la física",
                'url': "/"
            },
            {
                'name': "Centro de Estudiantes",
                'url': "/"
            },
            {
                'name': "Clubes",
                'url': "/"
            },
            {
                'name': "Nuevos Postulantes",
                'url': "/"
            }
        ]
    },
    {
        'name': "Estudia con Nosotros",
        'url': "/",
        'drop': false,
        'items': [
            {
                'name': "Inicio",
                'url': "/"
            }
        ]
    }
];

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
                                {itemsMenu.map((item) => <BtnNav key={item.name} itemName={item.name} url={item.url} drop={item.drop} items={item.items}></BtnNav>)}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    );
}

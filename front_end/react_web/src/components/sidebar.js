/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Sidebar = () => (
    <div className="relative">
        <div className=" mt-0 fixed shadow-xl bg-white flex flex-wrap  items-center justify-between sm:hidden md:w-64 z-10 py-4 px-6 md:inline-fixed md:block md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between mx-auto">           
            <div className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
                <span className="font-semibold text-xl tracking-tight text-black">Yavirac Cinema</span>
            </div>
            <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                        <Link to="/home">                
                            <span className="cursor-pointer px-2 py-1 active:bg-gray-600 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                            <i className="fas fa-home mr-2 "></i>                            
                            <span className="mx-2">Inicio</span>
                            </span>
                        </Link>
                    </li>
                    <li className="items-center">
                        <div className="text-gray-800 text-xs uppercase py-3 font-bold block">
                            <i className="fas fa-photo-video mr-2"/>           
                            Salas y Películas                      
                        </div>
                    </li>
                    <li className="items-center">
                        <Link to="/salas">                
                            <span className="cursor-pointer px-2 py-1 active:bg-gray-600 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                            <i className="fas fa-door-open"/>         
                            <span className="mx-2">Gesionar Salas</span>
                            </span>
                        </Link>
                    </li> 
                    <li className="items-center">
                        <Link to="/peliculas">                
                            <span className="cursor-pointer px-2 py-1 active:bg-gray-600 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                            <i className="fas fa-film"/>                         
                            <span className="mx-2">Gestionar Películas</span>
                            </span>
                        </Link>
                    </li>                                                             
                </ul>                
            </div>
        </div>
    </div>
)

export default Sidebar;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Header = () => (
        <div className="flex-grow flex mr-2 ml-64">
            <div className="flex-grow flex">
                {/* <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    Ayuda
                </a> */}
            </div>
            <div>
                <Link to="/">
                    <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <span className="mr-2">Logout</span>
                        <i className="far fa-arrow-alt-circle-left"/>
                    </button>
                </Link>
            </div>            
        </div>
)

export default Header;
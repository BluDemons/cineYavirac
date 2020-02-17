/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link} from 'react-router-dom';

const Page404 = () => {
    return(
        <div>
            <div className="h-screen w-screen bg-green-600 flex justify-center content-center flex-wrap">
                <p className="font-sans text-6xl text-white">404 - Página no Encontrada</p>
            </div>
            <Link to="/home">
            <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
                <span className="opacity-50">Regresar</span>
            </div>
            </Link>
        </div>
    )
}

export default Page404;
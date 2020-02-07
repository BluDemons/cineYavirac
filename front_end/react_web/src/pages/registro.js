import React from "react";
import { Link } from "react-router-dom";

const Resgistro = () => {
  return (
    <div>    
      <div>
          <Link to="/">
            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Regresar</span>
              <i className="far fa-arrow-alt-circle-left" />
            </button>
          </Link>
        </div>  
      <div className="sm:mr12 sm:ml-12 md:ml-64 md:mr-64 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-24">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Correo Electrónico
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>          
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Contraseña
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="password"
              placeholder="******************"
            />            
          </div>
        </div>
        <div className="flex mr-2">                
        <div className="flex-grow">
          <Link to="/">
            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            type="submit">
              <span className="mr-2">Guardar</span>
              <i className="far fa-check-circle"/>
            </button>
          </Link>
        </div>
      </div>      
      </div>
    </div>
  );
};

export default Resgistro;

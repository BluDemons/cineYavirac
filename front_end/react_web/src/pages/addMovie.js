import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import {Link} from "react-router-dom";
import axios from "axios";

const API = "http://localhost:3000/server/sala";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sala_nombre: "",
      sala_descripcion: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = e => {
    e.preventDefault();
    this.post = {
      tabla: "pelicula",
      datos: {
        sala_nombre: this.state.sala_nombre,
        sala_descripcion: this.state.sala_descripcion
      }
    };

    console.log(JSON.stringify(this.post.datos.estado_libro_id));

    if (
      this.post.datos.sala_nombre === "" ||
      this.post.datos.sala_descripcion === ""
    ) {
      alert("Complete todos los datos para continuar...");
    } else {
      axios
        .post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Agregado exitosamente");
            window.location.assign("http://localhost:3000/add_movie");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const { sala_nombre, sala_descripcion } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="md:left-0 leading-loose">
            <form className="md:mr-0 m-4 p-10 bg-white rounded shadow-xl">
              <p className="text-gray-800 font-medium">Customer information</p>
              <div className="">
                <label className="block text-sm text-gray-600" htmlFor="cus_name">
                  Título
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_name"
                  name="cus_name"
                  type="text"
                  required=""
                  placeholder="Añade un título"
                  aria-label="Name"
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="cus_email">
                  Resumen
                </label>
                <input
                  className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text-area"
                  required={true}
                  placeholder="Añade un resumen"
                  aria-label="Email"
                />
              </div>
              <div className="">
                <label className="block text-sm text-gray-600" htmlFor="cus_name">
                  Categoría
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  name="cus_name"
                  type="select"
                  required={true}
                  placeholder="Selecciona una categoría"
                  aria-label="categoria"
                />
              </div>
              <div className="">
                <label className="block text-sm text-gray-600" htmlFor="cus_name">
                  Precio
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  type="number"
                  required={true}
                  placeholder="Añade un precio"
                  aria-label="precio"
                />
              </div>              
              <div className="mt-4 flex justify-between">                
                <Link to="/peliculas">
                  <button
                    className="mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center"                    
                  >
                    <i className="far fa-times-circle mr-2" />
                    <span>Cancelar</span>
                  </button>
                </Link>
                <Link to="/peliculas">
                  <button
                    className=" mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center"
                    type="submit"
                  >
                    <span className="mr-2">Guardar</span>
                    <i className="far fa-check-circle" />
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMovie;

import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:3000/server/add_movie";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula_nombre: "",
      pelicula_descripcion: "",
      pelicula_categoria: "",
      pelicula_valor: "",
      pelicula_imagen: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectorFiles: FileList) {
    console.log(selectorFiles);
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = e => {
    e.preventDefault();
    this.post = {
      tabla: "pelicula",
      datos: {
        pelicula_nombre: this.state.pelicula_nombre,
        pelicula_descripcion: this.state.pelicula_descripcion,
        pelicula_categoria: this.state.pelicula_categoria,
        pelicula_valor: this.state.pelicula_valor,
        pelicula_imagen: this.state.pelicula_imagen
      }
    };

    console.log(JSON.stringify(this.post.datos.estado_libro_id));

    if (
      this.post.datos.pelicula_nombre === "" ||
      this.post.datos.pelicula_descripcion === "" ||
      this.post.datos.pelicula_categoria === "" ||
      this.post.datos.pelicula_valor === "" ||
      this.post.datos.pelicula_imagen === ""
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
    const {
      pelicula_nombre,
      pelicula_descripcion,
      pelicula_categoria,
      pelicula_valor,
      pelicula_imagen
    } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="md:left-0 leading-loose">
            <form className="md:mr-0 m-4 p-10 bg-white rounded shadow-xl">
              <p className="text-gray-800 font-medium">Peliculas</p>
              <div className="">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_name"
                >
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
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
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
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_name"
                >
                  Categoría
                </label>
                <select
                  class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="grid-state"
                >
                  <option className="text-sm text-gray-600">Seleccione Categoría....</option>  
                  <option>Romántica</option>
                  <option>Terror</option>
                  <option>Comedia</option>
                  <option>Drama</option>
                  <option>Animadas</option>
                </select>
              </div>
              <div class="inline-block mt-2 w-1/2 pr-1">
                <label class=" block text-sm text-gray-600" for="cus_email">
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
              <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label class=" block text-sm text-gray-600" for="cus_email">
                  Imagen
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="file"
                  required={true}
                  aria-label="Email"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <Link to="/peliculas">
                  <button className="mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center">
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

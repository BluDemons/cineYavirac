/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import axios from "axios";
import fondo from "../assets/fondo.jpg";
import { Link } from "react-router-dom";

const API = "http://localhost:3000/server/library";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula_nombre: "",
      pelicula_descripcion: "",
      pelicula_categoria: "",
      pelicula_valor: "",
      pelicula_imagen: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = e => {
    e.preventDefault();
    this.get = {
      tabla: "pelicula",
      datos: {
        pelicula_nombre: this.state.pelicula_nombre,
        pelicula_descripcion: this.state.pelicula_descripcion,
        pelicula_categoria: this.state.pelicula_categoria,
        pelicula_valor: this.state.pelicula_valor,
        pelicula_imagen: this.state.pelicula_imagen
      }
    };

    console.log(JSON.stringify(this.get.datos.estado_pelicula_id));

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
        .get(API, this.post)
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
    const image= require('../assets/audience.jpg');
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="p-24 flex flex-wrap items-center justify-center">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">              
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  className="relative w-40"
                  src={image}
                  alt=""
                />
                </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nombre Pelicula
                  </span>
                  <Link to="/gestion_peliculas">
                  <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                    Editar
                  </span>
                  </Link>                  
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">              
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  className="relative w-40"
                  src={fondo}
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Outdoor</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">Monstera</span>
                  <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                    $45.00
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">              
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                    <img className="w-40 relative" src={image} alt=""/>
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">Outdoor</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">Oak Tree</span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                    $68.50
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;

/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "http://localhost:5000/cine/movie";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    axios
      .get(API)
      .then(response => {
        this.setState({ peliculas: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteData = value => {
    axios.delete(`${API}?id=${value}`, {
      data: { id: value }
    });
    window.location.assign("http://localhost:3000/peliculas");
  };

  render() {
    const { peliculas } = this.state;
    const image = require("../assets/login.jpg")
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
        <div className="justify-between flex my-0 select-none">
            <h1 className="ml-12 text-center mr-10 text-5xl">
              Películas
            </h1>
            <Link to="/gestion_peliculas">
            <button
              type="button"
              className="mr-8 shadow-md no-underline font-black text-2xl rounded-full h-12 w-12 flex items-center justify-center bg-blue-400 text-white text-sm border-blue btn-primary hover:text-white hover:bg-pink-500 focus:outline-none active:shadow-none"
            >
              <i className="fas fa-plus-square"></i>
            </button>
            </Link>
          </div>
          <div className="p-24 flex flex-wrap items-center justify-center">
          {peliculas.map(element => (
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg" key={element.id}>
                  <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                    <img className="relative w-40" src={image} alt="" />
                  </div>
                  <div className="relative text-white px-6 pb-6 mt-6">
                    <div className=" justify-between">
                      <span className="block font-semibold text-sm">
                        Título: {element.titulo}
                      </span>
                      <span className="block font-semibold text-sm">
                        Resumen: {element.resumen}
                      </span>
                      <p>{element.categoria}</p>
                      <p>Valor: ${element.valorBoleto}</p>
                      <div className="flex justify-between">
                      <Link to="/gestion_peliculas">
                        <span className="justify-between bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                          Editar
                        </span>
                      </Link>
                        <span className="cursor-pointer justify-between bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                        onClick={ () => this.deleteData(element.id) }>
                          Borrar
                        </span>
                      </div>
                    </div>
                  </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;

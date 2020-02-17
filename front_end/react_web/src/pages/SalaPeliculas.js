/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "http://localhost:5000/film/query3";

class SalaMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sala_movie: []
    };
  }

  componentDidMount() {
    axios
      .get(API)
      .then(response => {
        this.setState({ sala_movie: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteData = value => {
    axios.delete(`${API}?id=${value}`, {
      data: { id: value }
    });
    window.location.assign("http://localhost:3000/sala_pelicula");
  };

  render() {
    const { sala_movie } = this.state;
    const image = require("../assets/login.jpg");
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-2xl">
                      Cartelera
                    </h3>
                    <div className="flex my-2 select-none">
                      <Link to="/asignar_pelicula">
                        <button
                          type="button"
                          className="mr-8 shadow-md no-underline font-black text-2xl rounded-full h-12 w-12 flex items-center justify-center bg-blue-400 text-white text-sm border-blue btn-primary hover:text-white hover:bg-pink-500 focus:outline-none active:shadow-none"
                        >
                          <i className="fas fa-plus-square"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className="">
                      <div className="flex-grow flex-no-shrink ">
                        <div className="flex flex-wrap items-center justify-center">
                          {sala_movie.map(element => (
                            <div
                              className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg"
                              key={element.id}
                            >
                              <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                                <img
                                  className="relative w-40"
                                  src={image}
                                  alt=""
                                />
                              </div>
                              <div className="relative text-white px-6 pb-6 mt-6">
                                <div className=" justify-between">
                                  <span className="block font-semibold text-sm">
                                    Sala: {element.idsala_nombre}
                                  </span>
                                  <span className="block font-semibold text-sm">
                                    Película: {element.idpelicula_titulo}
                                  </span>
                                  <span className="block font-semibold text-sm">
                                    Hora: {element.idhorario_hora}
                                  </span>
                                  <div className="flex justify-between">
                                    <Link to="/asignar_pelicula">
                                      <span className="justify-between bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                        Editar
                                      </span>
                                    </Link>
                                    <span
                                      className="cursor-pointer justify-between bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                                      onClick={() =>
                                        this.deleteData(element.id)
                                      }
                                    >
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SalaMovie;

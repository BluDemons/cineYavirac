import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Grafica from "./grafica";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "http://localhost:5000/cine/";


class Inicio extends Component {

  handleOpenModal (id) { this.setState({ showModal: true, test: id }) }
  handleCloseModal () { this.setState({ showModal: false }) }

  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        pelicula: "Película",
        boletos: "# de Boletos"
      },
      sala_movie: [],
      compras:[],
      pelicula: "",
      boletos: ""
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    //traer cartelera del API
    axios
      .get(API + "raw3")
      .then(response => {
        this.setState({ sala_movie: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
    //traer compras del API
    axios
      .get(API + "raw")
      .then(response => {
        this.setState({ compras: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateData = value => {
        axios.put(API+'compra'+`?id=${value}`, {
            persona_identificacion: this.state.persona_identificacion,
            persona_nombre: this.state.persona_nombre,
            persona_email: this.state.persona_email,
            persona_direccion: this.state.persona_direccion,
            persona_telefono: this.state.persona_telefono,
            persona_clave: this.state.persona_clave
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

  deleteData = value => {
    axios.delete(`${API + "sala_movie"}?id=${value}`, {
      data: { id: value }
    });
    window.location.assign("http://localhost:3000/home");
  };

  deleteDataReporte = value => {
    axios.delete(`${API + "compra"}?id=${value}`, {
      data: { id: value }
    });
    window.location.assign("http://localhost:3000/home");
  };

  render() {
    const { sala_movie } = this.state;
    const {compras} = this.state;
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
                          className="mr-8 shadow-md no-underline font-black rounded h-10 w-16 flex items-center border-b-2 border-green-500 justify-center bg-teal-400 text-white text-sm btn-primary hover:text-white hover:bg-green-500 focus:outline-none active:shadow-none"
                        >Añadir
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
                                  <span className=" text-justify block font-semibold text-sm">
                                    Sala: {element.idsala_nombre}
                                  </span>
                                  <span className="text-justify block font-semibold text-sm">
                                    Película: {element.idpelicula_titulo}
                                  </span>
                                  <span className="text-justify block font-semibold text-sm">
                                    Hora: {element.idhorario_hora}
                                  </span>
                                  <div className="flex justify-between">
                                    {/* <Link to="/asignar_pelicula">
                                      <span className="bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                        Editar
                                      </span>
                                    </Link> */}
                                    <span
                                      className="cursor-pointer bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
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
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Reporte de Compras
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className=" flex-grow flex-no-shrink ">
                      <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead className="border-b">
                          <tr>
                            <th className="text-left p-3 px-5">
                              {this.state.table_header.pelicula}
                            </th>
                            <th className="text-left p-3 px-5">
                              {this.state.table_header.boletos}
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-orange-100 bg-gray-100">
                            <td>
                              {compras.map(element => (
                                <p className="p-2 pr-6 text-justify" key={element.id}>
                                  {" "}
                                  {element.titulo}{" "}
                                </p>
                              ))}
                            </td>
                            <td>
                              {compras.map(element => (
                                <p className="p-2 px-5 text-center" key={element.id}>
                                  {" "}
                                  {element.numero_boletos}{" "}
                                </p>
                              ))}
                            </td>
                            {/* <td>
                              {compras.map(element => (
                                <p className="p-2 px-5" key={element.id}>
                                  <button
                                    onClick={() =>
                                      this.handleOpenModal(element.id)
                                    }
                                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                  >
                                    Editar
                                  </button>
                                </p>
                              ))}
                            </td> */}
                            <td>
                              {compras.map(element => (
                                <p className="p-2 px-5" key={element.id}>
                                  <button
                                    onClick={() => this.deleteDataReporte(element.id)}
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                  >
                                    Eliminar
                                  </button>
                                </p>
                              ))}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Gráfica Estadística
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className="">
                      <div className=" flex-grow flex-no-shrink ">
                        <Grafica />
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

export default Inicio;

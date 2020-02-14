import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/cine/";

class AddSalaPelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salas: [],
      peliculas: [],
      horarios: [],
      idsala: "",
      idpelicula: "",
      idhorario: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios
      .get(API_URL + "sala")
      .then(response => {
        this.setState({ salas: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(API_URL + "movie")
      .then(response => {
        this.setState({ peliculas: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(API_URL + "horario")
      .then(response => {
        this.setState({ horarios: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }

  saveData = e => {
    e.preventDefault();
    this.post = {
      datos: {
        idsala: this.state.idsala,
        idpelicula: this.state.idpelicula,
        idhorario: this.state.idhorario
      }
    };

    console.log(JSON.stringify(this.post.datos));

    if (
      this.post.datos.idsala === "" ||
      this.post.datos.idpelicula === "" ||
      this.post.datos.idhorario === ""
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios
        .post(API_URL + "sala_movie", this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Agregado exitosamente");
            window.location.assign("http://localhost:3000/home");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    const {
      salas,
      peliculas,
      horarios,
      idsala,
      idpelicula,
      idhorario
    } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-0 pt-6 pb-8">
          <div className=" md:left-0 leading-loose">
            <form
              className="md:mr-0 m-4 p-10 bg-white rounded shadow-xl"
              onSubmit={this.saveData}
            >
              <p className="text-gray-800 font-medium">
                Asignación de Películas
              </p>
              <div className="">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="idpelicula"
                >
                  Películas
                </label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="idpelicula"
                  name="idpelicula"
                  value={idpelicula}
                  onChange={this.changeHandler}
                >
                  <option className="text-sm text-gray-600">
                    Seleccione pelicula....
                  </option>
                  {peliculas.map(element => (
                    <option key={element.id} value={element.id}>{" "}{element.titulo}{" "}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="idhorario"
                >
                  Horario
                </label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="idhorario"
                  name="idhorario"
                  value={idhorario}
                  onChange={this.changeHandler}
                >
                  <option className="text-sm text-gray-600">
                    Seleccione horario....
                  </option>
                  {horarios.map(element => (
                    <option key={element.id} value={element.id}>{" "}{element.hora}{" "}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <label className="block text-sm text-gray-600" htmlFor="idsala">
                  Salas
                </label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="idsala"
                  name="idsala"
                  value={idsala}
                  onChange={this.changeHandler}
                >
                  <option className="text-sm text-gray-600">
                    Seleccione salas....
                  </option>
                  {salas.map(element => (
                    <option key={element.id} value={element.id}>
                      {" "}
                      {element.nombre}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 flex justify-between">
                <Link to="/home">
                  <button className=" mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center">
                    <i className="far fa-times-circle mr-2" />
                    <span>Cancelar</span>
                  </button>
                </Link>
                <button
                  className=" mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center"
                  type="submit"
                >
                  <span className="mr-2">Guardar</span>
                  <i className="far fa-check-circle" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSalaPelicula;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/cine/persona";

class Resgistro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      clave: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registroUser = e => {
    e.preventDefault();
    this.post = {
      datos: {
        nombre: this.state.nombre,
        correo: this.state.correo,
        clave: this.state.clave
      }
    };
    if (
      this.post.datos.nombre === "" ||
      this.post.datos.correo === "" ||
      this.post.datos.clave === ""
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios
        .post(API_URL, this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Usuario registrado correctamente");
            window.location.assign("http://localhost:3000/");
          }
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  };

  render() {
    const { nombre, correo, clave } = this.state;
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
        <form onSubmit={this.registroUser}>
        <div className="sm:mr12 sm:ml-12 md:ml-64 md:mr-64 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-24">
          <h1 className="font-hairline text-center text-2xl">Regístrate!!</h1>
          <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                type="text"
                name="nombre"
                value={nombre}
                required={true}
                placeholder="Arthuro..."
                onChange={this.changeHandler}
              />
            </div>
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="correo"
              >
                Correo Electrónico
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                type="text"
                name="correo"
                value={correo}
                required={true}
                placeholder="example@gmail.com"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="clave"
              >
                Contraseña
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                id="clave"
                type="password"
                name="clave"
                value={clave}
                required={true}              
                placeholder="******************"
                minLength="6"
                onChange={this.changeHandler}
                securetextentry="true"
              />
            </div>
          </div>
          <div className="flex mr-2">
            <div className="flex-grow">
                <button
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  type="submit"
                >
                  <span className="mr-2">Guardar</span>
                  <i className="far fa-check-circle" />
                </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default Resgistro;

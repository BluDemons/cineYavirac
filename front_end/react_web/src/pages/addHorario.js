import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import {Link} from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/cine/horario";

class AddHorario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: ''
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = e => {
    e.preventDefault();
    this.post = {
      datos: {
        hora: this.state.hora,
      }
    };

    //console.log(JSON.stringify(this.post.datos));

    if (
      this.post.datos.hora === "" 
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios.post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Agregado exitosamente");
            window.location.assign("http://localhost:3000/horarios");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const { hora } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-0 pt-6 pb-8">
          <div className=" md:left-0 leading-loose">
            <form className="md:mr-0 m-4 p-10 bg-white rounded shadow-xl" onSubmit={this.saveData}>
              <p className="text-gray-800 font-medium">Información</p>
              <div className="">
                <label className="block text-sm text-gray-600" htmlFor="hora">
                  Horario
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="hora"
                  name="hora"
                  type="text"
                  required={true}
                  value={hora}
                  placeholder="Añade un horario"
                  onChange={ this.changeHandler } 
                />
              </div>                                         
              <div className="mt-4 flex justify-between">                
                <Link to="/horarios">
                  <button
                    className=" mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center"                    
                  >
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

export default AddHorario;

import React, { Component } from 'react';
import axios from 'axios';

const API_LOGIN = "http://localhost:8001/server/login";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_LOGIN, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          window.location.assign("http://localhost:3001/addMovie");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { email, password } = this.state
    const image= require('../assets/fondo.jpg')
    return (
      <div
        className="h-screen font-sans"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex justify-center px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex my-16">
            <div
              className="bg-fixed w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="w-full lg:w-1/2 bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-white text-center">
                Bienvenido de Vuelta!!
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-gray-800 rounded">
                <div className="mb-4 bg-gray-800">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-200"
                    htmlFor="username"
                  >
                    Usuario
                  </label>
                  <input
                    className="w-full px-3 py-2 bg-gray-800 text-sm leading-tight text-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="example@gmail.com"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-600"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    className="w-full px-3 py-2 bg-gray-800 mb-3 text-sm leading-tight text-gray-200 border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="******************"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-4">
								<a className="text-blue-500 hover:text-white cursor-pointer">¿No tienes una cuenta? Resgístrate aquí!!</a>
							</div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-gray-800 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Ingresar
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center text-gray-500">
                  Copyright &copy;{" "}
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-white"
                    href="./home"
                  >
                    THWS
                  </a>
                  &nbsp; 2020
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

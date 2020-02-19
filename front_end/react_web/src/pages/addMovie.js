import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/cine/movie";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      resumen: '',
      categoria: '',
      valorBoleto: '',
      imagen: '',
      estado: true
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(selectorFiles: FileList) {
  //   console.log(selectorFiles);
  // }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  encodeImageFileAsURL(e){
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = e => {
      //this.setState( {imagen: reader.result})
      console.log(reader.result)
    }
  }

  onFileChange=(e)=> {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState( {
        imagen: reader.result
      }) 
      console.log(reader.result)
    }
    reader.onerror = function (error){
      console.log('Error:',error)
    }
  }

  saveData = e => {
    e.preventDefault();
    this.post = {
      datos: {
        titulo: this.state.titulo,
        resumen: this.state.resumen,
        categoria: this.state.categoria,
        valorBoleto: this.state.valorBoleto,
        imagen: this.state.imagen,
        estado: this.state.estado,
      }
    };

    //console.log(JSON.stringify(this.post.datos));

    if (
      this.post.datos.titulo === "" ||
      this.post.datos.resumen === "" ||
      this.post.datos.categoria === "" ||
      this.post.datos.valorBoleto === "" ||
      this.post.datos.imagen === ""
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios.post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Agregado exitosamente");
            window.location.assign("http://localhost:3000/peliculas");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const {
      titulo,
      resumen,
      categoria,
      valorBoleto,
      imagen
    } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="md:left-0 leading-loose">
            <form className="md:mr-0 m-4 p-10 bg-white rounded shadow-xl" onSubmit={ this.saveData}>
              <p className="text-gray-800 font-medium">Peliculas</p>
              <div className="">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="titulo"
                >
                  Título
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="titulo"
                  name="titulo"
                  type="text"
                  required={true}
                  value={titulo}
                  placeholder="Añade un título ej: Avangers"
                  onChange={ this.changeHandler } 
                />
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="resumen"
                >
                  Resumen
                </label>
                <input
                  className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                  id="resumen"
                  name="resumen"
                  type="text-area"
                  required={true}
                  value={resumen}
                  placeholder="Añade un resumen"
                  onChange={ this.changeHandler } 
                />
              </div>
              <div className="">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="categoria"
                >
                  Categoría
                </label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="categoria"
                  name="categoria"
                  value = { categoria}
                  onChange={ this.changeHandler } 
                >
                  <option className="text-sm text-gray-600">Seleccione Categoría....</option>  
                  <option>Romántica</option>
                  <option>Terror</option>
                  <option>Comedia</option>
                  <option>Drama</option>
                  <option>Animadas</option>
                  <option>Acción</option>
                  <option>Ánime</option>
                </select>
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label className=" block text-sm text-gray-600" htmlFor="categoria">
                  Precio
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  type="number"
                  required={true}
                  name="valorBoleto"
                  min="0"
                  value={valorBoleto}
                  placeholder="Añade un precio"
                  onChange={ this.changeHandler } 
                />
              </div>
              <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label className=" block text-sm text-gray-600" htmlFor="imagen">
                  Imagen
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="imagen"
                  name="imagen"
                  type="file"
                  required={true}
                  defaultValue={imagen}
                  onChange={ this.onFileChange  } 
                />
              </div>
              <div className="mt-4 flex justify-between">
                <Link to="/peliculas">
                  <button className="mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center">
                    <i className="far fa-times-circle mr-2" />
                    <span>Cancelar</span>
                  </button>
                </Link>
                  <button
                    className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center"
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

export default AddMovie;

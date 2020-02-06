/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:8001/server/library";

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula_nombre: '',
            pelicula_descripcion: '',
            pelicula_categoria: '',
            pelicula_valor: '',
            pelicula_imagen: '',            
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            tabla: "pelicula",
            datos: {
                pelicula_nombre: this.state.pelicula_nombre,
                pelicula_descripcion: this.state.pelicula_descripcion,
                pelicula_categoria: this.state.pelicula_categoria,
                pelicula_valor: this.state.pelicula_valor,
                pelicula_imagen: this.state.pelicula_imagen
            }
        }

        console.log(JSON.stringify(this.post.datos.estado_libro_id))

        if (this.post.datos.pelicula_nombre === "" ||
            this.post.datos.pelicula_descripcion === "" ||
            this.post.datos.pelicula_categoria === "" ||
            this.post.datos.pelicula_valor === "" ||
            this.post.datos.pelicula_imagen === ""
            ) {
          alert("Complete todos los datos para continuar...");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                alert("Agregado exitosamente")
                window.location.assign("http://localhost:3000/add_movie");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };


    render() {
        const { 
            pelicula_nombre, 
            pelicula_descripcion, 
            pelicula_categoria, 
            pelicula_valor, 
            pelicula_imagen, 
        } = this.state
        return(
            <div>
                <Sidebar />
                <Header />
                
            </div>
        )
    }
}

export default AddMovie;
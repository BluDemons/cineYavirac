import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/tailwind.css';
import Home from './pages/home';
import Login from './pages/login';
import Movie from './pages/pelicula';
import Sala from './pages/sala';
import AddMovie from './pages/addMovie';
import AddSala from './pages/addSala';
import Page404 from './pages/Page404';
import Resgistro from './pages/registro';
import grafica from './pages/grafica';
import horario from './pages/horario';
import AddHorario from './pages/addHorario';
import SalaPelicula from './pages/SalaPeliculas';
import AddSalaPelicula from './pages/addSalaPelicula';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/registro" component={ Resgistro}/>
            <Route exact path="/home" component={ Home } />
            <Route path="/peliculas" component={ Movie } />
            <Route path="/gestion_peliculas" component={ AddMovie } />
            <Route path="/salas" component={ Sala } />
            <Route path="/gestion_salas" component={ AddSala } />
            <Route path="/grafica" component={ grafica } />
            <Route path="/horarios" component={ horario } />
            <Route path="/gestion_horario" component={ AddHorario } />
            <Route path="/sala_pelicula" component={ SalaPelicula } />
            <Route path="/asignar_pelicula" component={ AddSalaPelicula } />
            <Route component={ Page404 } />
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();

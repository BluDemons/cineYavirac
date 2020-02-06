import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/tailwind.css';
import Home from './pages/home';
import Login from './pages/login';
import AddMovie from './pages/addMovie';
import Page404 from './pages/Page404';
import Resgistro from './pages/registro';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/registro" component={ Resgistro}/>
            <Route exact path="/home" component={ Home } />
            <Route path="/pelicula" component={ AddMovie } />
            {/* <Route path="/add_book" component={ AddBook } />
            <Route path="/virtual_library" component={ VirtualLibrary } /> */}
            <Route component={ Page404 } />
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();

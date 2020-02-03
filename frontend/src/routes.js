import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Login
import Login from './pages/login/login/Login';
import Register from './pages/login/register/Register';
import Recovery from './pages/login/recovery/Recovery';

// User 
import Main from './pages/main/Main';

export default function Routes() {
    return ( 
        <BrowserRouter>
            <Route exact path = "/" component = { Login } ></Route>
            <Route path = "/login/register" component = { Register }></Route>
            <Route path = "/login/recovery" component = { Recovery }></Route>
            <Route path = "/user/:idUser" component = { Main }></Route>
        </BrowserRouter>
    );
}
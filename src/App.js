import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import Home from './components'
import Store from './components/Store/Store';
import Pack from './components/Pack';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin'
const App = () => {
    return (
        <div>
           <CssBaseline />
           <Route exact path='/' component = { Home } />
           <Route path='/store' component = { Store } />
           <Route path='/membership' component = { Pack } />
           <Route path='/signup' component = { Signup } />
           <Route path='/signin' component = { Signin } />
        </div>
    )
}

export default App

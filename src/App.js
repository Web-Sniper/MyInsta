import React from 'react';
import NavBar from "./components/NavBar"
import "./App.css"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screen/home';
import Login from './components/screen/login'
import Signup from './components/screen/signup'
import Profile from './components/screen/profile'
import Createpost from './components/screen/createpost'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/createpost">
        <Createpost />
      </Route>
    </BrowserRouter>
  );
}

export default App;

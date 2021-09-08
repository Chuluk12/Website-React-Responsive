import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Components/home';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './Components/about';
import Service from './Components/service';
import Contact from './Components/contact';
import Navbar from "./Components/Navbar"
import Footer from "./Components/footer";
import Login from "./Components/login";
import Register from "./Components/register";

function App() {
  return (
    <>
    <Navbar />
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;

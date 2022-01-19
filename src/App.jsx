import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "./index.css"
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {


    return (
        <>

            <Navbar />
            <Switch>
                <Route exact path="/" component={() => <Home name="About" />} />
                <Route exact path="/contact" render={() => <Contact />} />
                <Route exact path="/service" component={() => <Service />} />
                <Route exact path="/about" component={About} />
                <Redirect to="/" />

            </Switch>
            <Footer/>

        </>);
}
export default App;

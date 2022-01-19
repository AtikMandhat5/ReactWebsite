import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/home.svg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name='Grow Your Business with'
                imgsrc={web} visit="{/home}"
                btnname="Get Started" />

        </>
    )
}

export default Home;
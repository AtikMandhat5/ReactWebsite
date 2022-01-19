import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (

        <section id="header" className="">
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card
                                        imgsrc={val.imgsrc}
                                        title={val.title} />
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>

        </section>

    );

}

export default Service;
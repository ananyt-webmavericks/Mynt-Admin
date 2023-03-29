import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./File.css";
import Dashboard from "../../Dashboard/Dashboard";
import Data from "./Data.js";

const File = () =>{
    return (
        <>
            
            <div className= "container">
            <div className="row">
                <div className="col">
                    <Dashboard />
                </div>
                <div className="col-10">
                    {
                        Data.map( (item, ind) => {
                            return (
                                <Card 
                                    key = {item.key}
                                    imgsrc = {item.imgsrc}
                                    title = {item.title}
                                    txt = {item.txt}
                                />
                            )
                        })
                    }
                </div>
            </div>
             
            </div>
        </>
    )
}
export default File ;
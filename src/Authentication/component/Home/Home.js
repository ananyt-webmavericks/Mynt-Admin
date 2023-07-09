import React, { useState } from 'react';
import CardHome from "./CardHome";
import Data from "./Data";
import { Link } from 'react-router-dom';
import '../../Dashboard/Dashboard.css';
import Dashboard from '../../Dashboard/Dashboard';

const Home = () =>{
    const [sidebar, setSidebar] = useState(true);
    return (
        <>     
            <div className='container-fluid'>
            <div className='row'>
                <Dashboard />
            </div>
        </div>
        <div className='row'>
          <div className='col-8' style={{marginTop:"150px", marginLeft:"350px"}}>
                    {
                        Data.map( (item, ind) => {
                            return (
                                <CardHome 
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
        </>
    )
}
export default Home ;
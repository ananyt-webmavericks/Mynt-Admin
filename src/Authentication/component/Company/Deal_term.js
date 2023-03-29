import React from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import "../../Css/Deal_term.css";

function Deal_term() {
  return (
    <>

      
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Dashboard />
          </div>
          <div className='col-9'>
                <h1>Live Deals</h1>
                <p>Browser current subscriptions opportunity on Mynt.</p>

                <div style ={{backgroundColor : "#D8D8D8", padding :"25px"}}>
                    <div className="col-5" style={{display:"inline-block", marginLeft:"40px", marginRight:"40px"}}>
                        <input className = "form-control f"   />
                          <SearchIcon className ="h" />
                    </div>
                    <div className="col-5" style={{display:"inline-block", marginLeft:"20px"}}>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Sort By</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deal_term;
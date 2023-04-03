import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation } from "react-router-dom";

const Deal_Term_Form = () =>{
  const location1 = useLocation()
  const[name , setName] = useState(location1.state.bio.campaign_id);
  const[roll , setRoll] = useState(location1.state.bio.security_id);
  const[reg , setReg] = useState(location1.state.bio.discount);
  const[branch,setBranch] = useState(location1.state.bio.valuation_cap);
  const[pass,setPass] = useState(location1.state.bio.min_subscription);
  const[date , setDate] = useState(location1.state.bio.target);
  
  const[t,setT] = useState(location1.state.bio.end_date);
  const[p,setP] = useState(location1.state.bio.created_at);
  const[d , setD] = useState(location1.state.bio.updated_at);

  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updateRoll = (e) =>{
    setRoll(e.target.value)
  }
  const updateReg = (e) =>{
    setReg(e.target.value)
  }
  const updateBranch = (e) =>{
    setBranch(e.target.value)
  }
  const updatePass = (e) =>{
    setPass(e.target.value)
  }
  const updateDate = (e) =>{
    setDate(e.target.value)
  }

    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
          
            <Dashboard />
          
        </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"280px"}}>
          <form >
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update</h1>
              <label for="exampleInputName" className="form-label">Security Type</label>
              <input type="text" className="form-control" id="exampleInputName" value={name} onChange={updateName}/>

              <label for="exampleInputRollnum" className="form-label">Discount</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={roll} onChange={updateRoll}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Valuation Cap</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={reg} onChange={updateReg}/>
            
            
              <label for="exampleInputBranch" className="form-label">Min Subscription</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>
            
            
              <label for="exampleInputpassword" className="form-label">Target</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={pass} onChange={updatePass}/>

              <label for="exampleInputBranch" className="form-label">End Date</label>
              <input  type="date" className="form-control" id="exampleInputBranch" value={t} onChange={updateDate}/>

              <label for="exampleInputpassword" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={p} onChange={updatePass}/>

              <label for="exampleInputBranch" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={d} onChange={updateDate}/>
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"700px",marginTop:"30px"}}>Submit</button>
        </form>
        </div>
        </div>
     
        </>
    )
}
export default Deal_Term_Form;
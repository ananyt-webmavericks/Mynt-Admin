import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';

const Investor_KYC_Insert_data= () =>{
  const[id , setId] = useState();  
  const[name , setName] = useState();
  const[roll , setRoll] = useState();
  const[reg , setReg] = useState();
  const[branch,setBranch] = useState();
  const[pass,setPass] = useState();

  const updateId = (e) =>{
    setId(e.target.value)
  }
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

    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
          
            <Dashboard />
          
        </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"280px"}}>
          <form style={{padding:"20px"}}>
                <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

                <label for="exampleInputName" className="form-label">Id</label>
                <input type="text" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

                <label for="exampleInputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" value={name} onChange={updateName}/>
              
              
                <label for="exampleInputRollnum" className="form-label">RollNum</label>
                <input  type="number" className="form-control" id="exampleInputRollnum" value={roll} onChange={updateRoll}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">Registration num</label>
                <input  type="number" className="form-control" id="exampleInputeRegistrationnum" value={reg} onChange={updateReg}/>
              
              
                <label for="exampleInputBranch" className="form-label">Branch</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>
              
              
                <label for="exampleInputpassword" className="form-label">Password</label>
                <input  type="password" className="form-control" id="exampleInputPassword1" value={pass} onChange={updatePass}/>
                <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
            </form>
        </div>
        </div>
      
        </>
    )
}
export default Investor_KYC_Insert_data
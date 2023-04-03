import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"

const Company_Form = () =>{
  const[name , setName] = useState();
  const[roll , setRoll] = useState();
  const[reg , setReg] = useState();
  const[branch,setBranch] = useState();
  const[pass,setPass] = useState();

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
          <div className='col-10' style={{marginTop:"150px", marginLeft:"350px"}}>
          <form style={{padding:"20px",borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={name} onChange={updateName}/>

              <label for="exampleInputName" className="form-label">User Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={name} onChange={updateName}/>

              <label for="exampleInputRollnum" className="form-label">Company Logo</label>
              <input  type="link" className="form-control" id="exampleInputRollnum" value={roll} onChange={updateRoll}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Company Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={reg} onChange={updateReg}/>
            
            
              <label for="exampleInputBranch" className="form-label">Company Linked In Profile</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>
            
            
              <label for="exampleInputpassword" className="form-label">Website Url</label>
              <input  type="link" className="form-control" id="exampleInputPassword1" value={pass} onChange={updatePass}/>

              <label for="exampleInputBranch" className="form-label">Previous Funding</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Production Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Traction Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Revenue</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Reason For Community Round</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Reason For Mynt</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Existing Commitments</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Company Pitch</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Country</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">State</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">City</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Pincode</label>
              <input  type="number" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              
              <label for="exampleInputBranch" className="form-label">Company Address</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              
              <label for="exampleInputBranch" className="form-label">Facebook Link</label>
              <input  type="Link" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              
              <label for="exampleInputBranch" className="form-label">Instagram Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>
              
              <label for="exampleInputBranch" className="form-label">Legal Name</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              
              <label for="exampleInputBranch" className="form-label">Cin</label>
              <input  type="number" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              
              <label for="exampleInputBranch" className="form-label">Date Of Incorporation</label>
              <input  type="date" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Incorporation Type</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Sector</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Invested So far</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Number Of Employees</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Status</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>

              <label for="exampleInputBranch" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={branch} onChange={updateBranch}/>
              
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
        </form>
        </div>
        </div>
      
    
        </>
    )
}
export default Company_Form;
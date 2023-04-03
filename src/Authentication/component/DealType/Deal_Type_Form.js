import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation } from "react-router-dom";

const Deal_Type_Form = () =>{
  const location1 = useLocation()
  const[name , setName] = useState(location1.state.bio.deal_name);
  const[create , setCreate] = useState(location1.state.bio.created_at);
  const[Update , setUpdate] = useState(location1.state.bio.updated_at);
  // console.log(name)


  
  

  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
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
          <form>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Deal Type Form</h1>
              <label for="exampleInputName" className="form-label">Deal Name</label>
              <input type="text" defaultValue={name} className="form-control" id="exampleInputName" value={name} onChange={updateName}/>
              <label for="exampleInputRollnum" className="form-label">Created At</label>
              <input  type="text" defaultValue={create} className="form-control" id="exampleInputRollnum" value={create} onChange={updateCreate}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Updated At</label>
              <input  type="text" defaultValue={Update} className="form-control" id="exampleInputeRegistrationnum" value={Update} onChange={update}/>
  
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"600px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      
        </>
    )
}
export default Deal_Type_Form;
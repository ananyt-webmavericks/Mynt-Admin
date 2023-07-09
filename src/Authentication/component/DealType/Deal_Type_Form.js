import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Deal_Type_Form = () =>{
  const location1 = useLocation()
  const[name , setName] = useState(location1.state.bio.deal_name);
  const navigator = useNavigate()  

  const updateName = (e) =>{
    setName(e.target.value)
  }

  const gotoAdd = async() => { 
    const values = {
   
      deal_type_id : location1.state.bio.id,
       
     deal_name :name, 
    }
       
      await authAxios.patch(`${Base_url}/api/deal_type/manage`,values );
     navigator("/home/deal_type")
    }
    return(
        <>
        <div className='container-fluid'>
        <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div>
        </div>
        <div className='row'>
          <div className='col-7' style={{marginTop:"170px", marginLeft:"450px", borderRadius:"20px", backgroundColor:"#BACDDB"}}>
          <form style={{padding:"50px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update Deal Type Data</h1>
              <label for="exampleInputName" className="form-label">Deal Name</label>
              <input type="text" defaultValue={name} className="form-control" id="exampleInputName" value={name} onChange={updateName}/>
          
              <button type="submit" className="btn btn-success" style={{marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      
        </>
    )
}
export default Deal_Type_Form;
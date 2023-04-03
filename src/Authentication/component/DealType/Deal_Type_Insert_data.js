import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


const Deal_Type_Insert_data = () =>{
  const location1 = useLocation()
  const[id , setId] = useState();
  const[name , setName] = useState();
  const[create , setCreate] = useState();
  const[Update , setUpdate] = useState();
  const [post, setPost] = React.useState(null);
  


  const navigator = useNavigate();


  
  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }


  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && name && create && Update  )
    
    {
    
           await axios.post(`${Base_url}/api/deal_type/manage`, {

            
            id : id,
            
            deal_name : name,
            
            created_at : create,
            
            updated_at : Update,
            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/deal_type")
    
    }
    
    else
    
    {
    
    alert("Please fill all the section")
    
    }
    
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
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="text"  className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Deal Name</label>
              <input type="text"  className="form-control" id="exampleInputName" value={name} onChange={updateName}/>

              <label for="exampleInputRollnum" className="form-label">Created At</label>
              <input  type="text"  className="form-control" id="exampleInputRollnum" value={create} onChange={updateCreate}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Updated At</label>
              <input  type="text"  className="form-control" id="exampleInputeRegistrationnum" value={Update} onChange={update}/>
  
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"600px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
      
        </>
    )
}
export default Deal_Type_Insert_data;
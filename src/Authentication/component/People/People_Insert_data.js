import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


const People_Insert_data = () =>{
  const[id , setId] =useState();  
  const[company , setCompany] = useState();
  const[type , setType] = useState();
  const[name , setName] = useState();
  const[position,setPosition] = useState();
  const[facebook,setFacebook] = useState();
  const[insta , setinsta] = useState();
  const[linked , setLinked] = useState();
  const[description , setDescription] = useState();
  const[profile,setProfile] = useState();
  const[create,setCreate] = useState();
  const[Update,setUpdate] = useState();
  const [post, setPost] = React.useState(null);

  const navigator = useNavigate();

  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCompany = (e) =>{
    setCompany(e.target.value)
  }
  const updateType = (e) =>{
    setType(e.target.value)
  }
  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updatePosition = (e) =>{
    setPosition(e.target.value)
  }
  const updateFacebook = (e) =>{
    setFacebook(e.target.value)
  }
  const updateInsta = (e) =>{
    setinsta(e.target.value)
  }
  const updateLinked = (e) =>{
    setLinked(e.target.value)
  }
  const updateDescription = (e) =>{
    setDescription(e.target.value)
  }
  const updateProfile = (e) =>{
    setProfile(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }


  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && company && type && name && position && facebook && insta && linked && description && profile && create && Update  )
    
    {
    
           await axios.post(`${Base_url}/api/people/manage`, {

            
            id : id,
            
            company_id : company,
            
            type : type,
            
            name : name,

            position : position,

            facebook_link : facebook,

            instagram_link : insta,

            linked_in_link : linked,

            description : description,

            profile_image : profile,

            
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
    
    
    navigator("/home/people")
    
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
          <form style={{padding:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="text" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Company Id</label>
              <input type="text" className="form-control" id="exampleInputName" value={company} onChange={updateCompany}/>
            
            
              <label for="exampleInputRollnum" className="form-label">Type</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={type} onChange={updateType}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={name} onChange={updateName}/>
            
            
              <label for="exampleInputBranch" className="form-label">Position</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={position} onChange={updatePosition}/>

              
              <label for="exampleInputBranch" className="form-label">Facebook Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={facebook} onChange={updateFacebook}/>

              
              <label for="exampleInputBranch" className="form-label">Instagram Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={insta} onChange={updateInsta}/>

              
              <label for="exampleInputBranch" className="form-label">Linked In Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={linked} onChange={updateLinked}/>

              
              <label for="exampleInputBranch" className="form-label">Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={description} onChange={updateDescription}/>

              
              <label for="exampleInputBranch" className="form-label">Profile Image</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={profile} onChange={updateProfile}/>

              
              <label for="exampleInputBranch" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={create} onChange={updateCreate}/>

              <label for="exampleInputBranch" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={Update} onChange={update}/>
            
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
     
    </>
    )
}
export default People_Insert_data;
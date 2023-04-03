import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';

const People_Form = () =>{
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
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update</h1>

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
              <input  type="text" className="form-control" id="exampleInputBranch" value={profile} onChange={updateProfile}/>

              
              <label for="exampleInputBranch" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={create} onChange={updateCreate}/>

              <label for="exampleInputBranch" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={Update} onChange={update}/>
            
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
     
    </>
    )
}
export default People_Form;
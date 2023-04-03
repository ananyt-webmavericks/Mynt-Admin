import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';

const Press_Form = () =>{
  const[company , setCompany] = useState();
  const[title , setTitle] = useState();
  const[link , setLink] = useState();
  const[description,setDescription] = useState();
  const[banner,setBanner] = useState();
  const[create,setCreate] = useState();
  const[Update,setUpdate] = useState();

  const updateCompany = (e) =>{
    setCompany(e.target.value)
  }
  const updateTitle = (e) =>{
    setTitle(e.target.value)
  }
  const updateLink = (e) =>{
    setLink(e.target.value)
  }
  const updateDescription = (e) =>{
    setDescription(e.target.value)
  }
  const updateBanner = (e) =>{
    setBanner(e.target.value)
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
                <h1 style={{textAlign:"center",color:"blueviolet"}}>Update Data</h1>

                <label for="exampleInputName" className="form-label">Company id</label>
                <input type="number" className="form-control" id="exampleInputName" value={company} onChange={updateCompany}/>

                <label for="exampleInputRollnum" className="form-label">Title</label>
                <input  type="text" className="form-control" id="exampleInputRollnum" value={title} onChange={updateTitle}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">Link</label>
                <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={link} onChange={updateLink}/>
              
              
                <label for="exampleInputBranch" className="form-label">Description</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={description} onChange={updateDescription}/>

                <label for="exampleInputBranch" className="form-label">Banner</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={banner} onChange={updateBanner}/>

                <label for="exampleInputBranch" className="form-label">Created at</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={create} onChange={updateCreate}/>

                <label for="exampleInputBranch" className="form-label">Updated at</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={Update} onChange={update}/>
              
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
     
    </>
    )
}
export default Press_Form;
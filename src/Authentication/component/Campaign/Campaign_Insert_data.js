import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"

const Campaign_Insert_data = () =>{
  const[id , setId] = useState();
  const[c_id , setC_id] = useState();
  const[status , setStatus] = useState();
  const[youtube_link , setYoutube_link] = useState();
  const[ama_date,setAma_date] = useState();
  const[ama_meet,setAma_meet] = useState();
  const[ama_youtube,setAma_youtube] = useState();
  const[pitch,setPitch] = useState();
  const[create,setCreate] = useState();
  const[update,setUpdate] = useState();
  const [post, setPost] = React.useState(null);
  

  const navigator = useNavigate();


  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateC_id = (e) =>{
    setC_id(e.target.value)
  }
  const updateStatus = (e) =>{
    setStatus(e.target.value)
  }
  const updateYoutube = (e) =>{
    setYoutube_link(e.target.value)
  }
  const updateAmadate = (e) =>{
    setAma_date(e.target.value)
  }
  const updateAmameet = (e) =>{
    setAma_meet(e.target.value)
  }
  const updateAmayoutube = (e) =>{
    setAma_youtube(e.target.value)
  }
  const updatePitch = (e) =>{
    setPitch(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const Update = (e) =>{
    setUpdate(e.target.value)
  }

  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && c_id && status && youtube_link && ama_date && ama_meet && ama_youtube && pitch && create && update )
    
    {
    
           await axios.post(`${Base_url}/api/campaign/manage`, {

            
            id : id,
            
            company_id : c_id,
            
            status : status,
            
            youtube_link : youtube_link,
            
            ama_date : ama_date,
            
            ama_meet_link : ama_meet,
            
            ama_youtube_video : ama_youtube,
            
            pitch : pitch,
            
            created_at : create,
            
            updated_at : update,
            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/campaign")
    
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
          <div className='col-10' style={{marginTop:"150px", marginLeft:"350px"}}>
          <form style={{padding:"20px",borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInput" className="form-label">Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInput" className="form-label">Company Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={c_id} onChange={updateC_id}/>
            
            
              <label for="exampleInput" className="form-label">Status</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={status} onChange={updateStatus}/>
            
            
              <label for="exampleInput" className="form-label">Youtube Link</label>
              <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={youtube_link} onChange={updateYoutube}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama date</label>
              <input  type="date" className="form-control" id="exampleInputeRegistrationnum" value={ama_date} onChange={updateAmadate}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama Meet Link</label>
              <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={ama_meet} onChange={updateAmameet}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama Youtube</label>
              <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={ama_youtube} onChange={updateAmayoutube}/>

              <label for="exampleInputRegistrationnum" className="form-label">Pitch</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={pitch} onChange={updatePitch}/>

              <label for="exampleInputRegistrationnum" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={create} onChange={updateCreate}/>

              <label for="exampleInputRegistrationnum" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={update} onChange={Update}/>
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
        </form>
        </div>
        </div>
      </>
    )
}
export default Campaign_Insert_data;
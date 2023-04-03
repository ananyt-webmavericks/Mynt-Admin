import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';

const Campaign_Form = () =>{
  const[c_id , setC_id] = useState();
  const[status , setStatus] = useState();
  const[youtube_link , setYoutube_link] = useState();
  const[ama_date,setAma_date] = useState();
  const[ama_meet,setAma_meet] = useState();
  const[ama_youtube,setAma_youtube] = useState();
  const[pitch,setPitch] = useState();
  const[create,setCreate] = useState();
  const[update,setUpdate] = useState();




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
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update Data</h1>

              <label for="exampleInput" className="form-label">Campaign Id</label>
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
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
        </form>
        </div>
        </div>
     
    





        </>
    )
}
export default Campaign_Form;
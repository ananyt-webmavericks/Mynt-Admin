import React, { useEffect } from 'react';
import Dashboard from '../../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from '../../Base_url';
import { authAxios } from '../../../../Services/auth.service';
import { useState } from 'react';



const CampCampaign = () =>{  
  const location1 = useLocation();
  const[youtube_link , setYoutube_link] = useState(location1.state.bio.youtube_link);
  const[ama_date,setAma_date] = useState(location1.state.bio.ama_date);
  const[ama_meet,setAma_meet] = useState(location1.state.bio.ama_meet);
  const[ama_youtube,setAma_youtube] = useState(location1.state.bio.ama_youtube);
  const[pitch,setPitch] = useState(location1.state.bio.pitch);
  const[status,setStatus] = useState();
 

  const navigator = useNavigate();

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
  const updateStatus = (e) =>{
   
    setStatus(e.target.value)
  }


  const gotoAdd = async() => {
    
    const values = { 
       
       campaign_id : location1.state.bio.id, 

       company_id : location1.state.bio.company_id.id,
       
       youtube_link : youtube_link,
       
       ama_date : ama_date,
       
       ama_meet_link : ama_meet,
       
       ama_youtube_video : ama_youtube,
       
       pitch : pitch,
       status : status,
       }
    
      await authAxios.patch(`${Base_url}/api/campaign/manage`,values);
      
      navigator(`/home/under-update/${location1.state.bio.id}`)
    
    }
    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
            <Dashboard 
           
            />
        </div>
        </div>
        <div className='row'>
          <div className='col-7' style={{marginTop:"120px", marginLeft:"450px", borderRadius:"20px", backgroundColor:"#BACDDB"}}>
          <form style={{padding:"40px",borderRadius:"20px"}} onSubmit={e =>{
            e.preventDefault();
            gotoAdd()}
          }>
              <h1 style={{textAlign:"center",color:"#070A52",marginBottom:"20px"}}>Update Campaign Data</h1>

             
            

              <label for="exampleInput" className="form-label">Youtube Link</label>
              <input   type="link" className="form-control" id="exampleInputeRegistrationnum" value={youtube_link} onChange={updateYoutube}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama date</label>
              <input   type="date" className="form-control" id="exampleInputeRegistrationnum" value={ama_date} onChange={updateAmadate}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama Meet Link</label>
              <input   type="text" className="form-control" id="exampleInputeRegistrationnum" value={ama_meet} onChange={updateAmameet}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama Youtube</label>
              <input   type="link" className="form-control" id="exampleInputeRegistrationnum" value={ama_youtube} onChange={updateAmayoutube}/>

              <label for="exampleInputRegistrationnum" className="form-label">Pitch</label>
              <input   type="text" className="form-control" id="exampleInputeRegistrationnum" value={pitch} onChange={updatePitch}/>

              <label for="exampleInput" className="form-label">Status</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" >
                <option selected  className="active">Select Option</option>
                <option onClick={updateStatus}>CREATED</option>
                <option onClick={updateStatus}>UNDER REVIEW</option> 
                <option onClick={updateStatus}>CHANGES REQUESTED</option> 
                <option onClick={updateStatus}>APPROVED</option>   
                <option onClick={updateStatus}>LIVE</option>   
                <option onClick={updateStatus}>COMPLETED</option>
                <option onClick={updateStatus}>REFUNDED</option>  
                <option onClick={updateStatus}>CLOSED</option>       
                </select>
              </div>
            <button type="submit"  className="btn btn-success" style={{marginTop:"30px"}} >Submit</button>
        </form>
        </div>
        </div>
        </>
    )
}
export default CampCampaign;
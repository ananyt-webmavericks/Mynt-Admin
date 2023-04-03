import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


const Investor_Consents_Insert_data = () =>{
  const[id , setId] = useState();  
  const[campaign_id , setCampaignid] = useState();
  const[risk,setRisk] = useState();
  const[limited , setLimited] = useState();
  const[diversification , setDiversification] = useState();
  const[cancel,setCancel] = useState();
  const[research,setResearch] = useState();
  const[create,setCreate] = useState();
  const[Update,setUpdate] = useState();
  const [post, setPost] = React.useState(null);
  

  const navigator = useNavigate();


  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCampaign = (e) =>{
    setCampaignid(e.target.value)
  }
  const updateRisk = (e) =>{
    setRisk(e.target.value)
  }
  const updateLimited = (e) =>{
    setLimited(e.target.value)
  }
  const updateDiversification = (e) =>{
    setDiversification(e.target.value)
  }
  const updateCancel = (e) =>{
    setCancel(e.target.value)
  }
  const updateResearch = (e) =>{
    setResearch(e.target.value)
  }

  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }

  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && campaign_id && risk && limited && diversification && cancel && research && create && Update  )
    
    {
    
           await axios.post(`${Base_url}api/investor-consent/manage`, {

            
            id : id,
            
            user_id : campaign_id,
            
            risk_consent : risk,
            
            limited_transfer_consent : limited,

            diversification_consent : diversification,

            cancellation_consent : cancel,

            research_consent : research,
            
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
    
    
    navigator("/home/investor_consents")
    
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
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">User Id </label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/>

              <label for="exampleInputRollnum" className="form-label">Risk Consent</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={risk} onChange={updateRisk}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Limited Transfer Consent</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={limited} onChange={updateLimited}/>

              <label for="exampleInputRegistrationnum" className="form-label">Diversification Consent</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={diversification} onChange={updateDiversification}/>
              
              <label for="exampleInputRollnum" className="form-label">Cancellation Consent</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={cancel} onChange={updateCancel}/>

              <label for="exampleInputRollnum" className="form-label">Research Consent</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={research} onChange={updateResearch}/>
            
              <label for="exampleInputBranch" className="form-label">Created at</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={create} onChange={updateCreate}/>
            
            
              <label for="exampleInputpassword" className="form-label">Updated at</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={Update} onChange={update}/>
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Investor_Consents_Insert_data;
import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


const Deal_Term_Insert_data = () =>{
  const location1 = useLocation()

  const[id , setId] = useState();
  const[campaign_id , setCampaign_id] = useState();
  const[security_type, setSecurity_type] = useState();
  const[discount , setDiscount] = useState();
  const[valuation_cap , setValuation_cap] = useState();
  const[min_subscription,setMin_subscription] = useState();
  const[target,setTarget] = useState();
  const[end_date , setEnd_date] = useState();
  const[create,setCreate] = useState();
  const[Update , setUpdate] = useState();
  const [post, setPost] = React.useState(null);


  const navigator = useNavigate();
  

  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCampaign = (e) =>{
    setCampaign_id(e.target.value)
  }
  const updateSecurity = (e) =>{
    setSecurity_type(e.target.value)
  }
  const updateDiscount = (e) =>{
    setDiscount(e.target.value)
  }
  const updateValue = (e) =>{
    setValuation_cap(e.target.value)
  }
  const updateMin = (e) =>{
    setMin_subscription(e.target.value)
  }
  const updateTarget = (e) =>{
    setTarget(e.target.value)
  }
  const updateEnd = (e) =>{
    setEnd_date(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }


  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && campaign_id && security_type && discount && valuation_cap && min_subscription && target && end_date && create && Update  )
    
    {
    
           await axios.post(`${Base_url}/api/deal_terms/manage`, {

            
            id : id,
            
            campaign_id : campaign_id,
            
            security_type : security_type,
            
            discount : discount,

            valuation_cap : valuation_cap,

            min_subscription : min_subscription,

            target : target,

            end_date : end_date,
            
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
    
    
    navigator("/home/deal_term")
    
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
          <form >
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Campaign Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/>

              <label for="exampleInputName" className="form-label">Security Type</label>
              <input type="text" className="form-control" id="exampleInputName" value={security_type} onChange={updateSecurity}/>

              <label for="exampleInputRollnum" className="form-label">Discount</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={discount} onChange={updateDiscount}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Valuation Cap</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={valuation_cap} onChange={updateValue}/>
            
            
              <label for="exampleInputBranch" className="form-label">Min Subscription</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={min_subscription} onChange={updateMin}/>
            
            
              <label for="exampleInputpassword" className="form-label">Target</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={target} onChange={updateTarget}/>

              <label for="exampleInputBranch" className="form-label">End Date</label>
              <input  type="date" className="form-control" id="exampleInputBranch" value={end_date} onChange={updateEnd}/>

              <label for="exampleInputpassword" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={create} onChange={updateCreate}/>

              <label for="exampleInputBranch" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={Update} onChange={update}/>
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"700px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
        </form>
        </div>
        </div>
     
        </>
    )
}
export default Deal_Term_Insert_data;
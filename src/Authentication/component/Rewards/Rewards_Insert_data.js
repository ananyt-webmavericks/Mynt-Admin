import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"

const Rewards_Insert_data = () =>{
  const[id , setId] = useState();  
  const[campaign_id , setCampaignid] = useState();
  const[amount, setAmount] = useState();
  const[product , setProduct] = useState();
  const[discount , setDiscount] = useState();
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
  const updateAmount = (e) =>{
    setAmount(e.target.value)
  }
  const updateProduct = (e) =>{
    setProduct(e.target.value)
  }
  const updateDiscount = (e) =>{
    setDiscount(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }

  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && campaign_id && amount && product && discount && create && Update  )
    
    {
    
           await axios.post(`${Base_url}/api/rewards/manage`, {

            
            id : id,
            
            campaign_id : campaign_id,
            
            amount : amount,
            
            product_name : product,

            discounted_price : discount,
            
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
    
    
    navigator("/home/rewards")
    
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

              <label for="exampleInputName" className="form-label">Campaign id </label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/>

              <label for="exampleInputRollnum" className="form-label">Amount</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={amount} onChange={updateAmount}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Product Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={product} onChange={updateProduct}/>

              <label for="exampleInputRegistrationnum" className="form-label">Discounted Price</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={discount} onChange={updateDiscount}/>
            
            
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
export default Rewards_Insert_data;
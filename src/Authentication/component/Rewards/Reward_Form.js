import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';

const Reward_Form = () =>{
  const[campaign_id , setCampaignid] = useState();
  const[amount, setAmount] = useState();
  const[product , setProduct] = useState();
  const[create,setCreate] = useState();
  const[Update,setUpdate] = useState();

  const updateCampaign = (e) =>{
    setCampaignid(e.target.value)
  }
  const updateAmount = (e) =>{
    setAmount(e.target.value)
  }
  const updateProduct = (e) =>{
    setProduct(e.target.value)
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

              <label for="exampleInputName" className="form-label">Campaign id </label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/>

              <label for="exampleInputRollnum" className="form-label">Amount</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={amount} onChange={updateAmount}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Product Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={product} onChange={updateProduct}/>
            
            
              <label for="exampleInputBranch" className="form-label">Created at</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={create} onChange={updateCreate}/>
            
            
              <label for="exampleInputpassword" className="form-label">Updated at</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={Update} onChange={update}/>
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Reward_Form;
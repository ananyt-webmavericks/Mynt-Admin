import React, { useState ,useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Deal_Term_Insert_data = () =>{
  const location1 = useLocation()
  const[campaign_id , setCampaign_id] = useState();
  const[security_type, setSecurity_type] = useState();
  const[discount , setDiscount] = useState();
  const[valuation_cap , setValuation_cap] = useState();
  const[min_subscription,setMin_subscription] = useState();
  const[target,setTarget] = useState();
  const[end_date , setEnd_date] = useState();
  const[items , setItems] =useState([]); 
  const[items2 , setItems2] =useState([]); 

  const navigator = useNavigate();
  
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


  const add =(x)=>{
    console.log(x);
    setCampaign_id(x);
  }

  const add1 =(x)=>{
    console.log(x);
    setSecurity_type(x);
  }
  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/deal_type/manage`);
          console.log(response.data)
          setItems(response.data)
          return response.data;
      }
      catch (error) {
          if (error) {
              console.log(error)
          }
          return error;
      }
}
getUploadedDocs();
const getUploaded = async () => {
  
  try {
      const response = await authAxios.get(`${Base_url}/api/campaign/manage`);
      console.log(response.data)
      setItems2(response.data)
      return response.data;
  }
  catch (error) {
      if (error) {
          console.log(error)
      }
      return error;
  }
}
getUploaded();
},[])

  const gotoAdd = async(e) => {

    e.preventDefault();
    

    
      const values= {     
            
        campaign_id : +campaign_id,
        
        security_type_id : +security_type,
        
        discount : discount,

        valuation_cap : valuation_cap,

        min_subscription : min_subscription,

        target : target,

        end_date : end_date,
        
        }
        console.log(values);
           await authAxios.post(`${Base_url}/api/deal_terms/manage`,values); 
    navigator("/home/deal_term")
    }
    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div>
        </div>
        <div className='row'>
          <div className='col-7' style={{marginTop:"130px", marginLeft:"450px", borderRadius:"20px", backgroundColor:"#BACDDB"}}>
          <form  style={{padding:"40px"}}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Add  Deal Term Data</h1>

             
              <label for="exampleInputName" className="form-label">Campaign Id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected  className="active">Select campaign id</option>
                {
                  items2 && items2.map((item) =>{
                    return (
                      <option onClick={()=>{add(item.id)}} >{item.id}</option>
                    )
                  })
                }
                </select>
              </div>
              <label for="exampleInputName" className="form-label">Security Type Id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected  className="active">Select deal type id</option>
                {
                  items && items.map((item) =>{
                    return (
                      <option onClick={()=>{add1(item.id)}} >{item.id}</option>
                    )
                  })
                }
                </select>
              </div>
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

            <button type="submit" className="btn btn-success" style={{marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
        </form>
        </div>
        </div>
        </>
    )
}
export default Deal_Term_Insert_data;
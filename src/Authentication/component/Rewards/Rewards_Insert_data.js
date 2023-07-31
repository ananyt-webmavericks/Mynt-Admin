import React, { useState , useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Rewards_Insert_data = () =>{
  const[campaign_id , setCampaignid] = useState();
  const[amount, setAmount] = useState();
  const[product , setProduct] = useState();
  const[discount , setDiscount] = useState();
  const[items , setItems] =useState([]);  
  const[items2 , setItems2] =useState([]); 

  const navigator = useNavigate();
  const updateAmount = (e) =>{
    setAmount(e.target.value)
  }
  const updateProduct = (e) =>{
    setProduct(e.target.value)
  }
  const updateDiscount = (e) =>{
    setDiscount(e.target.value)
  }
  const updateItems = (e) =>{
    setItems(e.target.value)
  }

  const add =(x)=>{
    console.log(x);
    setCampaignid(x);
  }
  
  useEffect(()=>{
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/company/manage`);
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
      const response = await authAxios.get(`${Base_url}/api/campaign/manage/admin`);
      // console.log(response.data)
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
    
           await authAxios.post(`${Base_url}/api/rewards/manage`, {

            
            // id : id,
            
            campaign_id : campaign_id,
            
            amount : amount,
            
            product_name : product,

            discounted_price : discount,
             
            },
            )
    
    navigator("/home/rewards")
    
    }
    return(
      <>
       <div className='container-fluid'>
        {/* <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div> */}
        <div className="row justify-content-center mb-5">
        <div style={{borderRadius: "20px",backgroundColor: "#BACDDB",}}>
          <form style={{padding:"50px",borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"#070A52",marginBottom:"20px"}}>Add Reward Data</h1>
               
               <label for="exampleInputName" className="form-label">Campaign Id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{add(e.target.value)}} value={campaign_id}>
                <option selected  className="active">Select campaign id</option>
                {
                  items2 && items2.map((item) =>{
                    return (
                      <option 
                      // onClick={()=>{add(item.id)}}
                      value={item.id} 
                      >{item.id}</option>
                      )
                    })
                  }
                </select>
              </div>

              <label for="exampleInputRollnum" className="form-label">Amount</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={amount} onChange={updateAmount}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Product Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={product} onChange={updateProduct}/>

              <label for="exampleInputRegistrationnum" className="form-label">Discounted Price</label>
              <input  type="number" className="form-control" id="exampleInputeRegistrationnum" value={discount} onChange={updateDiscount}/>
          
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
                  </div>
  </>
    )
}
export default Rewards_Insert_data;
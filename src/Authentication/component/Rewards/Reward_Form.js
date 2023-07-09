import React, { useState ,useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Reward_Form = () =>{
  const location1 = useLocation();
  const[campaign_id , setCampaignid] = useState();
  const[discounted_price, setdiscounted_price] = useState(location1.state.bio.discounted_price);
  const[product , setProduct] = useState(location1.state.bio.product_name);
  const[items2 , setItems2] =useState([]); 
 
  const updatediscounted_price = (e) =>{
    setdiscounted_price(e.target.value)
  }
  const updateProduct = (e) =>{
    setProduct(e.target.value)
  }
  const navigator = useNavigate();

  const add =(x)=>{
    console.log(x);
    setCampaignid(x);
  }

  useEffect(()=>{
    const getUploaded = async () => {  
      try {
          const response = await authAxios.get(`${Base_url}/api/campaign/manage`);
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


  const gotoAdd = async() => {
    
    const values = {           
       
      reward_id : location1.state.bio.id,

       campaign_id : +campaign_id, 
       
       discounted_price : +discounted_price,

       product_name : product,

       campaign_id : +campaign_id,
       }
       
      await authAxios.patch(`${Base_url}/api/rewards/manage`,values);
     navigator("/home/rewards")
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
          <form style={{padding:"50px",borderRadius:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52",marginBottom:"20px"}}>Update Reward Data</h1>
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


              <label for="exampleInputRollnum" className="form-label">Discounted Price</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={discounted_price} onChange={updatediscounted_price}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Product Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={product} onChange={updateProduct}/>
            
              <button type="submit" className="btn btn-success" style={{marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>  
  </>
  )
}
export default Reward_Form;
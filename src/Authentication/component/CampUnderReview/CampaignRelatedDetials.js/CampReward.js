import React, { useEffect } from 'react';
import Dashboard from '../../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from '../../Base_url';
import { authAxios } from '../../../../Services/auth.service';
import { useState } from 'react';

const CampReward = () =>{
  const location1 = useLocation();
  const[discounted_price, setdiscounted_price] = useState();
  const[product , setProduct] = useState();
  const [reward_id, setReward_id] = useState()
  const [ind, setInd] = useState() 
  const[amount, setAmount] = useState(location1.state.bio.amount);

 
  const updatediscounted_price = (e) =>{
    setdiscounted_price(e.target.value)
  }
  const updateProduct = (e) =>{
    setProduct(e.target.value)
  }
  const updateAmount = (e) =>{
    setAmount(e.target.value)
  }
  const navigator = useNavigate();


  useEffect(()=>{
    const getUploaded = async () => {  
        setInd(location1.state.bio ? location1.state.bio.rewards.filter( (val) => {
            return (val.campaign_id === location1.state.bio.id )
        }):[])
    }
    getUploaded();
    },[])


  const gotoAdd = async() => {
    
    const values = {           
       
      reward_id : reward_id,

       campaign_id : location1.state.bio.id, 
       
       discounted_price : discounted_price,

       product_name : product,
       }
       
      await authAxios.patch(`${Base_url}/api/rewards/manage`,values);
      navigator(`/home/under-update/${location1.state.bio.id}`)
    }

    const add1 = (x) => {
      setReward_id(x);
      const rd = ind?.find(i => i.id == x) ?? {};
      setdiscounted_price(rd?.discounted_price ?? '');
      setProduct(rd?.product_name ?? '');
      // setAmou(rd?.product ?? '');
    } 

    return(
      <>
       <div className='container-fluid'>
        {/* <div className='row'>
            <Dashboard 
            />
        </div> */}
        <div className='row'>
        <div style={{margin:'auto',backgroundColor:"#BACDDB"}}>
          <form style={{padding:"50px",borderRadius:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52",marginBottom:"20px"}}>Update Reward Data</h1>

              <label for="exampleInputName" className="form-label">Reward Id</label>
              <div className="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" value={reward_id} onChange={(e)=>{add1(e.target.value)}}>
                    <option selected  className="active">Select Reward ID</option>
                    {
                      ind && ind.map((item) =>{
                        return (
                          <option 
                          // onClick={()=>{add1(item.id)}} 
                          value={item.id}
                          >{item.id}</option>
                          )
                        })
                      }
                  </select>
                </div>

                <label for="exampleInputRollnum" className="form-label">Amount</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={amount} onChange={updateAmount}/>
            

              <label for="exampleInputRollnum" className="form-label">Discounted Price</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={discounted_price} onChange={updatediscounted_price}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Product Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={product} onChange={updateProduct}/>
            
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
          </form>
        </div>
        </div>  
                      </div>
  </>
  )
}
export default CampReward;
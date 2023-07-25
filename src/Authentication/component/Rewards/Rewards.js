import React, { useState, useEffect } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Base_url from "../Base_url";
import { authAxios } from '../../../Services/auth.service';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "../../Comp_css/Component.css";


function Rewards() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (item){
   navigator(`/rewards/${item.id}`, {state : {bio : item}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/rewards/manage`);
          // console.log(response.data)
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
},[])

const goToAdd = () =>{
  navigator("/home/rewards/insert");
}

  return (
    <> 
      <div className='container-fluid'>
            {/* <div className='row'>
              
                <Dashboard 
                 f1 = {true}
                 f2 = {false}
                 />
              
            </div> */}
        <div className='row'>
        <div className="d-flex justify-content-end">
          <Button variant="contained" className="addIcon" style={{marginBottom:"1%"}} onClick={goToAdd} >Add Rewards<AddIcon/></Button>
          </div>
          <div style={{ overflowX: "auto", height: "550px" }}>

            <table class="table table-hover table-bordered" style={{border:"2px solid"}}>
                <thead className='thead'>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Campaign Id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Discounted Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                          <td scope="col-2" >{item.id}</td>
                          <td scope="col-2" >{item.campaign_id}</td>
                          <td scope="col-2" >{item.amount}</td>
                          <td scope="col-2" >{item.product_name}</td>
                          <td scope="col-2" >{item.discounted_price}</td>
                          <td scope="col-2" >  <button className="btn btn1">
                                    <CreateIcon 
                                  onClick={() => {update(item)}} />
                            </button></td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
      </div>
                  </div>
    </>
  );
}
export default Rewards;
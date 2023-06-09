import React, { useState , useEffect } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Base_url from "../Base_url";
import { authAxios } from '../../../Services/auth.service';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "../../Comp_css/Component.css";


function FAQs() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (item){
   navigator(`/faqs/${item.id}`, {state : {bio : item}})
  }
  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/faqs/manage`);
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
},[])

const goToAdd = () =>{
  navigator("/home/faqs/insert");
}
  return (
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
          <div className='col-8' style={{marginTop:"150px", marginLeft:"350px"}}>
          <Button variant="contained" className="addIcon" style={{marginBottom:"1%"}} onClick={goToAdd} >Add Faqs<AddIcon/></Button>
            <table class="table table-hover table-bordered" style={{border:"2px solid"}}>
                <thead className='thead'>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Campaign Id</th>
                    <th scope="col">Question</th>
                    <th scope="col">Answer</th>
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
                          <td scope="col-2" >{item.question}</td>
                          <td scope="col-2" >{item.answer}</td>
                          <td scope="col-2" > <button className="btn btn1">
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
    </>
  );
}
export default FAQs;
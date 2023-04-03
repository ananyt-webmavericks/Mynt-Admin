import React,{useEffect, useState} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import "./Deal_term.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


function Deal_term() {
  const navigator = useNavigate();
  const [items, setItems] = useState();
  function update (item){
   navigator("/deal_term/deal_term_form", {state : {bio : item}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/deal_terms/manage`,  {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
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
})

const goToAdd = () =>{
  navigator("/home/deal_term/insert");
}


  return (
    <>

      
        <div className='container-fluid'>
            <div className='row'>
                <Dashboard />     
            </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"280px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Deal_Term</button>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col">Id</th>
                    <th scope="col">Campaign Id </th>
                    <th scope="col">Security Type</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Valuation Cap</th>
                    <th scope="col">Min Subscription</th>
                    <th scope="col">Target</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Action</th>
                    
        
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                          <td scope="col-2" ><CheckBoxOutlineBlankIcon /></td>
                          <td scope="col">{item.id} </td>
                          <td scope="col">{item.campaign_id}  </td>
                          <td scope="col">{item.security_id} </td>
                          <td scope="col">{item.discount} </td>
                          <td scope="col">{item.valuation_cap} </td>
                          <td scope="col">{item.min_subscription} </td>
                          <td scope="col">{item.target} </td>
                          <td scope="col">{item.end_date} </td>
                          <td scope="col">{item.created_at} </td>
                          <td scope="col">{item.updated_at} </td>
                          <td scope="col-2" ><CreateIcon onClick={() => {update(item)}} /></td>
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

export default Deal_term;
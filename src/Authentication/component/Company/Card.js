import React , {useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


const Card = () =>{
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (){
   navigator("/company/company_form")
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/company/manage`,  {
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
  navigator("/home/company/insert");
}


      return(
        <>
           <div className='container-fluid'>
            <div className='row'>
              
                <Dashboard />
              
            </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"350px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Company</button>
            <table class="table">
                <thead>
                  <tr>
                              <th scope="col-2"><CheckBoxOutlineBlankIcon /></th>
                              <th scope="col-2">id</th>
                              <th scope="col-2">user_id</th>
                              <th scope="col-2">company_logo</th>
                              <th scope="col-2">company_name</th>
                              <th scope="col-2">company_linked_in_profile</th>
                              <th scope="col-2">website_url</th>
                              <th scope="col-2">previous_funding</th>
                              <th scope="col-2">product_description</th>
                              <th scope="col-2">traction_description</th>
                              <th scope="col-2">revenue</th>
                              <th scope="col-2">reason_for_community_round</th>
                              <th scope="col-2">reason_for_mynt</th>
                              <th scope="col-2">existing_commitments</th>
                              <th scope="col-2">company_pitch</th>
                              <th scope="col-2">country</th>
                              <th scope="col-2">state</th>
                              <th scope="col-2">city</th>
                              <th scope="col-2">pincode</th>
                              <th scope="col-2">company_address</th>
                              <th scope="col-2">facebook_link</th>
                              <th scope="col-2">instagram_link</th>
                              <th scope="col-2">legal_name</th>
                              <th scope="col-2">cin</th>
                              <th scope="col-2">date_of_incorporation</th>
                              <th scope="col-2">incorporation_type</th>
                              <th scope="col-2">sector</th>
                              <th scope="col-2">invested_so_far</th>
                              <th scope="col-2">number_of_employees</th>
                              <th scope="col-2">created_at</th>
                              <th scope="col-2">updated_at</th>
                              <th scope="col-2">Action</th> 
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                              <th scope="col-2"><CheckBoxOutlineBlankIcon /></th>
                                  <td scope="col-2">{item.id}</td>
                                  <td scope="col-2">{item.user_id}</td>
                                  <td scope="col-2">{item.company_logo}</td>
                                  <td scope="col-2">{item.company_name}</td>
                                  <td scope="col-2">{item.company_linked_in_profile}</td>
                                  <td scope="col-2">{item.website_url}</td>
                                  <td scope="col-2">{item.previous_funding}</td>
                                  <td scope="col-2">{item.product_description}</td>
                                  <td scope="col-2">{item.traction_description}</td>
                                  <td scope="col-2">{item.revenue}</td>
                                  <td scope="col-2">{item.reason_for_community_round}</td>
                                  <td scope="col-2">{item.reason_for_mynt}</td>
                                  <td scope="col-2">{item.existing_commitments}</td>
                                  <td scope="col-2">{item.company_pitch}</td>
                                  <td scope="col-2">{item.country}</td>
                                  <td scope="col-2">{item.state}</td>
                                  <td scope="col-2">{item.city}</td>
                                  <td scope="col-2">{item.pincode}</td>
                                  <td scope="col-2">{item.company_address}</td>
                                  <td scope="col-2">{item.facebook_link}</td>
                                  <td scope="col-2">{item.instagram_link}</td>
                                  <td scope="col-2">{item.legal_name}</td>
                                  <td scope="col-2">{item.cin}</td>
                                  <td scope="col-2">{item.date_of_incorporation}</td>
                                  <td scope="col-2">{item.incorporation_type}</td>
                                  <td scope="col-2">{item.sector}</td>
                                  <td scope="col-2">{item.invested_so_far}</td>
                                  <td scope="col-2">{item.number_of_employees}</td>
                                  <td scope="col-2">{item.created_at}</td>
                                  <td scope="col-2">{item.updated_at}</td>
                                  <td scope="col-2">{item.Action}</td> 
                                  <td scope="col-2" ><CreateIcon onClick={update} /></td>
                              
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
      )
}
export default Card;
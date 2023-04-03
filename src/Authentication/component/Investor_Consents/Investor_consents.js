import React, {useState , useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


function Investor_consents() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (){
   navigator("/investor_consents/investor_consents_Form")
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/investor-consent/manage`,  {
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
  navigator("/home/rewards/insert");
}

  return (
    <> 
      <div className='container-fluid'>
            <div className='row'>
              
                <Dashboard />
              
            </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"300px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Investor-consent</button>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col">Id</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Risk Consent</th>
                    <th scope="col">Limited Transfer Consent</th>
                    <th scope="col">Diversification Consent</th>
                    <th scope="col">Cancellation Consent</th>
                    <th scope="col">Research Consent</th>
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
                          <td scope="col-2" >{item.id}</td>
                          <td scope="col-2" >{item.user_id}</td>
                          <td scope="col-2" >{item.risk_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.limited_transfer_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.diversification_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.cancellation_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.research_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.created_at}</td>
                          <td scope="col-2" >{item.updated_at}</td>
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
  );
}
export default Investor_consents;
import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import "./Deal_term.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Base_url from "../Base_url";
import { authAxios } from '../../../Services/auth.service';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "../../Comp_css/Component.css";

function Deal_term() {
  const navigator = useNavigate();
  const [items, setItems] = useState();
  function update(item) {
    navigator(`/deal_term/${item.id}`, { state: { bio: item } })
  }

  useEffect(() => {
    const getUploadedDocs = async () => {

      try {
        const response = await authAxios.get(`${Base_url}/api/deal_terms/manage`);
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
  }, [])

  const goToAdd = () => {
    navigator("/home/deal_term/insert");
  }
  return (
    <>
      <div className='container-fluid p-4'>
        {/* <div className='row'>
                <Dashboard 
                 f1 = {true}
                 f2 = {false}
                 />     
            </div> */}
        <div className='row'>
          <div className='d-flex justify-content-end'>
            <Button variant="contained" className="addIcon" style={{ marginBottom: "1%" }} onClick={goToAdd} >Add Deal Term<AddIcon /></Button>
            </div>
            <div style={{ overflowX: "auto", height: "550px" }}>
            <table class="table table-hover table-bordered" style={{ border: "2px solid" }}>
              <thead className='thead'>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Campaign Id </th>
                  <th scope="col">Security Type</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Valuation Cap</th>
                  <th scope="col">Min Subscription</th>
                  <th scope="col">Target</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  items && items.map((item) => {
                    return (
                      <>
                        <tr>
                          <td scope="col">{item.id} </td>
                          <td scope="col">{item.campaign_id.id}  </td>
                          <td scope="col">{item.security_type.deal_name} </td>
                          <td scope="col">{item.discount} </td>
                          <td scope="col">{item.valuation_cap} </td>
                          <td scope="col">{item.min_subscription} </td>
                          <td scope="col">{item.target} </td>
                          <td scope="col">{item.end_date} </td>
                          <td scope="col-2" >  <button className="btn btn1">
                            <CreateIcon
                              onClick={() => { update(item) }} />
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
export default Deal_term;
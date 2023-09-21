import React, { useEffect, useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import "./Interest.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "../../Comp_css/Component.css";
import moment from "moment";
function Interest() {
  const navigator = useNavigate();
  const [items, setItems] = useState();
  function update(item) {
    navigator(`/interest/${item.id}`, { state: { bio: item } });
  }

  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(
          `${Base_url}/api/interest/admin-get-all-interests`
        );
        console.log(response.data);
        setItems(response.data);
        return response.data;
      } catch (error) {
        if (error) {
          console.log(error);
        }
        return error;
      }
    };
    getUploadedDocs();
  }, []);

  const goToAdd = () => {
    navigator("/home/interest_insert_data");
  };
  return (
    <>
      <div className="container-fluid p-4">
        {/* <div className='row'>
                <Dashboard 
                 f1 = {true}
                 f2 = {false}
                 />     
            </div> */}
        <div className="row">
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              className="addIcon"
              style={{ marginBottom: "1%" }}
              onClick={goToAdd}
            >
              Add Interest Data
              <AddIcon />
            </Button>
          </div>
          <div style={{ overflowX: "auto", height: "550px" }}>
            <table
              class="table table-hover table-bordered"
              style={{ border: "2px solid" }}
            >
              <thead className="thead">
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Campaign Id </th>
                  <th scope="col">Investor Id </th>
                  <th scope="col">Investor First Name</th>
                  <th scope="col">Investor Last Name</th>
                  <th scope="col">Investor mobile</th>
                  <th scope="col">Investor email </th>
                  <th scope="col">Amount</th>
                  <th scope="col">Applied date</th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item) => {
                    return (
                      <>
                        <tr>
                          <td scope="col">{item.company_name} </td>
                          <td scope="col">{item.campaign_id} </td>
                          <td scope="col">{item.investor_id} </td>
                          <td scope="col">{item.investor_first_name} </td>
                          <td scope="col">{item.investor_last_name} </td>
                          <td scope="col">{item.investor_mobile_number} </td>
                          <td scope="col">{item.investor_email} </td>
                          <td scope="col">{item.amount} </td>
                          <td scope="col">
                            {moment(item.applied_date).format("Do MMMM YYYY")}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Interest;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../../Dashboard/Dashboard";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "../../Comp_css/Component.css";

const Card = () => {
  const navigator = useNavigate();
  const [items, setItems] = useState([]);
  function update(item) {
    navigator(`/company/${item.id}`, { state: { bio: item } });
  }
  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(`${Base_url}/api/company/manage`);
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
    navigator("/home/company/insert");
  };
  return (
    <>
      <div className="container-fluid p-4">
        {/* <div className="row">
          <Dashboard f1={true} f2={false} />
        </div> */}

        <div className="row">
          <div
            className="d-flex justify-content-end">
            <Button
              variant="contained"
              className="addIcon"
              style={{ marginBottom: "1%" }}
              onClick={goToAdd}
            >
              Add Company
              <AddIcon />
            </Button>
          </div>
          <div style={{ overflowX: "auto", height: "550px" }} >
            <table
              class="table table-hover table-bordered"
              style={{ border: "2px solid" }}
            >
              <thead className="thead">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">User Id</th>
                  <th scope="col">Company Status</th>
                  <th scope="col">Company Logo</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Company Linked In Profile</th>
                  <th scope="col">Website Url</th>
                  <th scope="col">Previous Funding</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Traction Description</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Reason For Community Round</th>
                  <th scope="col">Reason For Mynt</th>
                  <th scope="col">Existing Commitments</th>
                  <th scope="col">Company Pitch</th>
                  <th scope="col">Country</th>
                  <th scope="col">State</th>
                  <th scope="col">City</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">Company Address</th>
                  <th scope="col">Facebook Link</th>
                  <th scope="col">Instagram Link</th>
                  <th scope="col">Legal Name</th>
                  <th scope="col">Cin</th>
                  <th scope="col">Date Of Incorporation</th>
                  <th scope="col">Incorporation Type</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Invested So Far</th>
                  <th scope="col">Number Of Employees</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item) => {
                    return (
                      <>
                        <tr>
                          <td scope="col">{item.id}</td>
                          <td scope="col">{item.user_id}</td>
                          <td scope="col">{item.status}</td>
                          <td scope="col">{item.company_logo}</td>
                          <td scope="col">{item.company_name}</td>
                          <td scope="col">{item.company_linked_in_profile}</td>
                          <td scope="col">{item.website_url}</td>
                          <td scope="col">{item.previous_funding}</td>
                          <td scope="col">{item.product_description}</td>
                          <td scope="col">{item.traction_description}</td>
                          <td scope="col">{item.revenue}</td>
                          <td scope="col">{item.reason_for_community_round}</td>
                          <td scope="col">{item.reason_for_mynt}</td>
                          <td scope="col">{item.existing_commitments}</td>
                          <td scope="col">{item.company_pitch}</td>
                          <td scope="col">{item.country}</td>
                          <td scope="col">{item.state}</td>
                          <td scope="col">{item.city}</td>
                          <td scope="col">{item.pincode}</td>
                          <td scope="col">{item.company_address}</td>
                          <td scope="col">{item.facebook_link}</td>
                          <td scope="col">{item.instagram_link}</td>
                          <td scope="col">{item.legal_name}</td>
                          <td scope="col">{item.cin}</td>
                          <td scope="col">{item.date_of_incorporation}</td>
                          <td scope="col">{item.incorporation_type}</td>
                          <td scope="col">{item.sector}</td>
                          <td scope="col">{item.invested_so_far}</td>
                          <td scope="col">{item.number_of_employees}</td>
                          <td scope="col-2">
                            {" "}
                            <button className="btn btn1">
                              <CreateIcon
                                onClick={() => {
                                  update(item);
                                }}
                              />
                            </button>
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
};
export default Card;

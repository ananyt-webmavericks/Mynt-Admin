import React, { useState, useEffect } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import "../../Comp_css/Component.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

function Campaign() {
  const navigator = useNavigate();
  const [items, setItems] = useState([]);
  function update(item) {
    navigator(`/campaign/${item.id}`, { state: { bio: item } });
  }

  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(
          `${Base_url}/api/campaign/manage/admin`
        );
        // console.log(response.data)
        setItems(response.data);
        // console.log(response.data)
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
    navigator("/home/campaign/insert");
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
              Add Campaign
              <AddIcon />
            </Button>
          </div>
          <div style={{ overflowX: "auto", height: "550px" }}>
            <table
              class="table table-hover table-bordered"
              style={{ border: "2px solid" }}
            >
              <thead className="thead">
                {/* style={{position:"fixed"}} */}
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Company Id</th>
                  <th scope="col">Status</th>
                  <th scope="col">Youtube Link</th>
                  <th scope="col">Ama Date</th>
                  <th scope="col">Ama Meet Link</th>
                  <th scope="col">Ama Youtube Video</th>
                  <th scope="col">Pitch</th>
                  <th scope="col">Total Investor</th>
                  <th scope="col">Total Raised</th>
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
                          <td scope="col">{item.company_id}</td>
                          <td scope="col">{item.status}</td>
                          <td scope="col">{item.youtube_link}</td>
                          <td scope="col">{item.ama_date}</td>
                          <td scope="col">{item.ama_meet_link}</td>
                          <td scope="col">{item.ama_youtube_video}</td>
                          <td scope="col">{item.pitch}</td>
                          <td scope="col">{item.total_investor}</td>
                          <td scope="col">{item.total_raised}</td>
                          <td scope="col-2">
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
}
export default Campaign;

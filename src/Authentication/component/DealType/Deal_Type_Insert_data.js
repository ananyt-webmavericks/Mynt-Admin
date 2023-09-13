import React, { useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Deal_Type_Insert_data = () => {
  const location1 = useLocation();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [post, setPost] = React.useState(null);
  const navigator = useNavigate();

  const updateId = (e) => {
    setId(e.target.value);
  };
  const updateName = (e) => {
    setName(e.target.value);
  };

  const back = () => {
    navigator("/home/campaign");
  };

  const gotoAdd = async (e) => {
    e.preventDefault();

    await authAxios
      .post(`${Base_url}/api/deal_type/manage`, {
        id: id,

        deal_name: name,
      })

      .then((response) => {
        setPost(response.data);
      });
    navigator("/home/deal_type");
  };

  return (
    <>
      <div className="container-fluid">
        {/* <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div> */}
        <div className="row justify-content-center mb-5">
          <div
            style={{
              borderRadius: "20px",
              backgroundColor: "#BACDDB",
            }}
          >
            <form style={{ padding: "50px" }}>
              <h1 style={{ textAlign: "center", color: "#070A52" }}>
                Add Deal Type Data
              </h1>

              <label for="exampleInputName" className="form-label">
                Deal Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={name}
                onChange={updateName}
              />

              <button
                type="submit"
                className="btn btn-success"
                style={{
                  marginTop: "30px",
                  backgroundColor: "#1a83ff",
                  marginRight: "20px",
                }}
                onClick={gotoAdd}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={back}
                className="btn btn-success"
                style={{ marginTop: "30px", backgroundColor: "#1a83ff" }}
              >
                Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Deal_Type_Insert_data;

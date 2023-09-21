import React, { useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Deal_Type_Form = () => {
  const location1 = useLocation();
  const [name, setName] = useState(location1.state.bio.deal_name);
  const [description, setDescription] = useState(
    location1.state.bio.deal_description
  );
  const [tagline, setTagline] = useState(location1.state.bio.deal_tagline);
  const navigator = useNavigate();

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  const updateTagline = (e) => {
    setTagline(e.target.value);
  };
  const back = () => {
    navigator("/home/deal_type");
  };

  const gotoAdd = async () => {
    const values = {
      deal_type_id: location1.state.bio.id,
      deal_name: name,
      deal_tagline: tagline,
      deal_description: description,
    };

    if(location1.state.bio.deal_name === name){
      delete values.deal_name
    }

    if(location1.state.bio.deal_description === description){
      delete values.deal_description
    }

    if(location1.state.bio.deal_tagline === tagline){
      delete values.deal_tagline
    }
    
    await authAxios.patch(`${Base_url}/api/deal_type/manage`, values);
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
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}>
            <form
              style={{ padding: "40px" }}
              onSubmit={(e) => {
                e.preventDefault();
                gotoAdd();
              }}
            >
              <h1 style={{ textAlign: "center", color: "#070A52" }}>
                Update Deal Type Data
              </h1>
              <label for="exampleInputName" className="form-label">
                Deal Name
              </label>
              <input
                type="text"
                defaultValue={name}
                className="form-control"
                id="exampleInputName"
                value={name}
                onChange={updateName}
              />
              <label for="exampleInputName" className="form-label">
                Deal Description
              </label>
              <input
                type="text"
                defaultValue={description}
                className="form-control"
                id="exampleInputName"
                value={description}
                onChange={updateDescription}
              />
              <label for="exampleInputName" className="form-label">
                Deal Tagline
              </label>
              <input
                type="text"
                defaultValue={tagline}
                className="form-control"
                id="exampleInputName"
                value={tagline}
                onChange={updateTagline}
              />
              <button
                type="submit"
                className="btn btn-success"
                style={{
                  marginTop: "30px",
                  backgroundColor: "#1a83ff",
                  marginRight: "20px",
                }}
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
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Deal_Type_Form;

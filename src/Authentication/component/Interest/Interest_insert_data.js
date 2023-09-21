import React, { useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Interest_insert_data = () => {
  const location1 = useLocation();
  const [user_id, setId] = useState();
  const [campaign_id, setCampaignId] = useState();
  const [company_name, setCampaignName] = useState();
  const [investor_first_name, setInvestorFirstName] = useState();
  const [investor_last_name, setInvestorLastName] = useState();
  const [investor_mobile_number, setMobileNumber] = useState();
  const [investor_email, setInvestorEmail] = useState();
  const [amount, setAmount] = useState();

  const [post, setPost] = React.useState(null);
  const navigator = useNavigate();
  const back = () => {
    navigator("/home/campaign");
  };
  const updateId = (e) => {
    setId(e.target.value);
  };
  const updateCampaignId = (e) => {
    setCampaignId(e.target.value);
  };
  const updateAmount = (e) => {
    setAmount(e.target.value);
  };
  const updateCompanyName = (e) => {
    setCampaignName(e.target.value);
  };
  const updateInvestorFirstName = (e) => {
    setInvestorFirstName(e.target.value);
  };
  const updateInvestorLastName = (e) => {
    setInvestorLastName(e.target.value);
  };
  const updateMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };
  const updateEmail = (e) => {
    setInvestorEmail(e.target.value);
  };

  const gotoAdd = async (e) => {
    e.preventDefault();

    await authAxios
      .post(`${Base_url}/api/interest/create-interest`, {
        user_id: user_id,
        campaign_id: campaign_id,
        company_name: company_name,
        investor_first_name: investor_first_name,
        investor_last_name: investor_last_name,
        investor_mobile_number: investor_mobile_number,
        investor_email: investor_email,
        amount: amount,
      })

      .then((response) => {
        setPost(response.data);
      });
    navigator("/home/interest");
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
                Add Interest Data
              </h1>

              <label for="exampleInputName" className="form-label">
                Investor Id
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={user_id}
                onChange={updateId}
              />
              <label for="exampleInputName" className="form-label">
                Campaign Id
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={campaign_id}
                onChange={updateCampaignId}
              />
              <label for="exampleInputName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={company_name}
                onChange={updateCompanyName}
              />
              <label for="exampleInputName" className="form-label">
                Investor First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={investor_first_name}
                onChange={updateInvestorFirstName}
              />
              <label for="exampleInputName" className="form-label">
                Investor Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={investor_last_name}
                onChange={updateInvestorLastName}
              />
              <label for="exampleInputName" className="form-label">
                Investor Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={investor_mobile_number}
                onChange={updateMobileNumber}
              />
              <label for="exampleInputName" className="form-label">
                Investor Email
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={amount}
                onChange={updateAmount}
              />
              <label for="exampleInputName" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputName"
                value={investor_email}
                onChange={updateEmail}
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
export default Interest_insert_data;

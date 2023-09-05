import React, { useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import Base_url from "../Base_url";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authAxios } from "../../../Services/auth.service";

const Investor_Consent_Form = () => {
  const location1 = useLocation();
  const navigator = useNavigate();
  const [risk_consent, setrisk_consent] = useState(
    location1.state.bio.risk_consent ? "true" : "false"
  );
  const [limited_transfer_consent, setlimited_transfer_consent] = useState(
    location1.state.bio.limited_transfer_consent ? "true" : "false"
  );
  const [diversification_consent, setdiversification_consent] = useState(
    location1.state.bio.diversification_consent ? "true" : "false"
  );
  const [cancellation_consent, setcancellation_consent] = useState(
    location1.state.bio.cancellation_consent ? "true" : "false"
  );
  const [research_consent, setresearch_consent] = useState(
    location1.state.bio.research_consent ? "true" : "false"
  );

  const back = () => {
    navigator("/home/investor_consents");
  };

  const updaterisk_consent = (e) => {
    setrisk_consent(e.target.value);
  };
  const updatelimited_transfer_consent = (e) => {
    setlimited_transfer_consent(e.target.value);
  };
  const updatediversification_consent = (e) => {
    setdiversification_consent(e.target.value);
  };
  const updatecancellation_consent = (e) => {
    setcancellation_consent(e.target.value);
  };
  const updateresearch_consent = (e) => {
    setresearch_consent(e.target.value);
  };

  const gotoAdd = async () => {
    await authAxios.patch(`${Base_url}/api/investor-consent/manage`, {
      user_id: location1.state.bio.user_id,

      risk_consent: risk_consent === "true" ? true : false,

      limited_transfer_consent:
        limited_transfer_consent === "true" ? true : false,

      diversification_consent:
        diversification_consent === "true" ? true : false,

      cancellation_consent: cancellation_consent === "true" ? true : false,

      research_consent: research_consent === "true" ? true : false,
    });

    navigator("/home/investor_consents");
  };

  return (
    <>
      <div className="container-fluid">
        {/* <div className='row'>
          
            <Dashboard 
            f1 = {false}
            f2 = {true}
            />
          
        </div> */}
        <div className="row justify-content-center mb-5">
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}>
            <form
              style={{ padding: "40px", borderRadius: "20px" }}
              onSubmit={(e) => {
                e.preventDefault();
                gotoAdd();
              }}
            >
              <h1 style={{ textAlign: "center", color: "#070A52" }}>
                Update Investor Consents
              </h1>
              <label for="exampleInputName" className="form-label">
                Risk Consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updaterisk_consent}
                  value={risk_consent}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
              <label for="exampleInputRollnum" className="form-label">
                Limited Transfer Consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updatelimited_transfer_consent}
                  value={limited_transfer_consent}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
              <label for="exampleInputRegistrationnum" className="form-label">
                Diversification consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updatediversification_consent}
                  value={diversification_consent}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
              <label for="exampleInputBranch" className="form-label">
                Cancellation consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updatecancellation_consent}
                  value={cancellation_consent}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
              <label for="exampleInputpassword" className="form-label">
                Research consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updateresearch_consent}
                  value={research_consent}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
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
export default Investor_Consent_Form;

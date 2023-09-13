import React, { useState, useEffect } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Investor_Consents_Insert_data = () => {
  const [user_id, setUser_id] = useState();
  const [risk, setRisk] = useState();
  const [limited, setLimited] = useState();
  const [diversification, setDiversification] = useState();
  const [cancel, setCancel] = useState();
  const [research, setResearch] = useState();
  const [items, setItems] = useState([]);

  const navigator = useNavigate();

  const back = () => {
    navigator("/home/campaign");
  };

  const updateRisk = (e) => {
    setRisk(e.target.value);
  };
  const updateLimited = (e) => {
    setLimited(e.target.value);
  };
  const updateDiversification = (e) => {
    setDiversification(e.target.value);
  };
  const updateCancel = (e) => {
    setCancel(e.target.value);
  };
  const updateResearch = (e) => {
    setResearch(e.target.value);
  };

  const add = (x) => {
    console.log(x);
    setUser_id(x);
  };

  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(`${Base_url}/api/users/manage`);
        // console.log(response.data)
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

  const gotoAdd = async () => {
    await authAxios.post(`${Base_url}/api/investor-consent/manage`, {
      user_id: Number(user_id),

      risk_consent: risk === "true" ? true : false,

      limited_transfer_consent: limited === "true" ? true : false,

      diversification_consent: diversification === "true" ? true : false,

      cancellation_consent: cancel === "true" ? true : false,

      research_consent: research === "true" ? true : false,
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
              style={{ padding: "30px", borderRadius: "20px" }}
              onSubmit={(e) => {
                e.preventDefault();
                gotoAdd();
              }}
            >
              <h1 style={{ textAlign: "center", color: "#070A52" }}>
                Add Investor Consents Data
              </h1>

              <label className="form-label">User ID</label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={(e) => {
                    add(e.target.value);
                  }}
                  value={user_id}
                >
                  <option selected className="active">
                    Select user id
                  </option>
                  {items &&
                    items.map((item) => {
                      return (
                        <option
                          //  onClick={()=>{add(item.id)}}
                          value={item.id}
                        >
                          {item.id}
                        </option>
                      );
                    })}
                </select>
              </div>

              <label className="form-label">Risk Consent</label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updateRisk}
                  value={risk}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>

              <label for="exampleInputRegistrationnum" className="form-label">
                Limited Transfer Consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updateLimited}
                  value={limited}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>

              <label for="exampleInputRegistrationnum" className="form-label">
                Diversification Transfer Consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updateDiversification}
                  value={diversification}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>

              <label for="exampleInputRollnum" className="form-label">
                Cancellation Consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>

              <label for="exampleInputRollnum" className="form-label">
                Research Consent
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updateResearch}
                  value={research}
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Investor_Consents_Insert_data;

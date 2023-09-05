import React, { useState } from "react";
// import Dashboard from "../../Dashboard/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../component/Base_url";
import { authAxios } from "../../Services/auth.service";

const PaymentForm = () => {
  const location1 = useLocation();
  const [transaction_id, setTransaction_id] = useState(
    location1.state.bio.transaction_id
  );

  const [status, setStatus] = useState(location1.state.bio.status);
  const navigator = useNavigate();

  const updateTransaction_id = (e) => {
    setTransaction_id(e.target.value);
  };

  const updateStatus = (e) => {
    setStatus(e.target.value);
  };

  const back = () => {
    navigator("/home/payments");
  };

  const gotoAdd = async () => {
    const values = {
      transaction_id: transaction_id,
      status: status,
    };

    await authAxios.patch(
      `${Base_url}/api/payment/update-offline-payment/admin/${location1.state.bio.id}`,
      values
    );
    navigator("/home/payments");
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
                Update Payment Mode
              </h1>
              <label for="exampleInputName" className="form-label">
                Transaction ID
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                disabled
                value={transaction_id}
              />

              <label for="exampleInputName" className="form-label">
                Status
              </label>
              <select
                value={status}
                onChange={updateStatus}
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                <option selected className="active">
                  Select an Option
                </option>
                <option value={"COMPLETED"}>Completed</option>
                <option value={"PENDING"}>Pending</option>
              </select>
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
export default PaymentForm;

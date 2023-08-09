import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard/Dashboard";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import Base_url from "../component/Base_url";
import { authAxios } from "../../Services/auth.service";

function Payments() {
  const navigator = useNavigate();
  const [items, setItems] = useState();
  function update(item) {
    navigator(`/home/paymentForm/${item.id}`, { state: { bio: item } });
  }

  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(
          `${Base_url}/api/payment/get-all-payment-details`
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

  return (
    <>
      <div className="container-fluid">
        {/* <div className='row'>
            <Dashboard /> 
        </div> */}
      </div>
      <div className="row">
        <div className="d-flex justify-content-end"></div>
        <div style={{ overflowX: "auto", height: "550px" }}>
          <table
            class="table table-hover table-bordered"
            style={{ border: "2px solid" }}
          >
            <thead className="thead">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Campaign Id</th>
                <th scope="col">User Id</th>
                <th scope="col">Cashfree Order Id</th>
                <th scope="col">Mynt Order Id</th>
                <th scope="col">Amount</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Payment Session</th>
                <th scope="col">Payment Mode</th>
                <th scope="col">Transaction ID</th>
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
                        <td scope="col">{item.campaign_id}</td>
                        <td scope="col">{item.user_id}</td>
                        <td scope="col">{item.cashfree_order_id}</td>
                        <td scope="col">{item.mynt_order_id}</td>
                        <td scope="col">{item.amount}</td>
                        <td scope="col">{item.total_amount}</td>
                        <td scope="col">{item.status}</td>
                        <td scope="col">{item.payment_session_id}</td>
                        <td scope="col">{item.payment_mode}</td>
                        <td scope="col">{item.transaction_id}</td>
                        {item.status === "PENDING" &&
                        item.payment_mode === "OFFLINE" ? (
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
                        ) : null}
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Payments;

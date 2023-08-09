import React, { useState } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useNavigate, useLocation } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Investor_Kyc_Form = () => {
  const navigator = useNavigate();
  const location1 = useLocation();

  const [id, setId] = useState();
  const [pan_card, setpan_card] = useState(location1.state.bio.pan_card);
  const [birth_date, setbirth_date] = useState(location1.state.bio.birth_date);
  const [birth_month, setbirth_month] = useState(
    location1.state.bio.birth_month
  );
  const [birth_year, setbirth_year] = useState(location1.state.bio.birth_year);
  const [items, setItems] = useState([]);
  const [aadhaar_card_verified, setaadhaar_card_verify] = useState();
  const [bank_account_verified, setbank_account_verify] = useState();
  const [mobile_number_verified, setmobile_number_verified] = useState();
  const [pan_card_verified, setpan_card_verify] = useState();
  const [mobile_number, setmobile_number] = useState();
  const [country, setCountry] = useState(location1.state.bio.country);

  const [aadhaar_card_number, setaadhaar_card_number] = useState(
    location1.state.bio.aadhaar_card_number
  );
  const [address_line_1, setaddress_line_1] = useState(
    location1.state.bio.address_line_1
  );
  const [address_line_2, setaddress_line_2] = useState(
    location1.state.bio.address_line_2
  );
  const [city, setcity] = useState(location1.state.bio.city);
  const [state, setstate] = useState(location1.state.bio.state);
  const [pincode, setpincode] = useState(location1.state.bio.pincode);
  const [bank_name, setbank_name] = useState(location1.state.bio.bank_name);
  const [bank_account, setbank_account] = useState(
    location1.state.bio.bank_account
  );
  const [ifsc_code, setifsc_code] = useState(location1.state.bio.ifsc_code);

  const updatepan_card = (e) => {
    setpan_card(e.target.value);
  };

  const updateCountry = (e) => {
    setCountry(e.target.value);
  };

  const updateaadhaar_card_verify = (e) => {
    setaadhaar_card_verify(e.target.value);
  };
  const updatepan_card_verify = (e) => {
    setpan_card_verify(e.target.value);
  };
  const updatebank_account_verify = (e) => {
    setbank_account_verify(e.target.value);
  };
  const updatemobile_number_verify = (e) => {
    setmobile_number_verified(e.target.value);
  };
  const updatebirth_date = (e) => {
    setbirth_date(e.target.value);
  };
  const updatebirth_month = (e) => {
    setbirth_month(e.target.value);
  };
  const updatebirth_year = (e) => {
    setbirth_year(e.target.value);
  };

  const updateaadhaar_card_number = (e) => {
    setaadhaar_card_number(e.target.value);
  };
  const updateaddress_line_1 = (e) => {
    setaddress_line_1(e.target.value);
  };
  const updateaddress_line_2 = (e) => {
    setaddress_line_2(e.target.value);
  };
  const updatecity = (e) => {
    setcity(e.target.value);
  };
  const updatestate = (e) => {
    setstate(e.target.value);
  };
  const updatepincode = (e) => {
    setpincode(e.target.value);
  };
  const updatebank_name = (e) => {
    setbank_name(e.target.value);
  };
  const updatebank_account = (e) => {
    setbank_account(e.target.value);
  };
  const updateifsc_code = (e) => {
    setifsc_code(e.target.value);
  };

  const update_mobilenumber = (e) => {
    setmobile_number(e.target.value);
  };
  const gotoAdd = async () => {
    const values1 = {
      id: location1.state.bio.id,
      aadhaar_card_verified: aadhaar_card_verified == "true" ? true : "false",
      aadhaar_card_number: aadhaar_card_number,
      bank_account_verified: bank_account_verified == "true" ? true : "false",
      mobile_number: mobile_number,
      mobile_number_verified: mobile_number_verified == "true" ? true : "false",
      pan_card_verified: pan_card_verified == "true" ? true : "false",
      address_line_1: address_line_1,
      address_line_2: address_line_2,
      city: city,
      state: state,
      pincode: pincode,
      country: country,
      bank_name: bank_name,
      bank_account: bank_account,
      ifsc_code: ifsc_code,
    };

    await authAxios.patch(
      `${Base_url}/api/investor-kyc/admin-manage-kyc`,
      values1
    );

    navigator("/home/investor_kyc");
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
                Investor Kyc Update
              </h1>

              <label for="exampleInputName" className="form-label">
                Pan Card
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={pan_card}
                onChange={updatepan_card}
              />

              <label for="exampleInputName" className="form-label">
                Pan Card Verified
              </label>

              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={updatepan_card_verify}
                value={pan_card_verified}
              >
                <option selected className="active">
                  Pan Card Verified
                </option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>

              <label for="exampleInputRollnum" className="form-label">
                Birth Date
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputRollnum"
                value={birth_date}
                onChange={updatebirth_date}
              />

              <label for="exampleInputRegistrationnum" className="form-label">
                Birth Month
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={birth_month}
                onChange={updatebirth_month}
              />

              <label for="exampleInputBranch" className="form-label">
                Birth Year
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputBranch"
                value={birth_year}
                onChange={updatebirth_year}
              />

              <label for="exampleInputName" className="form-label">
                Aadhaar Card Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputName"
                value={aadhaar_card_number}
                onChange={updateaadhaar_card_number}
              />

              <label for="exampleInputName" className="form-label">
                Aadhaar Card Verified
              </label>

              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={updateaadhaar_card_verify}
                value={aadhaar_card_verified}
              >
                <option selected className="active">
                  Aadhaar Card Verified
                </option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>

              <label for="exampleInputRollnum" className="form-label">
                Address Line 1
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputRollnum"
                value={address_line_1}
                onChange={updateaddress_line_1}
              />

              <label for="exampleInputRegistrationnum" className="form-label">
                Address Line 2
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={address_line_2}
                onChange={updateaddress_line_2}
              />

              <label for="exampleInputBranch" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputBranch"
                value={city}
                onChange={updatecity}
              />

              <label for="exampleInputpassword" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={state}
                onChange={updatestate}
              />

              <label for="exampleInputRegistrationnum" className="form-label">
                Pincode
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={pincode}
                onChange={updatepincode}
              />

              <label for="exampleInputRollnum" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputRollnum"
                value={country}
                onChange={updateCountry}
              />

              <label for="exampleInputBranch" className="form-label">
                Bank Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputBranch"
                value={bank_name}
                onChange={updatebank_name}
              />

              <label for="exampleInputpassword" className="form-label">
                Bank Account
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                value={bank_account}
                onChange={updatebank_account}
              />

              <label for="exampleInputName" className="form-label">
                Bank Account Verified
              </label>

              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={updatebank_account_verify}
                value={bank_account_verified}
              >
                <option selected className="active">
                  Bank Account Verified
                </option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>

              <label for="exampleInputpassword" className="form-label">
                Ifsc Code
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={ifsc_code}
                onChange={updateifsc_code}
              />

              <label for="exampleInputpassword" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                value={mobile_number}
                onChange={update_mobilenumber}
              />

              <label for="exampleInputName" className="form-label">
                Mobile Number Verified
              </label>
              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={updatemobile_number_verify}
                value={mobile_number_verified}
              >
                <option selected className="active">
                  Mobile Number Verified
                </option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>

              <button
                type="submit"
                className="btn btn-success"
                style={{ marginTop: "30px", backgroundColor: "#1a83ff" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Investor_Kyc_Form;

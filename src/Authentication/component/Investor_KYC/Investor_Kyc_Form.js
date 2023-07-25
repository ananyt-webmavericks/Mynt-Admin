import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate, useLocation } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Investor_Kyc_Form = () =>{
  const navigator = useNavigate();
  const location1 = useLocation()
  const[aadhaar_card_number , setaadhaar_card_number] = useState(location1.state.bio.aadhaar_card_number);
  const[address_line_1 , setaddress_line_1] = useState(location1.state.bio.address_line_1);
  const[address_line_2 , setaddress_line_2] = useState(location1.state.bio.address_line_2);
  const[city,setcity] = useState(location1.state.bio.city);
  const[state,setstate] = useState(location1.state.bio.state);
  const[pincode,setpincode] = useState(location1.state.bio.pincode);
  const[bank_name,setbank_name] = useState(location1.state.bio.bank_name);
  const[bank_account,setbank_account] = useState(location1.state.bio.bank_account);
  const[ifsc_code,setifsc_code] = useState(location1.state.bio.ifsc_code);
  

  const updateaadhaar_card_number = (e) =>{
    setaadhaar_card_number(e.target.value)
  }
  const updateaddress_line_1 = (e) =>{
    setaddress_line_1(e.target.value)
  }
  const updateaddress_line_2 = (e) =>{
    setaddress_line_2(e.target.value)
  }
  const updatecity = (e) =>{
    setcity(e.target.value)
  }
  const updatestate = (e) =>{
    setstate(e.target.value)
  }
  const updatepincode = (e) =>{
    setpincode(e.target.value)
  }
  const updatebank_name = (e) =>{
    setbank_name(e.target.value)
  }
  const updatebank_account = (e) =>{
    setbank_account(e.target.value)
  }
  const updateifsc_code = (e) =>{
    setifsc_code(e.target.value)
  }

  const gotoAdd = async() => {
    
    const values1 = {
        id : location1.state.bio.id,
        
        aadhaar_card_number:aadhaar_card_number
       
       }
       
      await authAxios.patch(`${Base_url}/api/investor-kyc/aadhaar-verification/manage`,values1);
      
            const values2 = {
              id : location1.state.bio.id,
              address_line_1:address_line_1,
              address_line_2:address_line_2,
              city:city,
              state:state,
              pincode:pincode
             
             }
             
            await authAxios.patch(`${Base_url}/api/investor-kyc/address/manage`,values2);
      
                 
      
            const values3 = {
              id : location1.state.bio.id,
            

              bank_name:bank_name,
              bank_account:bank_account,
              ifsc_code:ifsc_code
             
             }
             
            await authAxios.patch(`${Base_url}/api/investor-kyc/bank-verification/manage`,values3);
                  
     navigator("/home/investor_kyc")
    
    }
  

    return(
        <>
          <div className='container-fluid'>
        {/* <div className='row'>
          
            <Dashboard 
            f1 = {false}
            f2 = {true}
            />
          
        </div> */}
      <div className="row justify-content-center mb-5">
      <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }} >
          <form style={{padding:"40px",borderRadius:"20px"}} onSubmit={e=>{e.preventDefault()
          gotoAdd()}}>
                <h1 style={{textAlign:"center",color:"#070A52"}}>Investor Kyc Update</h1>
                <label for="exampleInputName" className="form-label">Aadhaar Card Number</label>
                <input type="number" className="form-control" id="exampleInputName" value={aadhaar_card_number} onChange={updateaadhaar_card_number}/>
  
              
                <label for="exampleInputRollnum" className="form-label">Address Line 1</label>
                <input  type="text" className="form-control" id="exampleInputRollnum" value={address_line_1} onChange={updateaddress_line_1}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">Address Line 2</label>
                <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={address_line_2} onChange={updateaddress_line_2}/>
              
              
                <label for="exampleInputBranch" className="form-label">City</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={city} onChange={updatecity}/>
              
              
                <label for="exampleInputpassword" className="form-label">State</label>
                <input  type="text" className="form-control" id="exampleInputPassword1" value={state} onChange={updatestate}/>

                <label for="exampleInputRegistrationnum" className="form-label">Pincode</label>
                <input  type="number" className="form-control" id="exampleInputeRegistrationnum" value={pincode} onChange={updatepincode}/>
              
              
                <label for="exampleInputBranch" className="form-label">Bank Name</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={bank_name} onChange={updatebank_name}/>
              
              
                <label for="exampleInputpassword" className="form-label">Bank Account</label>
                <input  type="number" className="form-control" id="exampleInputPassword1" value={bank_account} onChange={updatebank_account}/>

                <label for="exampleInputpassword" className="form-label">Ifsc Code</label>
                <input  type="text" className="form-control" id="exampleInputPassword1" value={ifsc_code} onChange={updateifsc_code}/>

                <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
            </form>
        </div>
        </div>
      
            </div>
        </>
    )
}
export default Investor_Kyc_Form;
import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"

const Company_Insert_data = () =>{

  const[id , setId] = useState();
  const[user_id , setUser_id] = useState();
  const[logo , setLogo] = useState();
  const[name , setName] = useState();
  const[company , setCompany] = useState();
  const[web , setWeb] = useState();
  const[pre,setPre] = useState();
  const[pro,setPro] = useState();
  const[traction , setTraction] = useState();
  const[revenue,setRevenue] = useState();
  const[reason_com,setReason_com] = useState();
  const[reason_mynt , setReason_mynt] = useState();
  const[exist,setExist] = useState();
  const[pitch,setPitch] = useState();
  const[country , setCountry] = useState();
  const[state,setState] = useState();
  const[city,setCity] = useState();
  const[pincode , setPincode] = useState();
  const[address,setAddress] = useState();
  const[facebook,setFacebook] = useState();
  const[insta , setInsta] = useState();
  const[legal,setLegal] = useState();
  const[cin,setCin] = useState();
  const[date , setDate] = useState();
  const[incor,setIncor] = useState();
  const[sector,setSector] = useState();
  const[invest , setInvest] = useState();
  const[employees,setEmployees] = useState();
  const[status,setStatus] = useState();
  const[create , setCreate] = useState();
  const[Update,setUpdate] = useState();
  const [post, setPost] = React.useState(null);
  

  
  const navigator = useNavigate();


  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateUser_id = (e) =>{
    setUser_id(e.target.value)
  }
  const updateLogo = (e) =>{
    setLogo(e.target.value)
  }
  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updateCompany = (e) =>{
    setCompany(e.target.value)
  }
  const updateWeb = (e) =>{
    setWeb(e.target.value)
  }
  const updatePre = (e) =>{
    setPre(e.target.value)
  }
  const updatePro = (e) =>{
    setPro(e.target.value)
  }
  const updateTraction = (e) =>{
    setTraction(e.target.value)
  }
  const updateRevenue = (e) =>{
    setRevenue(e.target.value)
  }
  const updateReason_com = (e) =>{
    setReason_com(e.target.value)
  }
  const updateReason_mynt = (e) =>{
    setReason_mynt(e.target.value)
  }
  const updateExist = (e) =>{
    setExist(e.target.value)
  }
  const updatePitch = (e) =>{
    setPitch(e.target.value)
  }
  const updateCountry = (e) =>{
    setCountry(e.target.value)
  }
  const updateState = (e) =>{
    setState(e.target.value)
  }
  const updateCity = (e) =>{
    setCity(e.target.value)
  }
  const updatePincode = (e) =>{
    setPincode(e.target.value)
  }
  const updateAddress = (e) =>{
    setAddress(e.target.value)
  }
  const updateFacebook = (e) =>{
    setFacebook(e.target.value)
  }
  const updateInsta = (e) =>{
    setInsta(e.target.value)
  }
  const updateLegal = (e) =>{
    setLegal(e.target.value)
  }
  const updateCin = (e) =>{
    setCin(e.target.value)
  }
  const updateDate = (e) =>{
    setDate(e.target.value)
  }
  const updateIncor = (e) =>{
    setIncor(e.target.value)
  }
  const updateSector = (e) =>{
    setSector(e.target.value)
  }
  const updateInvest = (e) =>{
    setInvest(e.target.value)
  }
  const updateEmployees = (e) =>{
    setEmployees(e.target.value)
  }
  const updateStatus = (e) =>{
    setStatus(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }


  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && user_id && logo && name && company && web && pre && pro && traction && revenue && reason_com && reason_mynt && exist && pitch &&
       country && state && city && pincode && address && facebook &&insta && legal && cin && date && incor && sector && invest && employees && status && create && Update  )
    
    {
    
           await axios.post(`${Base_url}api/company/manage`, {

            
            id   :     id             ,
            user_id   :         user_id         ,
            company_logo   :     logo             ,
            company_name   :     name             ,
            company_linked_in_profile   :    company              ,
            website_url   :         web         ,
            previous_funding   :   pre               ,
            product_description   :  pro                ,
            traction_description   :  traction                ,
            revenue   :              revenue    ,
            reason_for_community_round   :   reason_com                ,
            reason_for_mynt   :          reason_mynt        ,
            existing_commitments   :         exist         ,
            company_pitch   :          pitch        ,
            country   :          country        ,
            state   :           state       ,
            city   :           city       ,
            pincode   :           pincode       ,
            company_address   :       address           ,
            facebook_link   :          facebook        ,
            instagram_link   :           insta       ,
            legal_name   :             legal     ,
            cin   :         cin         ,
            date_of_incorporation   :        date          ,
            incorporation_type   :      incor            ,
            sector   :           sector       ,
            invested_so_far   :   invest               ,
            number_of_employees   :  employees                 ,
            created_at   :      create            ,
            updated_at   :     Update             ,
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/company");
    
    }
    
    else
    
    {
    
    alert("Please fill all the section");
    
    }
    
    }



    return(
      <>
          <div className='container-fluid'>
        <div className='row'>
          
            <Dashboard />
          
        </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"350px"}}>
          <form style={{padding:"20px",borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Company Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">User Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={user_id} onChange={updateUser_id}/>

              <label for="exampleInputRollnum" className="form-label">Company Logo</label>
              <input  type="link" className="form-control" id="exampleInputRollnum" value={logo} onChange={updateLogo}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Company Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={name} onChange={updateName}/>
            
            
              <label for="exampleInputBranch" className="form-label">Company Linked In Profile</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={company} onChange={updateCompany}/>
            
            
              <label for="exampleInputpassword" className="form-label">Website Url</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={web} onChange={updateWeb}/>

              <label for="exampleInputBranch" className="form-label">Previous Funding</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={pre} onChange={updatePre}/>

              <label for="exampleInputBranch" className="form-label">Production Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={pro} onChange={updatePro}/>

              <label for="exampleInputBranch" className="form-label">Traction Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={traction} onChange={updateTraction}/>

              <label for="exampleInputBranch" className="form-label">Revenue</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={revenue} onChange={updateRevenue}/>

              <label for="exampleInputBranch" className="form-label">Reason For Community Round</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={reason_com} onChange={updateReason_com}/>

              <label for="exampleInputBranch" className="form-label">Reason For Mynt</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={reason_mynt} onChange={updateReason_mynt}/>

              <label for="exampleInputBranch" className="form-label">Existing Commitments</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={exist} onChange={updateExist}/>

              <label for="exampleInputBranch" className="form-label">Company Pitch</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={pitch} onChange={updatePitch}/>

              <label for="exampleInputBranch" className="form-label">Country</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={country} onChange={updateCountry}/>

              <label for="exampleInputBranch" className="form-label">State</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={state} onChange={updateState}/>

              <label for="exampleInputBranch" className="form-label">City</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={city} onChange={updateCity}/>

              <label for="exampleInputBranch" className="form-label">Pincode</label>
              <input  type="number" className="form-control" id="exampleInputBranch" value={pincode} onChange={updatePincode}/>

              
              <label for="exampleInputBranch" className="form-label">Company Address</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={address} onChange={updateAddress}/>

              
              <label for="exampleInputBranch" className="form-label">Facebook Link</label>
              <input  type="Link" className="form-control" id="exampleInputBranch" value={facebook} onChange={updateFacebook}/>

              
              <label for="exampleInputBranch" className="form-label">Instagram Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={insta} onChange={updateInsta}/>
              
              <label for="exampleInputBranch" className="form-label">Legal Name</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={legal} onChange={updateLegal}/>

              
              <label for="exampleInputBranch" className="form-label">Cin</label>
              <input  type="number" className="form-control" id="exampleInputBranch" value={cin} onChange={updateCin}/>

              
              <label for="exampleInputBranch" className="form-label">Date Of Incorporation</label>
              <input  type="date" className="form-control" id="exampleInputBranch" value={date} onChange={updateDate}/>

              <label for="exampleInputBranch" className="form-label">Incorporation Type</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={incor} onChange={updateIncor}/>

              <label for="exampleInputBranch" className="form-label">Sector</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={sector} onChange={updateSector}/>

              <label for="exampleInputBranch" className="form-label">Invested So far</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={invest} onChange={updateInvest}/>

              <label for="exampleInputBranch" className="form-label">Number Of Employees</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={employees} onChange={updateEmployees}/>

              <label for="exampleInputBranch" className="form-label">Status</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={status} onChange={updateStatus}/>

              <label for="exampleInputBranch" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={create} onChange={updateCreate}/>

              <label for="exampleInputBranch" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={Update} onChange={update}/>
              
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
        </form>
        </div>
        </div>
      
    
      </>
    )
}
export default Company_Insert_data;
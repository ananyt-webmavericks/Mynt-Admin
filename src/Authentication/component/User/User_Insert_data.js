import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


const User_Insert_data = () =>{
  const[id , setId] = useState();  
  const[fname , setFname] = useState();
  const[lname , setLname] = useState();
  const[email , setEmail] = useState();
  const[email_otp,setEmail_otp] = useState();
  const[social,setSocial] = useState();
  const[country,setCountry] = useState();
  const[verify,setVerify] = useState();
  const[nationality,setNationality] = useState();
  const[create,setCreate] = useState();
  const[Update,setUpdate] = useState();
  const[profile,setProfile] = useState();
  const[user,setUser] = useState();
  const [post, setPost] = React.useState(null);

  const navigator = useNavigate();

  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateFname = (e) =>{
    setFname(e.target.value)
  }
  const updateLname = (e) =>{
    setLname(e.target.value)
  }
  const updateEmail = (e) =>{
    setEmail(e.target.value)
  }
  const updateEmail_otp = (e) =>{
    setEmail_otp(e.target.value)
  }
  const updateSocial = (e) =>{
    setSocial(e.target.value)
  }
  const updateCountry = (e) =>{
    setCountry(e.target.value)
  }
  const updateVerify = (e) =>{
    setVerify(e.target.value)
  }
  const updateNationality= (e) =>{
    setNationality(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }
  const updateProfile = (e) =>{
    setProfile(e.target.value)
  }
  const updateUser = (e) =>{
    setUser(e.target.value)
  }


  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && fname && lname && email && email_otp && social && country && verify && nationality && create && Update && profile && user  )
    
    {
    
           await axios.post(`${Base_url}/api/users/manage`, {

            
            id : id,
            
            first_name : fname,
            
            last_name : lname,
            
            email : email,

            email_otp : email_otp,
            
            social_login : social,
            
            country : country,

            email_Verified : verify,
            
            nationality :nationality,
            created_at :create,
            updated_at : Update,
            profile_image : profile,
            user_type : user,

            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/user")
    
    }
    
    else
    
    {
    
    alert("Please fill all the section")
    
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
          <div className='col-10' style={{marginTop:"150px", marginLeft:"280px"}}>
          <form style={{padding:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>ADD DATA</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="exampleInputName" value={fname} onChange={updateFname}/>

              <label for="exampleInputName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="exampleInputName" value={lname} onChange={updateLname}/>

              <label for="exampleInputRollnum" className="form-label">Email</label>
              <input  type="email" className="form-control" id="exampleInputRollnum" value={email} onChange={updateEmail}/>

              <label for="exampleInputRollnum" className="form-label">Email Otp</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={email_otp} onChange={updateEmail_otp}/>
              
              <label for="exampleInputRegistrationnum" className="form-label">Social Login</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={social} onChange={updateSocial}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Country</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={country} onChange={updateCountry}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Email Verified</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={verify} onChange={updateVerify}/>

              <label for="exampleInputRegistrationnum" className="form-label">Nationality</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={nationality} onChange={updateNationality}/>

              <label for="exampleInputRegistrationnum" className="form-label">Created At</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={create} onChange={updateCreate}/>

              <label for="exampleInputRegistrationnum" className="form-label">Updated At</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={Update} onChange={update}/>

              <label for="exampleInputRegistrationnum" className="form-label">Profile Image</label>
              <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={profile} onChange={updateProfile}/>

              <label for="exampleInputBranch" className="form-label">User Type</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={user} onChange={updateUser}/>
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
    
      </>
    )
}
export default User_Insert_data;
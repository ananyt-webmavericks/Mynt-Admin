import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const User_Insert_data = () =>{
  const[fname , setFname] = useState();
  const[lname , setLname] = useState();
  const[email , setEmail] = useState();
  const[social,setSocial] = useState();
  const [user_type, setuser_type] = useState();

  

  const navigator = useNavigate();

  
  const updateFname = (e) =>{
    setFname(e.target.value)
  }
  const updateLname = (e) =>{
    setLname(e.target.value)
  }
  const updateEmail = (e) =>{
    setEmail(e.target.value)
  }
  const updateSocial = (e) =>{
    setSocial(e.target.value)
  }
  const updateuser_type = (e) =>{
    setuser_type(e.target.value)
  }
  
   

  const gotoAdd = async(e) => {



   const values1= {

            
        
            
      first_name : fname,
      
      last_name : lname,
      
      email : email,
      
      social_login : false,
      user_type : "INVESTOR",
      
      
      }
      console.log(values1);

 
    
    
           await authAxios.post(`${Base_url}/api/users/sign-up`, values1);
    
            
    
    navigator("/home/user")
    
 
    }


    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
          
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
          
        </div>
        </div>
        <div className='row'>
          <div className='col-7' style={{marginTop:"130px", marginLeft:"450px", borderRadius:"20px", backgroundColor:"#BACDDB"}}>
          <form style={{padding:"50px",borderRadius:"20px"}} onSubmit={e=>{
            e.preventDefault();
            gotoAdd()}}>
              <h1 style={{textAlign:"center",color:"#070A52",marginBottom:"20px"}}>ADD User Data</h1>


              <label for="exampleInputName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="exampleInputName" value={fname} onChange={updateFname}/>

              <label for="exampleInputName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="exampleInputName" value={lname} onChange={updateLname}/>

              <label for="exampleInputRollnum" className="form-label">Email</label>
              <input  type="email" className="form-control" id="exampleInputRollnum" value={email} onChange={updateEmail}/>
              
              <label for="exampleInputRegistrationnum" className="form-label">Social Login</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={social} onChange={updateSocial}/>

              <label  className="form-label">User Type</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" >
                <option selected  className="active">Select user type</option>
                <option onClick={updateuser_type}>ADMIN</option>
                <option onClick={updateuser_type}>INVESTOR</option>
                <option onClick={updateuser_type}>FOUNDER</option>      
                </select>
              </div>

            <button type="submit" className="btn btn-success" style={{marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
    
      </>
    )
}
export default User_Insert_data;
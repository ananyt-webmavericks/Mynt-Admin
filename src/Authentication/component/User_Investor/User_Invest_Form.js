import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate, useLocation } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import { toast } from "react-toastify";


const User_Invest_Form= () =>{
  const location1 = useLocation();
  const navigator = useNavigate();
  const[email , setEmail] = useState(location1.state.bio.email);
  const[social,setSocial] = useState(location1.state.bio.social_login);
  const[profile,setProfile] = useState(location1.state.bio.profile_image);
  // const [post, setPost] = React.useState(null);
  const [pitch, setPitch] = useState(null);
  const [pitchUrl, setPitchUrl] = useState(location1.state.bio.pitch);
  const updatePitch = async (e) => {
    const allowedFiles = ['jpg','jpeg','png'];
    const fileType = e.target.files?.[0] ? e.target.files?.[0]?.name.split('.').pop() : null
    if(allowedFiles.indexOf(fileType?.toLowerCase()) === -1 || !fileType){
      toast.error("Please select valid file");
      setPitch(null);
      setPitchUrl(null);
      return null
    }
    setPitch(e.target.files?.[0] ?? null);
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
      }
      const formData = new FormData();
      formData.append("file", file);

      await authAxios
        .post(`${Base_url}/api/users/upload-files`, formData)

        .then((response) => {
          setPitchUrl(response.data?.message ?? "");
        })
        .catch((err) => {
          console.log("error");
          setPitchUrl(null);
        });
    } else {
      setPitchUrl(null);
    }
  };
  
 

 
  const updateEmail = (e) =>{
    setEmail(e.target.value)
  }
  const updateSocial = (e) =>{
    setSocial(e.target.value)
  }
  const updateProfile = (e) =>{
    setProfile(e.target.value)
  }


  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      user_id : location1.state.bio.id,
       
       
       email : email,
       social_login : social,
       profile_image : pitchUrl,

       
       }
       
      await authAxios.patch(`${Base_url}/api/users/manage`,values);
      
     navigator("/home/user-invest")
    
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
        </div>
        <div className="row justify-content-center mb-5">
        <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }} className="col-7">
          <form style={{padding:"50px",borderRadius:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52" , marginBottom:"20px"}}>Update User Data</h1>

              <label for="exampleInputRollnum" className="form-label">Email</label>
              <input  type="email" className="form-control" id="exampleInputRollnum" value={email} onChange={updateEmail}/>
              
              <label for="exampleInputRegistrationnum" className="form-label">Social Login</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={social} onChange={updateSocial}/>

              
              <label for="exampleInputRegistrationnum" className="form-label">
                Profile Image(jpeg, png, jpg)

              </label>
              <input
                onChange={updatePitch}
                type="file"
                className="form-control"
                id="exampleInputBranch"
                accept=".jpg,.png,.jpeg"

              />
              <div className="pt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  defaultValue={pitchUrl}
                  // onChange={updatePitch}
                  disabled
                />
              </div>
            <button type="submit" className="btn btn-success" style={{marginTop:"30px"}} >Submit</button>
          </form>
        </div>
        </div>
    
      </>
    )
}
export default User_Invest_Form;


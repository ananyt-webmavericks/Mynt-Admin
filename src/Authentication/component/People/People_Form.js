import React, { useState, useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const People_Form = () =>{
  const location1 = useLocation();
  const navigator = useNavigate();
  const[company_id , setCompany_id] = useState(location1.state.bio.company_id);
  const[type , setType] = useState(location1.state.bio.type);
  const[name , setName] = useState(location1.state.bio.name);
  const[position,setPosition] = useState(location1.state.bio.position);
  const[facebook,setFacebook] = useState(location1.state.bio.facebook_link);
  const[insta , setinsta] = useState(location1.state.bio.instagram_link);
  const[linked , setLinked] = useState(location1.state.bio.linked_in_link);
  const[description , setDescription] = useState(location1.state.bio.description);
  const[profile,setProfile] = useState(location1.state.bio.profile_image);
  const[items, setItems] = useState();

  
  const updateType = (e) =>{
    setType(e.target.value)
  }
  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updatePosition = (e) =>{
    setPosition(e.target.value)
  }
  const updateFacebook = (e) =>{
    setFacebook(e.target.value)
  }
  const updateInsta = (e) =>{
    setinsta(e.target.value)
  }
  const updateLinked = (e) =>{
    setLinked(e.target.value)
  }
  const updateDescription = (e) =>{
    setDescription(e.target.value)
  }
  const updateProfile = (e) =>{
    setProfile(e.target.value)
  }

  const add =(x)=>{
    console.log(x);
    setCompany_id(x);
  }
  
  useEffect(()=>{
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/company/manage`);
          console.log(response.data)
          setItems(response.data)
          return response.data;
      }
      catch (error) {
          if (error) {
              console.log(error)
          }
          return error;
      }
}
getUploadedDocs();
  },[])

  const gotoAdd = async() => {
    
    const values = {           
       
      people_id : location1.state.bio.id,
       
      company_id : company_id,
       
       type : type,
       name : name,
       position : position,
       facebook_link :facebook,
       instagram_link : insta,
       linked_in_link : linked,
       description : description,
       profile_image:profile,
       }
       
      await authAxios.patch(`${Base_url}/api/people/manage`,values);
     navigator("/home/people")
    
    }
    return(
        <>
          <div className='container-fluid'>
        {/* <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div> */}
      <div className="row justify-content-center mb-5">
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}  onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
          <form style={{padding:"40px" , borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"#070A52",marginBottom:"20px"}}>Update People Data</h1>

              <label for="exampleInputName" className="form-label">Company Id</label>
              <div className="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{add(e.target.value)}} value={company_id}>
                    <option selected  className="active">Select Company Name</option>
                    {
                      items && items.map((item) =>{
                        return (
                          <option 
                          // onClick={()=>{add(item.user_id)}}
                          value={item.id}
                           >{item.company_name}</option>
                          )
                        })
                      }
                  </select>
                </div>
            
            
              <label for="exampleInputRollnum" className="form-label">Type</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={type} onChange={updateType}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={name} onChange={updateName}/>
            
            
              <label for="exampleInputBranch" className="form-label">Position</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={position} onChange={updatePosition}/>

              
              <label for="exampleInputBranch" className="form-label">Facebook Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={facebook} onChange={updateFacebook}/>

              
              <label for="exampleInputBranch" className="form-label">Instagram Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={insta} onChange={updateInsta}/>

              
              <label for="exampleInputBranch" className="form-label">Linked In Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={linked} onChange={updateLinked}/>

              
              <label for="exampleInputBranch" className="form-label">Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={description} onChange={updateDescription}/>

              
              <label for="exampleInputBranch" className="form-label">Profile Image</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={profile} onChange={updateProfile}/>
            
            <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
          </form>
        </div>
        </div>
                      </div>
    </>
    )
}
export default People_Form;
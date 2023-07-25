import React, { useState, useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const People_Insert_data = () =>{
  const[id , setId] =useState();  
  const[company_id , setCompany_id] = useState();
  const[type , setType] = useState();
  const[name , setName] = useState();
  const[position,setPosition] = useState();
  const[facebook,setFacebook] = useState();
  const[insta , setinsta] = useState();
  const[linked , setLinked] = useState();
  const[description , setDescription] = useState();
  const[profile,setProfile] = useState();
  const[items , setItems] =useState();
  const [post, setPost] = React.useState(null);
  const [pitchUrl, setPitchUrl] = useState(null);
  const [pitch, setPitch] = useState();


  const navigator = useNavigate();

  

 const updatePitch = async (e) => {
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
        setPitchUrl(response.data?.message ?? '');
      })
      .catch((err) => {
        console.log("error");
        setPitchUrl(null);
      });
  } else {
    setPitchUrl(null);
  }
};

  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCompany_id = (e) =>{
    setCompany_id(e.target.value)
  }
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


  const gotoAdd = async(e) => {

    e.preventDefault();
    
           await authAxios.post(`${Base_url}/api/people/manage`, {

            
            id : id,
            
            company_id : company_id,
            
            type : type,
            
            name : name,

            position : position,

            facebook_link : facebook,

            instagram_link : insta,

            linked_in_link : linked,

            description : description,

            profile_image : profile,

            
            },
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
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
        <div style={{borderRadius: "20px",backgroundColor: "#BACDDB",}}>
          <form style={{padding:"40px" , borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"#070A52", marginBottom:"20px"}}>Add People Data</h1>

               <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected  className="active">Select Company Name</option>
                {
                  items && items.map((item) =>{
                    return (
                      <option onClick={()=>{add(item.user_id)}} >{item.company_name}</option>
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

              
              <label for="exampleInputRegistrationnum" className="form-label">
  Profile Image
</label>
<input
  onChange={updatePitch}
  type="file"
  className="form-control"
  id="exampleInputBranch"
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
            <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
                  </div>
    </>
    )
}
export default People_Insert_data;
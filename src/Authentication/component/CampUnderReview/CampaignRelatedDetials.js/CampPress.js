import React, { useEffect } from 'react';
import Dashboard from '../../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from '../../Base_url';
import { authAxios } from '../../../../Services/auth.service';
import { useState } from 'react';


const CampPress = () =>{
  const location1 = useLocation();
  const navigator = useNavigate();
  const[title , setTitle] = useState();
  const[link , setLink] = useState();
  const[description,setDescription] = useState();
  const[banner,setBanner] = useState();
  const [press_id, setPress_id] = useState()
  const [ind, setInd] = useState() 
  const [pitchUrl, setPitchUrl] = useState(null);
  const [pitch, setPitch] = useState();
 
  const updateTitle = (e) =>{
    setTitle(e.target.value)
  }
  const updateLink = (e) =>{
    setLink(e.target.value)
  }
  const updateDescription = (e) =>{
    setDescription(e.target.value)
  }
  const updateBanner = (e) =>{
    setBanner(e.target.value)
  }
  

  useEffect(()=>{
    const getUploadedDocs = async () => {
        setInd(location1.state.bio ? location1.state.bio.company_id.press.filter( (val) => {
            return (val.company_id === location1.state.bio.company_id.id )
        }):[])
}
getUploadedDocs();
  },[])

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
  
  const gotoAdd = async() => {
    
    const values = {
      press_id : press_id,
       title : title,
       link : link,
       description : description,
       banner : pitchUrl,
       company_id : location1.state.bio.company_id.press[0].company_id
       }
       
      await authAxios.patch(`${Base_url}/api/press/manage`,values);
      
      navigator(`/home/under-update/${location1.state.bio.id}`)
    
    }

    const add1 = (x) => {
        setPress_id(x)
      } 
    

    return(
        <>
          <div className='container-fluid'>
        {/* <div className='row'>
            <Dashboard 
           
            />
        </div> */}
        </div>
        <div className='row'>
          <div style={{margin:'auto',backgroundColor:"#BACDDB"}}>
          <form style={{padding:"40px",borderRadius:"20px" , marginBottom:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
                <h1 style={{textAlign:"center",color:"#070A52"}}>Update Press Data</h1>

                <label for="exampleInputName" className="form-label">Press Id</label>
              <div className="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" value={press_id} onChange={(e)=>{add1(e.target.value)}}>
                    <option selected  className="active">Select Press ID</option>
                    {
                      ind && ind.map((item) =>{
                        return (
                          <option 
                          // onClick={()=>{add1(item.id)}} 
                          value={item.id}
                          >{item.id}</option>
                        )
                      })
                    }
                  </select>
                </div>


                <label for="exampleInputRollnum" className="form-label">Title</label>
                <input  type="text" className="form-control" id="exampleInputRollnum" value={title} onChange={updateTitle}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">Link</label>
                <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={link} onChange={updateLink}/>
              
              
                <label for="exampleInputBranch" className="form-label">Description</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={description} onChange={updateDescription}/>

                <label for="exampleInputRegistrationnum" className="form-label">
  Banner
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
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
          </form>
        </div>
        </div>
    </>
    )
}
export default CampPress;
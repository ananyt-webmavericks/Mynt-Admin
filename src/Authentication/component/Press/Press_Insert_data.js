import React, { useState ,useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Press_Insert_data = () =>{
  const[id , setId] = useState(); 
  const[c_id , setC_id] = useState();
  const[items , setItems] =useState([]);  
  const[company , setCompany] = useState();
  const[title , setTitle] = useState();
  const[link , setLink] = useState();
  const[description,setDescription] = useState();
  const[banner,setBanner] = useState();
  const [post, setPost] = React.useState(null);
  const [pitchUrl, setPitchUrl] = useState(null);
  const [pitch, setPitch] = useState();

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

  const navigator = useNavigate();
  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCompany = (e) =>{
    setCompany(e.target.value)
  }
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
  const updateC_id = (e) =>{
    setC_id(e.target.value)
  }
  const updateItems = (e) =>{
    setItems(e.target.value)
  }

  const add =(x)=>{
    console.log(x);
    setC_id(x);
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
    
    
           await authAxios.post(`${Base_url}/api/press/manage`, {

            
            id : id,
            
            company_id : c_id,
            
            title : title,
            
            link : link,

            description : description,

            banners : banner,
            
            },
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/press")
    
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
          <form style={{padding:"40px",borderRadius:"20px"}}>
                <h1 style={{textAlign:"center",color:"#070A52",marginBottom:"20px"}}>Add Press Data</h1>

                <div class="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{add(e.target.value)}} value={c_id}>
                    <option selected  className="active">Select Company Name</option>
                    {
                      items && items.map((item) =>{
                        return (
                          <option
                          //  onClick={()=>{add(item.user_id)}}
                          value={item.user_id}
                           >{item.company_name}</option>
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
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
                      </div>
    </>
    )
}
export default Press_Insert_data;
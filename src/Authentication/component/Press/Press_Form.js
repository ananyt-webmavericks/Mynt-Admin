import React, { useState, useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Press_Form = () =>{
  const location1 = useLocation();
  const navigator = useNavigate();
  const[title , setTitle] = useState(location1.state.bio.title);
  const[link , setLink] = useState(location1.state.bio.link);
  const[description,setDescription] = useState(location1.state.bio.description);
  const[banner,setBanner] = useState(location1.state.bio.banner);
  const[company_id,setcompany_id] = useState(location1.state.bio.company_id);
  const [items , setItems] = useState()
 
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
  

  const add =(x)=>{
    console.log(x);
    setcompany_id(x);
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
      press_id : location1.state.bio.id,
       title : title,
       link : link,
       description : description,
       banner : banner,
       company_id : company_id
       }
       
      await authAxios.patch(`${Base_url}/api/press/manage`,values);
      
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
        <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }} >
          <form style={{padding:"40px",borderRadius:"20px" , marginBottom:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
                <h1 style={{textAlign:"center",color:"#070A52"}}>Update Press Data</h1>

                <label for="exampleInputName" className="form-label">Company Id</label>
                <div class="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{add(e.target.value)}} value={company_id}>
                    <option selected  className="active">Select Company Name</option>
                    {
                      items && items.map((item) =>{
                        return (
                          <option 
                          // onClick={()=>{add(item.user_id)}}
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

                <label for="exampleInputBranch" className="form-label">Banner</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={banner} onChange={updateBanner}/>

              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
          </form>
        </div>
        </div>
                      </div>
    </>
    )
}
export default Press_Form;
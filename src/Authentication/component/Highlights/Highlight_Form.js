import React, { useState ,useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import { toast } from "react-toastify";


const Highlights_Form = () =>{
const location1 = useLocation();
  const[title, settitle] = useState(location1.state.bio.title);
  const[description , setdescription ]= useState(location1.state.bio.description);
  const[highlight_image , sethighlight_image ]= useState();
  const[status,setStatus] = useState(location1.state.bio.status);
  const [campaign_id , setcampaign_id] = useState(location1.state.bio.campaign_id);
  const[items2 , setItems2] =useState([]); 
  const [highlight_image_url,sethighlightImageUrl] = useState(location1.state.bio.highlight_image)

  const updatetitle = (e) =>{
    settitle(e.target.value)
  }
  const updatedescription = (e) =>{
    setdescription(e.target.value)
  }
  const updatehighlight_image = (e) =>{
    sethighlight_image(e.target.value)
  }
  const updateStatus = (e) =>{
    console.log(e.target.value);
    setStatus(e.target.value)
  }
  const navigator = useNavigate();
  const add =(x)=>{
    console.log(x);
    setcampaign_id(x);
  }

  useEffect(()=>{
    
  // console.log("gfshdj")
    const getUploaded = async () => {
      
      try {
          const response = await authAxios.get(`${Base_url}/api/campaign/manage/admin`);
          // console.log(response.data)
          setItems2(response.data)
          return response.data;
      }
      catch (error) {
          if (error) {
              console.log(error)
          }
          return error;
      }
    }
    getUploaded();
    },[])

  const gotoAdd = async() => {
    const values = { 
      highlight_id : location1.state.bio.id,
      campaign_id : campaign_id,
      title : title ,
      description : description , 
      highlight_image : highlight_image_url , 
      status : status,
       }
       
      await authAxios.patch(`${Base_url}/api/highlights/manage`,values);
     navigator("/home/highlights")
    }


    const updateImage = async (e) => {
      const allowedFiles = ['jpg' , 'jpeg', 'png'];
      const fileType = e.target.files?.[0] ? e.target.files?.[0]?.name.split('.').pop() : null
      if(allowedFiles.indexOf(fileType?.toLowerCase()) === -1 || !fileType){
        toast.error("Please select valid file");
        sethighlight_image(null);
        sethighlightImageUrl(null);
        return null
      }
      sethighlight_image(e.target.files?.[0] ?? null);
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
            sethighlightImageUrl(response.data?.message ?? "");
          })
          .catch((err) => {
            console.log("error");
            sethighlightImageUrl(null);
          });
      } else {
        sethighlightImageUrl(null);
      }
    };
    return(
      <>
       <div className='container-fluid'>
        {/* <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div> */}
        <div className='row justify-content-center mb-5'  >
        <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }} >
          <form style={{padding:"40px",borderRadius:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update HighLights Data</h1>

              <label for="exampleInputName" className="form-label">Campaign Id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{add(e.target.value)}} value={campaign_id}>
                <option selected  className="active">Select campaign id</option>
                {
                  items2 && items2.map((item) =>{
                    return (
                      <option 
                      // onClick={()=>{add(item.id)}} 
                      value={item.id}
                      >{item.id}</option>
                      )
                    })
                  }
                </select>
              </div>

              <label for="exampleInput" className="form-label">Status</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={updateStatus} value={status} >
                <option selected  className="active">Select Option</option>
                <option value={'APPROVED'}>APPROVED</option>
                <option value={'PENDING'}>PENDING</option>      
                </select>
              </div>

              <label for="exampleInputRollnum" className="form-label">Title </label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title} onChange={updatetitle}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description} onChange={updatedescription}/>

              {/* <label for="exampleInputRollnum" className="form-label">HighLight Image</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={highlight_image} onChange={updatehighlight_image}/> */}

              <label className="form-label">HighLight Image </label>
              {/* <input type="file" className="form-control" name="myImage" accept="image/png, image/gif, image/jpeg"  value={highlight_image} onChange={updatehighlight_image} /> */}
              <input
                onChange={updateImage}
                type="file"
                className="form-control"
                id="exampleInputBranch"
                accept=".jpeg, .png, .jpg"
              />
              <div className="pt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  defaultValue={highlight_image_url}
                  // onChange={updatePitch}
                  disabled
                />
              </div>
          
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
          </form>
        </div>
        </div>
              </div>
  </>
    )
}
export default Highlights_Form;
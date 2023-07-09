import React, { useState ,useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Highlights_Form = () =>{
const location1 = useLocation();
  const[title, settitle] = useState(location1.state.bio.title);
  const[description , setdescription ]= useState(location1.state.bio.description);
  const[highlight_image , sethighlight_image ]= useState();
  const[status,setStatus] = useState(location1.state.bio.status);
  const [campaign_id , setcampaign_id] = useState(location1.state.bio.campaign_id);
  const[items2 , setItems2] =useState([]); 

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
          const response = await authAxios.get(`${Base_url}/api/campaign/manage`);
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
      campaign_id : +campaign_id,
      title : title ,
      description : description , 
      highlight_image : highlight_image , 
      status : status,
       }
       
      await authAxios.patch(`${Base_url}/api/highlights/manage`,values);
     navigator("/home/highlights")
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
          <form style={{padding:"40px",borderRadius:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update HighLights Data</h1>

              <label for="exampleInputName" className="form-label">Campaign Id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected  className="active">Select campaign id</option>
                {
                  items2 && items2.map((item) =>{
                    return (
                      <option onClick={()=>{add(item.id)}} >{item.id}</option>
                    )
                  })
                }
                </select>
              </div>

              <label for="exampleInput" className="form-label">Status</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" >
                <option selected  className="active">Select Option</option>
                <option onClick={updateStatus}>APPROVED</option>
                <option onClick={updateStatus}>PENDING</option>      
                </select>
              </div>

              <label for="exampleInputRollnum" className="form-label">Title </label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title} onChange={updatetitle}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description} onChange={updatedescription}/>

              {/* <label for="exampleInputRollnum" className="form-label">HighLight Image</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={highlight_image} onChange={updatehighlight_image}/> */}

              <label className="form-label">HighLight Image : </label>
              <input type="file" className="form-control" name="myImage" accept="image/png, image/gif, image/jpeg"  value={highlight_image} onChange={updatehighlight_image} />

          
              <button type="submit" className="btn btn-success" style={{marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
  </>
    )
}
export default Highlights_Form;
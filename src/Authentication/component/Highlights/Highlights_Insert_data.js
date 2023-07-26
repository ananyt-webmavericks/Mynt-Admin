import React, { useState, useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";

const Highlights_Insert_data = () =>{
  const[campaign_id , setCampaignid] = useState();
  const[title_1, settitle_1] = useState();
  const[description_1 , setdescription_1] = useState();
  const[highlight_image_1 , sethighlight_image_1] = useState();
  const[title_2, settitle_2] = useState();
  const[description_2 , setdescription_2] = useState();
  const[highlight_image_2 , sethighlight_image_2] = useState();
  const[title_3, settitle_3] = useState();
  const[description_3 , setdescription_3] = useState();
  const[highlight_image_3 , sethighlight_image_3] = useState();
  const[title_4, settitle_4] = useState();
  const[description_4 , setdescription_4] = useState();
  const[highlight_image_4 , sethighlight_image_4] = useState();
  const[items , setItems] =useState([]);   
  const[items2 , setItems2] =useState([]); 

  const navigator = useNavigate();
  const updatetitle_1 = (e) =>{
    settitle_1(e.target.value)
  }
  const updatedescription_1 = (e) =>{
    setdescription_1(e.target.value)
  }
  const updatehighlight_image_1 = (e) =>{
    sethighlight_image_1(e.target.value)
  }
  const updatetitle_2 = (e) =>{
    settitle_2(e.target.value)
  }
  const updatedescription_2 = (e) =>{
    setdescription_2(e.target.value)
  }
  const updatehighlight_image_2 = (e) =>{
    sethighlight_image_2(e.target.value)
  }
  const updatetitle_3 = (e) =>{
    settitle_3(e.target.value)
  }
  const updatedescription_3 = (e) =>{
    setdescription_3(e.target.value)
  }
  const updatehighlight_image_3 = (e) =>{
    sethighlight_image_3(e.target.value)
  }
  const updatetitle_4 = (e) =>{
    settitle_4(e.target.value)
  }
  const updatedescription_4 = (e) =>{
    setdescription_4(e.target.value)
  }
  const updatehighlight_image_4 = (e) =>{
    sethighlight_image_4(e.target.value)
  }
  const updateItems = (e) =>{
    setItems(e.target.value)
  }

  const add =(x)=>{
    console.log(x);
    setCampaignid(x);
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

  const gotoAdd = async(e) => {

    e.preventDefault();
      
    const values = {
      // highlight_id : +id,
      campaign_id:campaign_id,
      highlights:[
              {
              title:title_1,
              description:description_1,
              highlight_image:highlight_image_1},
              // {
              // title:title_2,
              // description:description_2,
              // highlight_image:highlight_image_2},
              // {
              // title:title_3,
              // description:description_3,
              // highlight_image:highlight_image_3},
              // {
              // title:title_4,
              // description:description_4,
              // highlight_image:highlight_image_4}
      ]
    }
           await authAxios.post(`${Base_url}/api/highlights/manage`, values )
          navigator("/home/highlights") 
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
              <h1 style={{textAlign:"center",color:"#070A52"}}>Add Highlights Data</h1>

              <label for="exampleInputName" className="form-label">Campaign Id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{add(e.target.value)}} value={campaign_id}>
                <option selected  className="active">Select campaign id</option>
                {
                  items2 && items2.map((item) =>{
                    return (
                      <option
                      //  onClick={()=>{add(item.id)}} 
                      value={item.id}
                      >{item.id}</option>
                      )
                    })
                  }
                </select>
              </div>

              <label for="exampleInputRollnum" className="form-label">Title</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_1} onChange={updatetitle_1}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_1} onChange={updatedescription_1}/>

          

              {/* <label for="exampleInputRollnum" className="form-label">Title 2</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_2} onChange={updatetitle_2}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description 2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_2} onChange={updatedescription_2}/>

             

              <label for="exampleInputRollnum" className="form-label">Title 3</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_3} onChange={updatetitle_3}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description 3</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_3} onChange={updatedescription_3}/>

             

              <label for="exampleInputRollnum" className="form-label">Title 4</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_4} onChange={updatetitle_4}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description 4</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_4} onChange={updatedescription_4}/> */}

            
          
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
              </div>
  </>
    )
}
export default Highlights_Insert_data;
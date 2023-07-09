import React, { useState ,useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Campaign_Insert_data = () =>{
  const[id , setId] = useState();
  const[c_id , setC_id] = useState();
  const[items , setItems] =useState([]); 
  const [ status , setStatus] = useState();
  const[pitch,setPitch] = useState();
  const [post, setPost] = React.useState(null);
  
  const navigator = useNavigate();
  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateC_id = (e) =>{
    setC_id(e.target.value)
  }
  const updateStatus = (e) =>{
    console.log(e.target.value)
    setStatus(e.target.value)
  }
  const updatePitch = (e) =>{
    setPitch(e.target.value)
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
    
    
           await authAxios.post(`${Base_url}/api/campaign/manage`, {
            
            company_id : +c_id,
            pitch : pitch,
            status :status,
            
            
            },
            )
    
    .then(( response) => {
    
      setPost(response.data);
    }
    )
    .catch((err) => {
      console.log("error");
    })
    navigator("/home/campaign")
    
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
          <div className='col-7' style={{marginTop:"170px", marginLeft:"450px", borderRadius:"20px", backgroundColor:"#BACDDB"}}>
          <form style={{padding:"50px",borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"#070A52", marginBottom:"20px"}}>Campaign Add Data</h1>
          <label for="exampleInputRegistrationnum" className="form-label">Company Name</label>      
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
              <label for="exampleInputRegistrationnum" className="form-label">Pitch</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={pitch} onChange={updatePitch}/>
            <button type="submit" className="btn btn-success" style={{marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
        </form>
        </div>
        </div>
      </>
    )
}
export default Campaign_Insert_data;
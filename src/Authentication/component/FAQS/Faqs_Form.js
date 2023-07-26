import React, { useState ,useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Faqs_Form = () =>{
  const location1 = useLocation();
  const[question, setquestion] = useState(location1.state.bio.question);
  const[answer , setanswer ]= useState(location1.state.bio.answer);
  const [campaign_id , setcampaign_id] = useState(location1.state.bio.campaign_id);
  const[items2 , setItems2] =useState([]); 

  const updatequestion = (e) =>{
    setquestion(e.target.value)
  }
  const updateanswer = (e) =>{
    setanswer(e.target.value)
  }
  
  const navigator = useNavigate();

  const add =(x)=>{
    console.log(x);
    setcampaign_id(x);
  }

  useEffect(()=>{
    

const getUploaded = async () => {
  
  try {
      const response = await authAxios.get(`${Base_url}/api/campaign/manage`);
      console.log(response.data)
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
      faqs_id : location1.state.bio.id,
      campaign_id : campaign_id,
     
      question : question ,
      answer : answer , 
       
       }
       
      await authAxios.patch(`${Base_url}/api/faqs/manage`,values)
      
     navigator("/home/faqs")
    
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
        <div className='row justify-content-center mb-5'>
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}>
          <form style={{padding:"50px", borderRadius:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update Faqs Data</h1>

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
              
              <label for="exampleInputRollnum" className="form-label">Question </label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={question} onChange={updatequestion}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Answer</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={answer} onChange={updateanswer}/>

              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
          </form>
        </div>
        </div>
                  </div>
  </>
    )
}
export default Faqs_Form;
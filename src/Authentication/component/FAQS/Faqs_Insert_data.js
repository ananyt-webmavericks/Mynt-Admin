import React, { useState  , useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Faqs_Insert_data = () =>{
  const[campaign_id , setCampaignid] = useState();
  const[question_1, setquestion_1] = useState();
  const[answer_1 , setanswer_1] = useState();
  const[question_2 , setquestion_2] = useState();
  const[answer_2, setanswer_2] = useState();
  const[items , setItems] =useState([]); 
  const[items2 , setItems2] =useState([]); 

  const navigator = useNavigate();
 
  const updatequestion_1 = (e) =>{
    setquestion_1(e.target.value)
  }
  const updateanswer_1 = (e) =>{
    setanswer_1(e.target.value)
  }
  const updatequestion_2 = (e) =>{
    setquestion_2(e.target.value)
  }
  const updateanswer_2 = (e) =>{
    setanswer_2(e.target.value)
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

  const gotoAdd = async(e) => {
    e.preventDefault();
    const values = {
      campaign_id :  campaign_id,
      faqs:[
              {
                  question:question_1,
                  answer:answer_1,
              }
              ]
    }
           await authAxios.post(`${Base_url}/api/faqs/manage`, values );
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
        <div className="row justify-content-center mb-5">
        <div
            style={{
              borderRadius: "20px",
              backgroundColor: "#BACDDB",
            }}
         
            >          <form style={{padding:"20px",borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Add Faqs Data</h1>

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

              <label for="exampleInputRollnum" className="form-label">Question</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={question_1} onChange={updatequestion_1}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Answer</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={answer_1} onChange={updateanswer_1}/>

    
            
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
                  </div>
  </>
    )
}
export default Faqs_Insert_data;
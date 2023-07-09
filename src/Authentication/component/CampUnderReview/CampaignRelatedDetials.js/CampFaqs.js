import React, { useEffect } from 'react';
import Dashboard from '../../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from '../../Base_url';
import { authAxios } from '../../../../Services/auth.service';
import { useState } from 'react';


const CampFaqs = () =>{
  const location1 = useLocation();
  const[question, setquestion] = useState();
  const[answer , setanswer ]= useState();
  const [campaign_id , setcampaign_id] = useState();
  const [faqs_id, setFaqs_id] = useState()
  const [ind, setInd] = useState() 

  const updatequestion = (e) =>{
    setquestion(e.target.value)
  }
  const updateanswer = (e) =>{
    setanswer(e.target.value)
  }
  
  const navigator = useNavigate();

  

  useEffect(()=>{
    

const getUploaded = async () => {
    setInd(location1.state.bio ? location1.state.bio.faqs.filter( (val) => {
        return (val.campaign_id === location1.state.bio.id )
    }):[])
  
}
getUploaded();
},[])

  const gotoAdd = async() => {
    const values = {
      faqs_id : +faqs_id,
      campaign_id : location1.state.bio.id,
     
      question : question ,
      answer : answer , 
       
       }
       
      await authAxios.patch(`${Base_url}/api/faqs/manage`,values)
      
      navigator(`/home/under-update/${location1.state.bio.id}`)
    
    }

    const add1 = (x) => {
        setFaqs_id(x)
      } 
  

    return(
      <>
       <div className='container-fluid'>
        <div className='row'>
            <Dashboard 
            />
        </div>
        </div>
        <div className='row'>
          <div className='col-7' style={{marginTop:"170px", marginLeft:"450px", borderRadius:"20px", backgroundColor:"#BACDDB"}}>
          <form style={{padding:"50px", borderRadius:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update Faqs Data</h1>

              <label for="exampleInputName" className="form-label">Faqs Id</label>
              <div className="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected  className="active">Select Faqs ID</option>
                    {
                      ind && ind.map((item) =>{
                        return (
                          <option onClick={()=>{add1(item.id)}} >{item.id}</option>
                        )
                      })
                    }
                  </select>
                </div>
              
              <label for="exampleInputRollnum" className="form-label">Question </label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={question} onChange={updatequestion}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Answer</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={answer} onChange={updateanswer}/>

              <button type="submit" className="btn btn-success" style={{marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
  </>
    )
}
export default CampFaqs;
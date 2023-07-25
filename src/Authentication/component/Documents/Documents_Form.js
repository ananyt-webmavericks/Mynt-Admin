import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";




const Documents_Form = () =>{
  const location1 = useLocation();
  const[document_type, setdocument_type] = useState(location1.state.bio.document_type);
  const[document_name , setdocument_name ]= useState(location1.state.bio.document_name);
  const[agreement_status , setagreement_status] = useState(location1.state.bio.agreement_status);  

  const updatedocument_type = (e) =>{
    setdocument_type(e.target.value)
  }
  const updatedocument_name = (e) =>{
    setdocument_name(e.target.value)
  }
  const updateagreement_status = (e) =>{
    setagreement_status(e.target.value)
  }
  const navigator = useNavigate();


  const gotoAdd = async() => {
    
    const values = {
      document_id : location1.state.bio.id,
     
      document_type :document_type,
      document_name : document_name,

      agreement_status : agreement_status, 
       
       }
       
      await authAxios.patch(`${Base_url}/api/documents/manage`,values)
      
     navigator("/home/documents")
    
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
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}>
          <form style={{padding:"50px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update Documents Data</h1>

              
              <label for="exampleInputRollnum" className="form-label">Document Type</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={document_type} onChange={updatedocument_type}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Document Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name} onChange={updatedocument_name}/>
              

              <label for="exampleInputRegistrationnum" className="form-label">Agreement Status</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={agreement_status} onChange={updateagreement_status}/>
            
              
          
              <button type="submit" className="btn btn-success" style={{marginTop:"30px", backgroundColor: '#1a83ff'}}>Submit</button>
          </form>
        </div>
        </div>
      
            </div>

  </>
    )
}
export default Documents_Form;
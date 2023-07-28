import React, { useEffect } from 'react';
import Dashboard from '../../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from '../../Base_url';
import { authAxios } from '../../../../Services/auth.service';
import { useState } from 'react';





const CampDocument = () =>{
  const location1 = useLocation();
  const[document_type, setdocument_type] = useState();
  const[document_name , setdocument_name ]= useState();
  const[agreement_status , setagreement_status] = useState(); 
  const [document_id, setDocument_id] = useState()
  const [ind, setInd] = useState() 
  const [document_url, setdocumentUrl] = useState();
  const [document, setdocument] = useState();



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

  useEffect( () => {
    setInd(location1.state.bio ? location1.state.bio.company_id.documents.filter( (val) => {
      return (val.company_id === location1.state.bio.company_id.id )
  }):[])
  })

  const updateDocument = async (e) => {
    setdocument(e.target.files?.[0] ?? null);
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
          setdocumentUrl(response.data?.message ?? '');
        })
        .catch((err) => {
          console.log("error");
          setdocumentUrl(null);
        });
    } else {
      setdocumentUrl(null);
    }
  };
  const gotoAdd = async() => {
    
    const values = {
      document_id : document_id,
     
      document_type :document_type,
      document_name : document_name,

      agreement_status : agreement_status, 
       
       }
       
      await authAxios.patch(`${Base_url}/api/documents/manage`,values)
      
      navigator(`/home/under-update/${location1.state.bio.id}`)
    
    }
    const add1 = (x) => {
      setDocument_id(x)
    } 
  

    return(
      <>
       <div className='container-fluid'>
        {/* <div className='row'>
          
            <Dashboard 
           
            />
          
        </div> */}
        <div className='row'>
        <div style={{margin:'auto',backgroundColor:"#BACDDB"}}>
          <form style={{padding:"50px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update Documents Data</h1>

              <label for="exampleInputName" className="form-label">Document Id</label>
              <div className="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={(e)=>{add1(e.target.value)}} value={document_id}>
                    <option selected  className="active">Select Document ID</option>
                    {
                      ind && ind.map((item) =>{
                        return (
                          <option 
                          // onClick={()=>{add1(item.id)}}
                          value={item.id}
                           >{item.id}</option>
                          )
                        })
                      }
                  </select>
                </div>

              <label for="exampleInputRollnum" className="form-label">Document Type</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={document_type} onChange={updatedocument_type}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Document Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name} onChange={updatedocument_name}/>
              

              <label for="exampleInputRegistrationnum" className="form-label">Agreement Status</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={agreement_status} onChange={updateagreement_status}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">
                Document
              </label>
              <input
                onChange={updateDocument}
                type="file"
                className="form-control"
                id="exampleInputBranch"
              />
              <div className="pt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  defaultValue={document_url}
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
export default CampDocument;
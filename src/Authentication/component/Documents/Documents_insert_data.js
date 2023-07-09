import React, { useState, useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Documents_insert_data = () =>{
  const[id , setid] = useState();
  const[company_id , setcompany_id] = useState();
  const[document_type_1, setdocument_type_1] = useState();
  const[document_name_1 , setdocument_name_1] = useState();
  const[agreement_status_1 , setagreement_status_1] = useState();
  const[document_type_2, setdocument_type_2] = useState();
  const[document_name_2 , setdocument_name_2] = useState();
  const[agreement_status_2 , setagreement_status_2] = useState();
  const[document_url1 , setdocument_url1] = useState();
  const[document_url2 , setdocument_url2] = useState();
  const[items , setItems] =useState([]); 
  
  
  
  

  const navigator = useNavigate();

  const updateid = (e) =>{
    setid(e.target.value)
  }

  const updatecompany_id = (e) =>{
    setcompany_id(e.target.value)
  }
  const updatedocument_type_1 = (e) =>{
    setdocument_type_1(e.target.value)
  }
  const updatedocument_name_1 = (e) =>{
    setdocument_name_1(e.target.value)
  }
  const updateagreement_status_1 = (e) =>{
    setagreement_status_1(e.target.value)
  }
  const updatedocument_type_2 = (e) =>{
    setdocument_type_2(e.target.value)
  }
  const updatedocument_name_2 = (e) =>{
    setdocument_name_2(e.target.value)
  }
  const updateagreement_status_2 = (e) =>{
    setagreement_status_2(e.target.value)
  }
  const updatedocument_url1 = (e) =>{
    setdocument_url1(e.target.value)
  }
  const updatedocument_url2 = (e) =>{
    setdocument_url2(e.target.value)
  }
  const updateItems = (e) =>{
    setItems(e.target.value)
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
  

  const gotoAdd = async(e) => {

    e.preventDefault();
      
    const values = {
        document_id:+id,
        company_id:+company_id,
        documents:[
            {document_type:"AGREEMENTS",
            document_name:document_name_1,
            agreement_status:"SIGNED BY ADMIN",
            document_url:document_url1},
            {document_type:"AGREEMENTS",
            document_name:document_name_2,
            agreement_status:"SIGNED BY ADMIN",
            document_url:document_url2}
            
        ]
    }
    
    
    
    
           await authAxios.post(`${Base_url}/api/documents/manage`, values  );
    navigator("/home/documents")
    
    
    
    
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
          <form style={{padding:"40px",borderRadius:"20px"}} onSubmit={gotoAdd}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Add Documents Data</h1>

              <label  className="form-label">Company Name</label>
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

              <label for="exampleInputRollnum" className="form-label">Document Type 1</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={document_type_1} onChange={updatedocument_type_1}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Document Name 1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name_1} onChange={updatedocument_name_1}/>

              <label for="exampleInputRegistrationnum" className="form-label">Agreement Status 1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={agreement_status_1} onChange={updateagreement_status_1}/>

              <label for="exampleInputRegistrationnum" className="form-label">Document url 1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_url1} onChange={updatedocument_url1}/>

              <label for="exampleInputRollnum" className="form-label">Document Type 2</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={document_type_2} onChange={updatedocument_type_2}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Document Name 2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name_2} onChange={updatedocument_name_2}/>

              <label for="exampleInputRegistrationnum" className="form-label">Agreement Status 2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={agreement_status_2} onChange={updateagreement_status_2}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Document Url 2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_url2} onChange={updatedocument_url2}/>

              
          
              <button type="submit" className="btn btn-success" style={{marginTop:"30px"}} >Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Documents_insert_data;
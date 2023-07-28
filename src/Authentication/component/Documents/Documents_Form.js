import React, { useState, useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";




const Documents_Form = () =>{
  const location1 = useLocation();
  const[document_type, setdocumentType] = useState(location1.state.bio.document_type);
  const[document_name , setdocument_name ]= useState(location1.state.bio.document_name);
  const[agreement_status , setagreement_status] = useState(location1.state.bio.agreement_status);  
  const [company_id, setcompany_id] = useState(location1.state.bio.company_id);
  const [document_url, setdocumentUrl] = useState();
  const [items, setItems] = useState([]);
  const [document, setdocument] = useState();



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

 
  const add = (x) => {
    console.log(x);
    setcompany_id(x);
  };
  const updatedocument_type_1 = (e) => {
    setdocumentType(e.target.value);
  };
  const updatedocument_name = (e) =>{
    setdocument_name(e.target.value)
  }
  const updateagreement_status = (e) =>{
    setagreement_status(e.target.value)
  }

  const updateItems = (e) => {
    setItems(e.target.value);
  };
  const navigator = useNavigate();
  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(`${Base_url}/api/company/manage`);
        console.log(response.data);
        setItems(response.data);
        return response.data;
      } catch (error) {
        if (error) {
          console.log(error);
        }
        return error;
      }
    };
    getUploadedDocs();
  }, []);

  const gotoAdd = async() => {
    
    const values = {
      
      company_id: company_id,
      documents: [
        {
          document_type: document_type,
          document_name: document_name,
          agreement_status: agreement_status,
          document_url : document_url
        },
      ],
    };
       
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
              <label className="form-label">Company Name</label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  value={company_id}
                  onChange={(e)=>add(e.target.value)}
                >
                  <option selected className="active">
                    Select Company Name
                  </option>
                  {items &&
                    items.map((item) => {
                      return (
                        <option
                          // onClick={() => {
                          //   add(item.user_id);
                          // }}
                          value={item.user_id}
                        >
                          {item.company_name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <label for="exampleInputRollnum" className="form-label">
                Document Type
              </label>
             
              <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  value={document_type}
                  onChange={updatedocument_type_1}
                >
                  <option  className="active" value={"AGREEMENTS"}>
                  AGREEMENTS
                  </option>
                  <option  className="active" value={"DOCUMENTS"}>
                  DOCUMENTS
                  </option>
                </select>

              
              <label for="exampleInputRegistrationnum" className="form-label">
                Agreement Status
              </label>
              
               <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  value={agreement_status}
                  onChange={updateagreement_status}
                >
                  <option  className="active" value={"SIGNED BY ADMIN"}>
                  SIGNED BY ADMIN
                  </option>
                  <option  className="active" value={"SIGNED BY FOUNDER"}>
                  SIGNED BY FOUNDER
                  </option>
                  <option  className="active" value={"UPLOADED BY ADMIN"}>
                  UPLOADED BY ADMIN
                  </option>
                </select>
            
              <label for="exampleInputRegistrationnum" className="form-label">Document Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name} onChange={updatedocument_name}/>
              

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
export default Documents_Form;
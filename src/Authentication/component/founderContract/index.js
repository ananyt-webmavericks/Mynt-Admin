import React from "react";
import { useState } from "react";
import { authAxios } from "../../../Services/auth.service";
import Base_url from "../Base_url";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FounderContract = () => {
  const navigator = useNavigate();
  const [comp_id, setComp_id] = useState();
  // const [contract_url, setcontract_url] = useState();
  const [contract_name, setcontract_name] = useState();
  const [signer_name,setSignersName] = useState();
  const [signer_email, setSignersEmail] = useState();
  const [reminder_time, setReminderTime] = useState();
  const [post, setPost] = React.useState(null);
  const [items, setItems] = useState([]);
  const [pitch, setPitch] = useState(null);
  const [pitchUrl, setPitchUrl] = useState(null);
  const [page,setPages] = useState('')


  // const [values,setValues] = useState({
  //   company_id:comp_id,
  //   contract_name:contract_name,
  //   contract_url:pitchUrl,
  //   signer_name:signer_name,
  //   signer_email:signer_email,
  //   reminder:reminder_time
  //   // "page_no":
  // });

  const updateCompanyId = (e) => {
 setComp_id(e.target.value)
  }
  const updatecontractName = (e) => {
 setcontract_name(e.target.value)
  }
  const updateSignerName = (e) => {
 setSignersName(e.target.value)
  }
  const updateSignerEmail = (e) => {
 setSignersEmail(e.target.value)
  }
  const updateRemainderTime = (e) => {
 setReminderTime(e.target.value)
  }

  const [selectedFile,setSelectedFile] = useState(null)

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    const char = String.fromCharCode(charCode);

    // Allow numbers (0-9) and comma (,) and some special keys like Backspace and Delete
    if (!(/[0-9,]/.test(char)) && charCode !== 8 && charCode !== 44) {
      event.preventDefault();
    }
  };

  const gotoAdd = async (e) => {
    e.preventDefault();

    await authAxios
      .post(`${Base_url}/api/documents/initiate-contract-with-founder`, {
        company_id:comp_id,
        contract_name:contract_name,
        contract_url:pitchUrl,
        signer_name:signer_name,
        signer_email:signer_email,
        reminder:reminder_time,
        page_no: page.split(',')
      })

      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log("error");
      });
    navigator("/home/campaign");
  };

  const add = (x) => {
    setComp_id(x);
  };

  const updatePitch = async (e) => {
    setPitch(e.target.files?.[0] ?? null);
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
          setPitchUrl(response.data?.message ?? '');
        })
        .catch((err) => {
          console.log("error");
          setPitchUrl(null);
        });
    } else {
      setPitchUrl(null);
    }
  };
  
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

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mb-5">
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}>
            <form
              style={{ padding: "40px", borderRadius: "20px" }}
              onSubmit={(e) => {
                e.preventDefault();
                gotoAdd();
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  color: "#070A52",
                  marginBottom: "20px",
                }}
              >
                Contract With Founder
              </h1>
              <label for="exampleInputRegistrationnum" className="form-label">
                Company Name
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={updateCompanyId}
                  value={comp_id}
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
              <label for="exampleInputRegistrationnum" className="form-label">
                Upload Document
              </label>
              <input
                onChange={updatePitch}
                type="file"
                className="form-control"
                id="exampleInputBranch"
              />
              <div className="pt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  defaultValue={pitchUrl}
                  // onChange={updatePitch}
                  disabled
                />
              </div>

              <label for="exampleInput" className="form-label">
                Contract Name
              </label>
              <input
                type="form"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={contract_name}
                onChange={updatecontractName}
              />

              <label for="exampleInput" className="form-label">
              Signer's Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={signer_name}
                onChange={updateSignerName}
              />
              <label for="exampleInput" className="form-label">
              Signer's Email
              </label>
              <input
                type="link"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={signer_email}
                onChange={updateSignerEmail}
              />
              <label for="exampleInput" className="form-label">
              Reminder to Sign Contract ( in min. )
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={reminder_time}
                onChange={updateRemainderTime}
              />
              <label for="exampleInput" className="form-label">
                Pages ( Enter common seperated values )
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={page}
                onKeyPress={handleKeyPress} 
                onChange={(e)=>{setPages(e.target.value)}}
              />
             
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginTop: "30px", backgroundColor: "#1a83ff" }}
                onClick={gotoAdd}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        
      </div>

      
    </>
  );
};

export default FounderContract;

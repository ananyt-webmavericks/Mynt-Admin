import React from "react";
import { useState } from "react";
import { authAxios } from "../../../Services/auth.service";
import Base_url from "../Base_url";
import { useEffect } from "react";

const FounderContract = () => {

  const [comp_id, setComp_id] = useState();
  
  const [post, setPost] = React.useState(null);
  const [items, setItems] = useState([]);


  const [values,setValues] = useState({
    contract_url: '',
    contract_name: '',
    signers_name: '',
    signers_email: '',
    remainder_time: '',
    doc_url : ''
  })

  const [selectedFile,setSelectedFile] = useState(null)

  const gotoAdd = async (e) => {
    e.preventDefault();

    await authAxios
      .post(`${Base_url}/api/campaign/manage`, {
        company_id: comp_id,

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
    setSelectedFile(e.target.files?.[0] ?? null);
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
          setValues({...values, doc_url : response.data?.message ?? ''});
        })
        .catch((err) => {
          console.log("error");
          setValues({...values, doc_url : ''});
        });
    } else {
      setValues({...values, doc_url :''});
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
                  onChange={(e)=>add(e.target.value)}
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
                  defaultValue={values.doc_url}
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
                value={values.contract_name}
                onChange={(e)=>setValues({...values,contract_name : e.target.value})}
              />

              <label for="exampleInput" className="form-label">
              Signer's Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={values.signers_name}
                onChange={(e)=>setValues({...values,signers_name: e.target.value})}
              />
              <label for="exampleInput" className="form-label">
              Signer's Email
              </label>
              <input
                type="link"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={values.signers_email}
                onChange={(e)=>setValues({...values,signers_email: e.target.value})}
              />
              <label for="exampleInput" className="form-label">
              Reminder to Sign Contract ( in min. )
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={values.remainder_time}
                onChange={(e)=>setValues({...values,remainder_time: e.target.value})}
              />
             
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginTop: "30px", backgroundColor: "#1a83ff" }}
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

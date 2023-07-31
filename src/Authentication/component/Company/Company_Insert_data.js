import React, { useEffect, useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import { toast } from "react-toastify";


const Company_Insert_data = () => {
  const [logo, setLogo] = useState();
  const location1 = useLocation()

  const [founder_linked_in_profile, setfounder_linked_in_profile] = useState();
  const [company, setCompany] = useState();
  const [company_linked_in_profile, setcompany_linked_in_profile] = useState()
  const [web, setWeb] = useState();
  const [pre, setPre] = useState();
  const [pro, setPro] = useState();
  const [traction, setTraction] = useState();
  const [revenue, setRevenue] = useState();
  const [reason_com, setReason_com] = useState();
  const [reason_mynt, setReason_mynt] = useState();
  const [exist, setExist] = useState();
  const [pitch, setPitch] = useState();
  const [pitchUrl, setPitchUrl] = useState(null);
  const [logoUrl,setLogoUrl] = useState(null)
  const[company_logo,setcompany_logo] = useState();
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState([]);



  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(`${Base_url}/api/users/manage?user_type=FOUNDER`);
        console.log(response.data);
        setUserData(response.data);
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


  const navigator = useNavigate();
  // const updateLogo = (e) => {
  //   setLogo(e.target.value)
  // }
  const updatefounder_linked_in_profile = (e) => {
    setfounder_linked_in_profile(e.target.value)
  }
  const updatecompany = (e) => {
    setCompany(e.target.value)
  }
  const updatecompany_linked_in_profile = (e) => {
    setcompany_linked_in_profile(e.target.value)
  }
  const updateWeb = (e) => {
    setWeb(e.target.value)
  }
  const updatePre = (e) => {
    setPre(e.target.value)
  }
  const updatePro = (e) => {
    setPro(e.target.value)
  }
  const updateTraction = (e) => {
    setTraction(e.target.value)
  }
  const updateRevenue = (e) => {
    setRevenue(e.target.value)
  }
  const updateReason_com = (e) => {
    setReason_com(e.target.value)
  }
  const updateReason_mynt = (e) => {
    setReason_mynt(e.target.value)
  }
  const updateExist = (e) => {
    setExist(e.target.value)
  }

  const uploadFiles = async (e,setter,allowedFiles) => {
    // const allowedFiles = ['jpg','jpeg','png'];
    const fileType = e.target.files?.[0] ? e.target.files?.[0]?.name.split('.').pop() : null
    if(allowedFiles.indexOf(fileType?.toLowerCase()) === -1 || !fileType){
      toast.error("Please select valid file");
      setcompany_logo(null);
      setter(null);
      return null
    }
    setcompany_logo(e.target.files?.[0] ?? null);
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
          setter(response.data?.message ?? "");
        })
        .catch((err) => {
          console.log("error");
          setter(null);
        });
    } else {
      setter(null);
    }
  };




  
  const gotoAdd = async (e) => {

    e.preventDefault();

    if(!pitchUrl){
      toast.error("Please select valid file in pitch");
      return
    }

    await authAxios.post(`${Base_url}/api/company/create`, {

      company_logo: logoUrl,
      founder_linked_in_profile: founder_linked_in_profile,
      company_name: company,

      company_linked_in_profile: company_linked_in_profile,
      website_url: web,
      previous_funding: pre,
      product_description: pro,
      traction_description: traction,
      revenue: revenue,
      reason_for_community_round: reason_com,
      reason_for_mynt: reason_mynt,
      existing_commitments: exist,
      company_pitch: pitchUrl,
      user_id: userId

    },
    )
    navigator("/home/company");
  }
  return (
    <>
      <div className='container-fluid'>
        {/* <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div> */}
        <div className='row justify-content-center mb-5'>
          <div style={{
            borderRadius: "20px",
            backgroundColor: "#BACDDB",
          }}>
            <form style={{ padding: "50px", borderRadius: "20px" }}>
              <h1 style={{ textAlign: "center", color: "#070A52" }}>Add Company Data</h1>


              <label for="exampleInputRegistrationnum" className="form-label">
               User
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={(e) => setUserId(e.target.value)}
                  value={userId}
                >
                  <option selected className="active">
                    Select User
                  </option>
                  {userData &&
                    userData.map((item) => {
                      return (
                        <option
                          // onClick={() => {
                          //   add(item.user_id);
                          // }}
                          value={item.id}
                        >
                          {`${item.first_name} ${item.last_name}`}
                        </option>
                      );
                    })}
                </select>
              </div>
              <label for="exampleInputRegistrationnum" className="form-label">
                Company Logo (jpeg, jpg, png)
              </label>
              <input
                onChange={(e)=>uploadFiles(e,setLogoUrl,['jpg','png','jpeg'])}
                type="file"
                className="form-control"
                id="exampleInputBranch"
                accept=".jpg, .jpeg, .png"
              />
              <div className="pt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  defaultValue={logoUrl}
                  // onChange={updatePitch}
                  disabled
                />
                </div>

                

              <label for="exampleInputRegistrationnum" className="form-label">Founder LinkedIn Profile</label>
              <input type="link" className="form-control" id="exampleInputeRegistrationnum" value={founder_linked_in_profile} onChange={updatefounder_linked_in_profile} />


              <label for="exampleInputRegistrationnum" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="exampleInputeRegistrationnum" value={company} onChange={updatecompany} />


              <label for="exampleInputBranch" className="form-label">Company LinkedIn Profile</label>
              <input type="link" className="form-control" id="exampleInputBranch" value={company_linked_in_profile} onChange={updatecompany_linked_in_profile} />


              <label for="exampleInputpassword" className="form-label">Website Url</label>
              <input type="text" className="form-control" id="exampleInputPassword1" value={web} onChange={updateWeb} />

              <label for="exampleInputBranch" className="form-label">Previous Funding</label>
              <input type="text" className="form-control" id="exampleInputBranch" value={pre} onChange={updatePre} />

              <label for="exampleInputBranch" className="form-label">Production Description</label>
              <input type="text" className="form-control" id="exampleInputBranch" value={pro} onChange={updatePro} />

              <label for="exampleInputBranch" className="form-label">Traction Description</label>
              <input type="text" className="form-control" id="exampleInputBranch" value={traction} onChange={updateTraction} />

              <label for="exampleInputBranch" className="form-label">Revenue</label>
              <input type="number" className="form-control" id="exampleInputBranch" value={revenue} onChange={updateRevenue} />

              <label for="exampleInputBranch" className="form-label">Reason For Community Round</label>
              <input type="text" className="form-control" id="exampleInputBranch" value={reason_com} onChange={updateReason_com} />

              <label for="exampleInputBranch" className="form-label">Reason For Mynt</label>
              <input type="text" className="form-control" id="exampleInputBranch" value={reason_mynt} onChange={updateReason_mynt} />

              <label for="exampleInputBranch" className="form-label">Existing Commitments</label>
              <input type="text" className="form-control" id="exampleInputBranch" value={exist} onChange={updateExist} />
              {/* <label for="exampleInputRollnum" className="form-label">
                Company Logo (jpeg, png, jpg) */}

              <label for="exampleInputBranch" className="form-label">Company Pitch (pdf)</label>
              {/* <input type="link" className="form-control" id="exampleInputBranch" value={pitch} onChange={updatePitch} /> */}
              <input
                onChange={(e)=>uploadFiles(e,setPitchUrl,['pdf'])}
                type="file"
                className="form-control"
                id="exampleInputBranch"
                accept=".pdf"
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
              <button type="submit" className="btn btn-success" style={{ marginTop: "30px", backgroundColor: '#1a83ff' }} onClick={gotoAdd}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Company_Insert_data;
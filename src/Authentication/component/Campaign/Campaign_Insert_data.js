import React, { useState, useEffect } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import { toast } from "react-toastify";

const Campaign_Insert_data = () => {
  const [id, setId] = useState();
  const [c_id, setC_id] = useState();
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState();
  const [pitch, setPitch] = useState();
  const [total_investors, setTotalInvestors] = useState();
  const [total_raised, setTotalRaised] = useState();
  const [post, setPost] = React.useState(null);
  const [pitchUrl, setPitchUrl] = useState(null);

  const navigator = useNavigate();
  const updateId = (e) => {
    setId(e.target.value);
  };
  const updateC_id = (e) => {
    setC_id(e.target.value);
  };
  const updateTotalInvestor = (e) => {
    setTotalInvestors(e.target.value);
  };
  const updateRaised = (e) => {
    setTotalRaised(e.target.value);
  };
  const updateStatus = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  const updatePitch = async (e) => {
    const allowedFiles = ["pdf"];
    const fileType = e.target.files?.[0]
      ? e.target.files?.[0]?.name.split(".").pop()
      : null;
    if (allowedFiles.indexOf(fileType?.toLowerCase()) === -1 || !fileType) {
      toast.error("Please select valid file");
      setPitch(null);
      setPitchUrl(null);
      return null;
    }
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
          setPitchUrl(response.data?.message ?? "");
        })
        .catch((err) => {
          console.log("error");
          setPitchUrl(null);
        });
    } else {
      setPitchUrl(null);
    }
  };

  const add = (x) => {
    setC_id(x);
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

  const gotoAdd = async (e) => {
    e.preventDefault();
    if (!pitchUrl) {
      toast.error("Please select valid file");
      return;
    }

    await authAxios
      .post(`${Base_url}/api/campaign/manage`, {
        company_id: c_id,
        pitch: pitchUrl,
        status: status,
        total_investors: total_investors,
        total_raised: total_raised,
      })

      .then((response) => {
        setPost(response.data);
        if (response.status === 200 || response.status === 201) {
          navigator("/home/campaign");
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mb-5">
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}>
            <form style={{ padding: "50px", borderRadius: "20px" }}>
              <h1
                style={{
                  textAlign: "center",
                  color: "#070A52",
                  marginBottom: "20px",
                }}
              >
                Campaign Add Data
              </h1>
              <label for="exampleInputRegistrationnum" className="form-label">
                Company Name
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={(e) => add(e.target.value)}
                  value={c_id}
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
                          value={item.id}
                        >
                          {item.company_name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <label for="exampleInputRegistrationnum" className="form-label">
                Pitch (pdf)
              </label>
              <input
                onChange={updatePitch}
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
                  value={pitchUrl}
                  // onChange={updatePitch}
                  disabled
                />
              </div>
              <label for="exampleInputName" className="form-label">
                Total Investors
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputName"
                value={total_investors}
                onChange={updateTotalInvestor}
              />
              <label for="exampleInputName" className="form-label">
                Total Raised
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputName"
                value={total_raised}
                onChange={updateRaised}
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
export default Campaign_Insert_data;

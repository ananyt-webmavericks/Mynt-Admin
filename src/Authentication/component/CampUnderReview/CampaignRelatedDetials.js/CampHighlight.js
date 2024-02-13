import React, { useEffect } from "react";
import Dashboard from "../../../Dashboard/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../../Base_url";
import { authAxios } from "../../../../Services/auth.service";
import { useState } from "react";
import { toast } from "react-toastify";

const CampHighlight = () => {
  const location1 = useLocation();
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [highlight_image, sethighlight_image] = useState();
  const [status, setStatus] = useState();
  const [highlight_id, setHighlight_id] = useState();
  const [ind, setInd] = useState();
  const [highlight_image_url, sethighlightImageUrl] = useState();

  const updatetitle = (e) => {
    settitle(e.target.value);
  };
  const updatedescription = (e) => {
    setdescription(e.target.value);
  };
  const updatehighlight_image = (e) => {
    sethighlight_image(e.target.value);
  };
  const updateStatus = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  const navigator = useNavigate();

  console.log('location highlight', location1.state)
  const back = () => {
    navigator(`/home/under-update/${location1.state.bio.id}`, { state: { bio: location1.state.bio } });
  };
  useEffect(() => {
    const getUploaded = async () => {
      setInd(
        location1.state.bio
          ? location1.state.bio.higlights.filter((val) => {
            return val.campaign_id === location1.state.bio.id;
          })
          : []
      );
    };
    getUploaded();
  }, []);

  const gotoAdd = async () => {
    const values = {
      highlight_id: highlight_id,
      campaign_id: location1.state.bio.id,
      title: title,
      description: description,
      highlight_image: highlight_image_url,
      status: status,
    };

    await authAxios.patch(`${Base_url}/api/highlights/manage`, values);
    navigator(`/home/under-update/${location1.state.bio.id}`);
  };

  const add1 = (x) => {
    setHighlight_id(x);
    const hg = ind?.find((i) => i.id == x) ?? {};
    console.log(hg);
    settitle(hg?.title ?? "");
    setdescription(hg?.description ?? "");
    sethighlight_image(hg?.highlight_image ?? "");

    setStatus(hg?.status ?? "");
  };

  const updateImage = async (e) => {
    const allowedFiles = ["jpg", "jpeg", "png"];
    const fileType = e.target.files?.[0]
      ? e.target.files?.[0]?.name.split(".").pop()
      : null;
    if (allowedFiles.indexOf(fileType?.toLowerCase()) === -1 || !fileType) {
      toast.error("Please select valid file");
      sethighlight_image(null);
      sethighlightImageUrl(null);
      return null;
    }
    sethighlight_image(e.target.files?.[0] ?? null);
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
          sethighlightImageUrl(response.data?.message ?? "");
        })
        .catch((err) => {
          console.log("error");
          sethighlightImageUrl(null);
        });
    } else {
      sethighlightImageUrl(null);
    }
  };
  return (
    <>
      <div className="container-fluid">
        {/* <div className='row'>
            <Dashboard 
         
            />
        </div> */}
        <div className="row">
          <div style={{ margin: "auto", backgroundColor: "#BACDDB" }}>
            <form
              style={{ padding: "40px", borderRadius: "20px" }}
              onSubmit={(e) => {
                e.preventDefault();
                gotoAdd();
              }}
            >
              <h1 style={{ textAlign: "center", color: "#070A52" }}>
                Update HighLights Data
              </h1>
              <label for="exampleInputName" className="form-label">
                Highlight Id
              </label>
              <div className="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={(e) => {
                    add1(e.target.value);
                  }}
                  value={highlight_id}
                >
                  <option selected className="active">
                    Select Highlight ID
                  </option>
                  {ind &&
                    ind.map((item) => {
                      return (
                        <option
                          // onClick={()=>{add1(item.id)}}
                          value={item.id}
                        >
                          {item.id}
                        </option>
                      );
                    })}
                </select>
              </div>
              <label for="exampleInput" className="form-label">
                Status
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  value={status}
                >
                  <option selected className="active">
                    Select Option
                  </option>
                  <option onClick={updateStatus}>APPROVED</option>
                  <option onClick={updateStatus}>PENDING</option>
                </select>
              </div>
              <label for="exampleInputRollnum" className="form-label">
                Title{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputRollnum"
                value={title}
                onChange={updatetitle}
              />
              <label for="exampleInputRegistrationnum" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={description}
                onChange={updatedescription}
              />
              {/* <label for="exampleInputRollnum" className="form-label">HighLight Image</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={highlight_image} onChange={updatehighlight_image}/> */}
              <label className="form-label">
                HighLight Image (jpeg, png, jpg)
              </label>
              <input
                onChange={updateImage}
                type="file"
                className="form-control"
                id="exampleInputBranch"
                accept=".jpg,.png,.jpeg"
              />
              <div className="pt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  // defaultValue={highlight_image_url}
                  value={highlight_image}
                  // onChange={updatePitch}
                  disabled
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
                style={{
                  marginTop: "30px",
                  backgroundColor: "#1a83ff",
                  marginRight: "20px",
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={back}
                className="btn btn-success"
                style={{ marginTop: "30px", backgroundColor: "#1a83ff" }}
              >
                Back
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CampHighlight;

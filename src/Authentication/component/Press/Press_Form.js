import React, { useState, useEffect } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";
import { toast } from "react-toastify";

const Press_Form = () => {
  const location1 = useLocation();
  const navigator = useNavigate();
  const [title, setTitle] = useState(location1.state.bio.title);
  const [link, setLink] = useState(location1.state.bio.link);
  const [description, setDescription] = useState(
    location1.state.bio.description
  );
  const [banner, setBanner] = useState(location1.state.bio.banner);
  const [company_id, setcompany_id] = useState(location1.state.bio.company_id);
  const [items, setItems] = useState();
  const [pitchUrl, setPitchUrl] = useState(null);
  const [pitch, setPitch] = useState();

  const [banner1, setBanner1] = useState(
    Array.isArray(location1.state.bio.banner_images)
      ? location1.state.bio?.banner_images?.[0] ?? ""
      : location1.state.bio?.banner_images
  );
  const [banner2, setBanner2] = useState(
    Array.isArray(location1.state.bio.banner_images)
      ? location1.state.bio.banner_images?.[1] ?? ""
      : ""
  );
  const [banner3, setBanner3] = useState(
    Array.isArray(location1.state.bio.banner_images)
      ? location1.state.bio.banner_images?.[2] ?? ""
      : ""
  );

  const updateBannerImage = async (e, setter) => {
    const allowedFiles = ["jpg", "jpeg", "png"];
    const fileType = e.target.files?.[0]
      ? e.target.files?.[0]?.name.split(".").pop()
      : null;
    if (allowedFiles.indexOf(fileType?.toLowerCase()) === -1 || !fileType) {
      toast.error("Please select valid file");
      setPitch(null);
      setter(null);
      return null;
    }
    // setPitch(e.target.files?.[0] ?? null);
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

  const back = () => {
    navigator("/home/press");
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateLink = (e) => {
    setLink(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  const updateBanner = (e) => {
    setBanner(e.target.value);
  };

  const add = (x) => {
    console.log(x);
    setcompany_id(x);
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

  const gotoAdd = async () => {
    const banner = [banner1, banner2, banner3];
    const values = {
      press_id: location1.state.bio.id,
      title: title,
      link: link,
      description: description,
      banners: banner.filter((i) => i),
      company_id: company_id,
    };

    await authAxios.patch(`${Base_url}/api/press/manage`, values);

    navigator("/home/press");
  };

  return (
    <>
      <div className="container-fluid">
        {/* <div className='row'>
            <Dashboard 
            f1 = {true}
            f2 = {false}
            />
        </div> */}
        <div className="row justify-content-center mb-5">
          <div style={{ borderRadius: "20px", backgroundColor: "#BACDDB" }}>
            <form
              style={{
                padding: "40px",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
              onSubmit={(e) => {
                e.preventDefault();
                gotoAdd();
              }}
            >
              <h1 style={{ textAlign: "center", color: "#070A52" }}>
                Update Press Data
              </h1>

              <label for="exampleInputName" className="form-label">
                Company Name
              </label>
              <div class="input-group">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  onChange={(e) => {
                    add(e.target.value);
                  }}
                  value={company_id}
                >
                  <option selected className="active">
                    Select Company Name
                  </option>
                  {items &&
                    items.map((item) => {
                      return (
                        <option
                          // onClick={()=>{add(item.user_id)}}
                          value={item.id}
                        >
                          {item.company_name}
                        </option>
                      );
                    })}
                </select>
              </div>

              <label for="exampleInputRollnum" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputRollnum"
                value={title}
                onChange={updateTitle}
              />

              <label for="exampleInputRegistrationnum" className="form-label">
                Link
              </label>
              <input
                type="link"
                className="form-control"
                id="exampleInputeRegistrationnum"
                value={link}
                onChange={updateLink}
              />

              <label for="exampleInputBranch" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputBranch"
                value={description}
                onChange={updateDescription}
              />

              <label for="exampleInputRegistrationnum" className="form-label">
                Banners (jpeg, png, jpg)
              </label>
              <input
                onChange={(e) => updateBannerImage(e, setBanner1)}
                type="file"
                className="form-control"
                id="exampleInputBranch"
                accept=".jpg,.png,.jpeg"
              />
              <div className="pt-3 pb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  value={banner1}
                  // onChange={updatePitch}
                  disabled
                />
              </div>
              <input
                onChange={(e) => updateBannerImage(e, setBanner2)}
                type="file"
                className="form-control"
                id="exampleInputBranch"
                accept=".jpg,.png,.jpeg"
              />
              <div className="pt-3 pb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputeRegistrationnum"
                  value={banner2}
                  // onChange={updatePitch}
                  disabled
                />
              </div>
              <input
                onChange={(e) => updateBannerImage(e, setBanner3)}
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
                  value={banner3}
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Press_Form;

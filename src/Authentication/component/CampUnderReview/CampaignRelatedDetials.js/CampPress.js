import React, { useEffect } from "react";
import Dashboard from "../../../Dashboard/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../../Base_url";
import { authAxios } from "../../../../Services/auth.service";
import { useState } from "react";
import { toast } from "react-toastify";

const CampPress = () => {
  const location1 = useLocation();
  const navigator = useNavigate();
  const [title, setTitle] = useState();
  const [link, setLink] = useState();
  const [description, setDescription] = useState();
  const [banner, setBanner] = useState();
  const [press_id, setPress_id] = useState();
  const [ind, setInd] = useState();
  //
  const [banner1, setBanner1] = useState(null);
  const [banner2, setBanner2] = useState(null);
  const [banner3, setBanner3] = useState(null);

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
  const back = () => {
    navigator(`/home/under-update/${location1.state.bio.id}`, {
      state: { bio: location1.state.bio },
    });
  };

  useEffect(() => {
    const getUploadedDocs = async () => {
      setInd(
        location1.state.bio
          ? location1.state.bio.company_id.press.filter((val) => {
              return val.company_id === location1.state.bio.company_id.id;
            })
          : []
      );
    };
    getUploadedDocs();
  }, []);

  const updateBannerImage = async (e, setter) => {
    const allowedFiles = ["jpg", "jpeg", "png"];
    const fileType = e.target.files?.[0]
      ? e.target.files?.[0]?.name.split(".").pop()
      : null;
    if (allowedFiles.indexOf(fileType?.toLowerCase()) === -1 || !fileType) {
      toast.error("Please select valid file");
      setter(null);
      return null;
    }
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

  const gotoAdd = async () => {
    const banner = [banner1, banner2, banner3];

    const values = {
      press_id: press_id,
      title: title,
      link: link,
      description: description,
      banner: banner.filter((i) => i),
      company_id: location1.state.bio.company_id.press[0].company_id,
    };

    await authAxios.patch(`${Base_url}/api/press/manage`, values);

    navigator(`/home/under-update/${location1.state.bio.id}`, {
      state: { bio: location1.state.bio },
    });
  };

  const add1 = (x) => {
    setPress_id(x);
    const ps = ind?.find((i) => i.id == x) ?? {};
    setTitle(ps?.title ?? "");
    setLink(ps?.link ?? "");
    setDescription(ps?.description ?? "");
    if (Array.isArray(ps?.banner_images)) {
      setBanner1(ps?.banner_images?.[0] ?? "");
      setBanner2(ps?.banner_images?.[1] ?? "");
      setBanner3(ps?.banner_images?.[2] ?? "");
    } else {
      setBanner1(ps?.banner_images ?? "");
    }
  };

  return (
    <>
      <div className="container-fluid">
        {/* <div className='row'>
            <Dashboard 
           
            />
        </div> */}
      </div>
      <div className="row">
        <div style={{ margin: "auto", backgroundColor: "#BACDDB" }}>
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
              Press Id
            </label>
            <div className="input-group">
              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                value={press_id}
                onChange={(e) => {
                  add1(e.target.value);
                }}
              >
                <option selected className="active">
                  Select Press ID
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
                defaultValue={banner1}
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
                defaultValue={banner2}
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
                defaultValue={banner3}
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
    </>
  );
};
export default CampPress;

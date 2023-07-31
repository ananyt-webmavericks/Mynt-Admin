import React, { useEffect } from "react";
import Dashboard from "../../../Dashboard/Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../../Base_url";
import { authAxios } from "../../../../Services/auth.service";
import { useState } from "react";
import { toast } from "react-toastify";

const CampPeople = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [position, setPosition] = useState();
  const [facebook, setFacebook] = useState();
  const [insta, setinsta] = useState();
  const [linked, setLinked] = useState();
  const [description, setDescription] = useState();
  const [profile, setProfile] = useState();
  const [people_id, setPeople_id] = useState();
  const [ind, setInd] = useState();
  const [pitchUrl, setPitchUrl] = useState(null);
  const [pitch, setPitch] = useState();

  const updatePitch = async (e) => {
    const allowedFiles = ["jpg", "jpeg", "png"];
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

  const updateType = (e) => {
    setType(e.target.value);
  };
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePosition = (e) => {
    setPosition(e.target.value);
  };
  const updateFacebook = (e) => {
    setFacebook(e.target.value);
  };
  const updateInsta = (e) => {
    setinsta(e.target.value);
  };
  const updateLinked = (e) => {
    setLinked(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  const updateProfile = (e) => {
    setProfile(e.target.value);
  };

  const add1 = (x) => {
    setPeople_id(x);
    const pe = ind?.find((i) => i.id == x) ?? {};
    setType(pe?.type ?? "");
    setName(pe?.name ?? "");
    setPosition(pe?.position ?? "");
    setFacebook(pe?.facebook_link ?? "");
    setinsta(pe?.instagram_link ?? "");
    setLinked(pe?.linked_in_link ?? "");
    setDescription(pe?.description ?? "");
    setProfile(pe?.profile_image ?? "");
  };

  useEffect(() => {
    const getUploadedDocs = async () => {
      setInd(
        location.state.bio
          ? location.state.bio.company_id.peoples.filter((val) => {
              return val.company_id === location.state.bio.company_id.id;
            })
          : []
      );
    };
    getUploadedDocs();
  }, []);

  const gotoAdd = async () => {
    if (!pitchUrl) {
      toast.error("Please select valid file");
      return;
    }
    const values = {
      people_id: people_id,

      company_id: location.state.bio.company_id.peoples[0].company_id,

      type: type,
      name: name,
      position: position,
      facebook_link: facebook,
      instagram_link: insta,
      linked_in_link: linked,
      description: description,
      profile_image: pitchUrl,
    };

    await authAxios.patch(`${Base_url}/api/people/manage`, values);
    navigator(`/home/under-update/${location.state.bio.id}`);
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
              Update People Data
            </h1>

            <label for="exampleInputName" className="form-label">
              People Id
            </label>
            <div className="input-group">
              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                value={people_id}
                onChange={(e) => {
                  add1(e.target.value);
                }}
              >
                <option selected className="active">
                  Select People ID
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
              Type
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputRollnum"
              value={type}
              onChange={updateType}
            />

            <label for="exampleInputRegistrationnum" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputeRegistrationnum"
              value={name}
              onChange={updateName}
            />

            <label for="exampleInputBranch" className="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputBranch"
              value={position}
              onChange={updatePosition}
            />

            <label for="exampleInputBranch" className="form-label">
              Facebook Link
            </label>
            <input
              type="link"
              className="form-control"
              id="exampleInputBranch"
              value={facebook}
              onChange={updateFacebook}
            />

            <label for="exampleInputBranch" className="form-label">
              Instagram Link
            </label>
            <input
              type="link"
              className="form-control"
              id="exampleInputBranch"
              value={insta}
              onChange={updateInsta}
            />

            <label for="exampleInputBranch" className="form-label">
              LinkedIn Link
            </label>
            <input
              type="link"
              className="form-control"
              id="exampleInputBranch"
              value={linked}
              onChange={updateLinked}
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
              Profile Image (jpeg, png, jpg)
            </label>
            <input
              onChange={updatePitch}
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
                value={pitchUrl}
                // onChange={updatePitch}
                disabled
              />
            </div>
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
    </>
  );
};
export default CampPeople;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { authAxios } from "../../../Services/auth.service";
import Base_url from "../Base_url";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";

const Listing = (prop) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleOpen5 = () => {
    setOpen5(true);
  };

  const [items, setItems] = useState();
  const navigator = useNavigate();
  useEffect(() => {
    const getUploadedDocs = async () => {
      try {
        const response = await authAxios.get(
          `${Base_url}/api/campaign/campaign-with-all-data-by-campaign-id/${prop.id}`
        );

        setItems(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getUploadedDocs();
  }, []);
  const update = (items) => {
    navigator(`/home/under-update/${items.id}`, { state: { bio: items } });
  };

  return (
    <>
      <tr>
        <td scope="col-2">{items && items.id}</td>
        <td scope="col-2">{items ? items.company_id.id : null}</td>
        <td scope="col-2">{items ? items.company_id.user_id : null}</td>
        <td scope="col-2">{items ? items.company_id.company_logo : null}</td>
        <td scope="col-2">
          {items ? items.company_id.founder_linked_in_profile : null}
        </td>
        <td scope="col-2">{items ? items.company_id.company_name : null}</td>
        <td scope="col-2">
          {items ? items.company_id.company_linked_in_profile : null}
        </td>
        <td scope="col-2">{items ? items.company_id.website_url : null}</td>
        <td scope="col-2">
          {items ? items.company_id.previous_funding : null}
        </td>
        <td scope="col-2">
          {items ? items.company_id.product_description : null}
        </td>
        <td scope="col-2">
          {items ? items.company_id.traction_description : null}
        </td>
        <td scope="col-2">{items ? items.company_id.revenue : null}</td>
        <td scope="col-2">
          {items ? items.company_id.reason_for_community_round : null}
        </td>
        <td scope="col-2">{items ? items.company_id.reason_for_mynt : null}</td>
        <td scope="col-2">
          {items ? items.company_id.existing_commitments : null}
        </td>
        <td scope="col-2">{items ? items.company_id.company_pitch : null}</td>
        <td scope="col-2">{items ? items.company_id.country : null}</td>
        <td scope="col-2">{items ? items.company_id.state : null}</td>
        <td scope="col-2">{items ? items.company_id.city : null}</td>
        <td scope="col-2">{items ? items.company_id.pincode : null}</td>
        <td scope="col-2">{items ? items.company_id.company_address : null}</td>
        <td scope="col-2">{items ? items.company_id.facebook_link : null}</td>
        <td scope="col-2">{items ? items.company_id.instagram_link : null}</td>
        <td scope="col-2">{items ? items.company_id.legal_name : null}</td>
        <td scope="col-2">{items ? items.company_id.cin : null}</td>
        <td scope="col-2">
          {items ? items.company_id.date_of_incorporation : null}
        </td>
        <td scope="col-2">
          {items ? items.company_id.incorporation_type : null}
        </td>
        <td scope="col-2">{items ? items.company_id.sector : null}</td>
        <td scope="col-2">{items ? items.company_id.invested_so_far : null}</td>
        <td scope="col-2">
          {items ? items.company_id.number_of_employees : null}
        </td>
        <td scope="col-2">{items ? items.company_id.status : null}</td>
        <td scope="col" style={{ textAlign: "center" }}>
        <div style={{ display: "block", padding: 30 }}>
            <span
              onClick={items?.company_id.documents?.length ? ()=>handleOpen5() : ()=>{}}
              style={{ color: items?.company_id.documents?.length ? "blue" : 'black', cursor: "pointer" }}
            >
              {items?.company_id.documents?.length ? 'View' : '-'}
            </span>
            <Modal
              onClose={handleClose5}
              open={open5}
              style={{
                margin: "auto",
                width: '80%',
                height: 600
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "white",overflow: 'auto' }}>
                <table
                  className="table table-hover table-bordered"
                  style={{
                    border: "1px solid black",
                    zIndex: "1000000",
                    backgroundColor: "white",
                  }}
                >
                  <thead>
                    <tr>
                    <th scope="col" style={{backgroundColor:"violet"}}>Documents : ID</th>
                    <th scope="col" style={{backgroundColor:"violet"}}>Document Type</th>
                    <th scope="col"style={{backgroundColor:"violet"}}>Document Name</th>
                    <th scope="col" style={{backgroundColor:"violet"}}>Document Url</th>
                    <th scope="col" style={{backgroundColor:"violet"}}>Agreement Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.company_id.documents?.map((i) => {
                      return (
                        <tr>
                          <td scope="col">
                            {i?.id ?? ''}
                          </td>
                          <td scope="col">
                            {i?.document_type ?? ''}
                          </td>
                          <td scope="col">
                            {i?.document_name ?? ''}
                          </td>
                          <td scope="col">
                            {i?.document_url ?? ''}
                          </td>
                          <td scope="col">
                            {i?.agreement_status ?? ''}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Modal>
          </div>
        </td>

        <td scope="col" style={{ textAlign: "center" }}>
        <div style={{ display: "block", padding: 30 }}>
            <span
              onClick={items?.company_id.peoples?.length ? ()=>handleOpen4() : ()=>{}}
              style={{ color: items?.company_id.peoples?.length ? "blue" : 'black', cursor: "pointer" }}
            >
              {items?.company_id.peoples?.length ? 'View' : '-'}
            </span>
            <Modal
              onClose={handleClose4}
              open={open4}
              style={{
                margin: "auto ",
                width: '80%',
                height: 600,
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "white",overflow: 'auto' }}>
                <table
                  className="table table-hover table-bordered"
                  style={{
                    border: "1px solid black",
                    zIndex: "1000000",
                    backgroundColor: "white",
                  }}
                >
                  <thead>
                    <tr>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Peoples: ID</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Type</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Name</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Position</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Facebook Link</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Instagram Link</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Linked In Link</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Description</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Profile Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.company_id.peoples?.map((i) => {
                      return (
                        <tr>
                          <td scope="col">
                            {i?.id ?? ''}
                          </td>
                          <td scope="col">
                            {i?.type ?? ''}
                          </td>
                          <td scope="col">
                            {i?.name ?? ''}
                          </td>
                          <td scope="col">
                            {i?.position ?? ''}
                          </td>
                          <td scope="col">
                            {i?.facebook_link ?? ''}
                          </td>
                          <td scope="col">
                            {i?.instagram_link ?? ''}
                          </td>
                          <td scope="col">
                            {i?.linked_in_link ?? ''}
                          </td>
                          <td scope="col">
                            {i?.description ?? ''}
                          </td>
                          <td scope="col">
                            {i?.profile_image ?? ''}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Modal>
          </div>
        </td>

        <td scope="col" style={{ textAlign: "center" }}>
        <div style={{ display: "block", padding: 30 }}>
            <span
              onClick={items?.company_id.press?.length ? ()=>handleOpen3() : ()=>{}}
              style={{ color: items?.company_id.press?.length ? "blue" : 'black', cursor: "pointer" }}
            >
              {items?.company_id.press?.length ? 'View' : '-'}
            </span>
            <Modal
              onClose={handleClose3}
              open={open3}
              style={{
                margin: "auto",
                width: '80%',
                height: 600,
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "white",overflow: 'auto' }}>
                <table
                  className="table table-hover table-bordered"
                  style={{
                    border: "1px solid black",
                    zIndex: "1000000",
                    backgroundColor: "white",
                  }}
                >
                  <thead>
                    <tr>
                    <th scope="col" style={{backgroundColor:"pink"}}>Press : ID</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Title</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Link</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Description</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Banner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.company_id.press?.map((i) => {
                      return (
                        <tr>
                          <td scope="col">
                            {i?.id ?? ''}
                          </td>
                          <td scope="col">
                            {i?.title ?? ''}
                          </td>
                          <td scope="col">
                            {i?.link ?? ''}
                          </td>
                          <td scope="col">
                            {i?.description ?? ''}
                          </td>
                          <td scope="col">
                            {i?.banner ?? ''}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Modal>
          </div>
        </td>
        

        <td scope="col-2">{items ? items.status : null}</td>
        <td scope="col-2">{items ? items.youtube_link : null}</td>
        <td scope="col-2">{items ? items.ama_date : null}</td>
        <td scope="col-2">{items ? items.ama_meet_link : null}</td>
        <td scope="col-2">{items ? items.ama_youtube_video : null}</td>
        <td scope="col-2">{items ? items.pitch : "null"}</td>
        <td scope="col" style={{ textAlign: "center" }}>
          <div style={{ display: "block", padding: 30 }}>
            <span
              onClick={items?.faqs?.length ? ()=>handleOpen() : ()=>{}}
              style={{ color: items?.faqs?.length ? "blue" : 'black', cursor: "pointer" }}
            >
              {items?.faqs?.length ? 'View' : '-'}
            </span>
            <Modal
              onClose={handleClose}
              open={open}
              style={{
                margin: "auto",
                width: '80%',
                height: 600,
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "white" }}>
                <table
                  className="table table-hover table-bordered"
                  style={{
                    border: "1px solid black",
                    zIndex: "1000000",
                    backgroundColor: "white",
                  }}
                >
                  <thead>
                    <tr>
                      <th scope="col" style={{ backgroundColor: "green" }}>
                        Faqs id{" "}
                      </th>
                      <th scope="col" style={{ backgroundColor: "green" }}>
                        Question
                      </th>
                      <th scope="col" style={{ backgroundColor: "green" }}>
                        Answer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.faqs?.map((i) => {
                      return (
                        <tr>
                          <td scope="col">
                            {i?.id ?? ''}
                          </td>
                          <td scope="col">
                            {i?.question ?? ''}
                          </td>
                          <td scope="col">
                            {i?.answer ?? ''}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Modal>
          </div>
        </td>

        <td scope="col" style={{ textAlign: "center" }}>
          <div style={{ display: "block", padding: 30 }}>
          <span
              onClick={items?.rewards?.length ? ()=>handleOpen1() : ()=>{}}
              style={{ color: items?.rewards?.length ? "blue" : 'black', cursor: "pointer" }}
            >
              {items?.rewards?.length ? 'View' : '-'}
            </span>
            <Modal
              onClose={handleClose1}
              open={open1}
              style={{
                margin: "auto",
                width: '80%',
                height: 600,
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "white" }}>
                <table
                  className="table table-hover table-bordered"
                  style={{
                    border: "1px solid black",
                    zIndex: "1000000",
                    backgroundColor: "white",
                  }}
                >
                <thead>
                  <tr>
                    <th scope="col" style={{ backgroundColor: "red" }}>
                      Reward ID{" "}
                    </th>
                    <th scope="col" style={{ backgroundColor: "red" }}>
                      Amount
                    </th>
                    <th scope="col" style={{ backgroundColor: "red" }}>
                      Product Name
                    </th>
                    <th scope="col" style={{ backgroundColor: "red" }}>
                      Discounted Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                {items?.rewards?.map((i) => {
                      return (
                        <tr>
                          <td scope="col">
                            {i?.id ?? ''}
                          </td>
                          <td scope="col">
                            {i?.amount ?? ''}
                          </td>
                          <td scope="col">
                            {i?.product_name ?? ''}
                          </td>
                          <td scope="col">
                            {i?.discounted_price ?? ''}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              </div>
            </Modal>
          </div>
        </td>

        <td scope="col" style={{ textAlign: "center" }}>
          <div style={{ display: "block", padding: 30 }}>
          <span
              onClick={items?.higlights?.length ? ()=>handleOpen2() : ()=>{}}
              style={{ color: items?.higlights?.length ? "blue" : 'black', cursor: "pointer" }}
            >
              {items?.higlights?.length ? 'View' : '-'}
            </span>
            <Modal
              onClose={handleClose2}
              open={open2}
              style={{
                margin: "auto",
                width: '80%',
                height: 600,
              }}
            >
              <div
                style={{ width: '80%',height: "100%", background: "white", overflow:'auto' }}>
                <table
                  className="table table-hover table-bordered"
                  style={{
                    border: "1px solid black",
                    zIndex: "1000000",
                    backgroundColor: "white",
                  }}
                >
                <thead>
                  <tr>
                    <th scope="col" style={{ backgroundColor: "orange" }}>
                      Highlight : Id
                    </th>
                    <th scope="col" style={{ backgroundColor: "orange" }}>
                      Title
                    </th>
                    <th scope="col" style={{ backgroundColor: "orange" }}>
                      Description
                    </th>
                    <th scope="col" style={{ backgroundColor: "orange" }}>
                      Highlight Image
                    </th>
                    <th scope="col" style={{ backgroundColor: "orange" }}>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                {items?.higlights?.map((i) => {
                      return (
                        <tr>
                          <td scope="col">
                            {i?.id ?? ''}
                          </td>
                          <td scope="col">
                            {i?.title ?? ''}
                          </td>
                          <td scope="col">
                            {i?. description?? ''}
                          </td>
                          <td scope="col">
                            {i?.highlight_image ?? ''}
                          </td>
                          <td scope="col">
                            {i?.status ?? ''}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              </div>
            </Modal>
          </div>
        </td>

        <td scope="col-2">
          {" "}
          <button className="btn btn1">
            <CreateIcon
              onClick={() => {
                update(items);
              }}
            />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Listing;

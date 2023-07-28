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
          {items && items.company_id.documents.length >= 1
            ? items.company_id.documents[0].id
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.documents.length >= 1
            ? items.company_id.documents[0].document_type
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.documents.length >= 1
            ? items.company_id.documents[0].document_name
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.documents.length >= 1
            ? items.company_id.documents[0].document_url
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.documents.length >= 1
            ? items.company_id.documents[0].agreement_status
            : " - "}
        </td>

        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].id
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].type
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].name
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].position
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].facebook_link
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].instagram_link
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].linked_in_link
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].description
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.peoples.length >= 1
            ? items.company_id.peoples[0].profile_image
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.press.length >= 1
            ? items.company_id.press[0].id
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.press.length >= 1
            ? items.company_id.press[0].title
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.press.length >= 1
            ? items.company_id.press[0].link
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.press.length >= 1
            ? items.company_id.press[0].description
            : " - "}
        </td>
        <td scope="col" style={{ textAlign: "center" }}>
          {items && items.company_id.press.length >= 1
            ? items.company_id.press[0].banner
            : " - "}
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

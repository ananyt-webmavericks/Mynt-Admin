import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { authAxios } from "../../../Services/auth.service";
import Base_url from "../Base_url";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";


const Listing = (prop) => {
    const [items, setItems] = useState(); 
    const navigator = useNavigate()
    useEffect(  ()=>{
        const getUploadedDocs = async ()=>{
            try{
                const response = await authAxios.get(`${Base_url}/api/campaign/campaign-with-all-data-by-campaign-id/${prop.id}`)
                
                setItems(response.data);
                return response.data;
            }
            catch(error){
                console.log(error);
            }
        }
        getUploadedDocs();
}, [])
const update = (items) => {
    navigator(`/home/under-update/${items.id}`, {state : {bio : items}})
}


    return (
        <>
            <tr>
                          <td scope="col-2" >{items && items.id}</td>
                          <td scope="col-2" >{items ? items.company_id.id : null}</td>
                          <td scope="col-2" >{items ? items.company_id.user_id : null}</td>
                          <td scope="col-2" >{items ? items.company_id.company_logo : null}</td>
                          <td scope="col-2" >{items ? items.company_id.founder_linked_in_profile : null}</td>
                          <td scope="col-2" >{items ? items.company_id.company_name : null}</td>
                          <td scope="col-2" >{items ? items.company_id.company_linked_in_profile : null}</td>
                          <td scope="col-2" >{items ? items.company_id.website_url : null}</td>
                          <td scope="col-2" >{items ? items.company_id.previous_funding : null}</td>
                          <td scope="col-2" >{items ? items.company_id.product_description  : null}</td>
                          <td scope="col-2" >{items ? items.company_id.traction_description : null}</td>
                          <td scope="col-2" >{items ? items.company_id.revenue : null}</td>
                          <td scope="col-2" >{items ? items.company_id.reason_for_community_round : null}</td>
                          <td scope="col-2" >{items ? items.company_id.reason_for_mynt : null}</td>
                          <td scope="col-2" >{items ? items.company_id.existing_commitments : null}</td>
                          <td scope="col-2" >{items ? items.company_id.company_pitch : null}</td>
                          <td scope="col-2" >{items ? items.company_id.country  : null}</td>
                          <td scope="col-2" >{items ? items.company_id.state : null}</td>
                          <td scope="col-2" >{items ? items.company_id.city : null}</td>
                          <td scope="col-2" >{items ? items.company_id.pincode : null}</td>
                          <td scope="col-2" >{items ? items.company_id.company_address : null}</td>
                          <td scope="col-2" >{items ? items.company_id.facebook_link  : null}</td>
                          <td scope="col-2" >{items ? items.company_id.instagram_link : null}</td>
                          <td scope="col-2" >{items ? items.company_id.legal_name : null}</td>
                          <td scope="col-2" >{items ? items.company_id.cin : null}</td>
                          <td scope="col-2" >{items ? items.company_id.date_of_incorporation : null}</td>
                          <td scope="col-2" >{items ? items.company_id.incorporation_type  : null}</td>
                          <td scope="col-2" >{items ? items.company_id.sector : null}</td>
                          <td scope="col-2" >{items ? items.company_id.invested_so_far : null}</td>
                          <td scope="col-2" >{items ? items.company_id.number_of_employees : null}</td>
                          <td scope="col-2" >{items ? items.company_id.status : null}</td>
                          <td scope="col" style={{textAlign:"center"}}>{items && items.company_id.documents.length >= 1 ? items.company_id.documents[0].id: " - "}</td>
                          <td scope="col" style={{textAlign:"center"}}>{items && items.company_id.documents.length >= 1 ? items.company_id.documents[0].document_type : " - "}</td>
                          <td scope="col" style={{textAlign:"center"}}>{items && items.company_id.documents.length >= 1 ? items.company_id.documents[0].document_name : " - "}</td>
                          <td scope="col" style={{textAlign:"center"}}>{items && items.company_id.documents.length >= 1 ? items.company_id.documents[0].document_url : " - "}</td>
                          <td scope="col" style={{textAlign:"center"}}>{items && items.company_id.documents.length >= 1 ? items.company_id.documents[0].agreement_status : " - "}</td>
                          
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].id: " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].type : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].name : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].position : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].facebook_link : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].instagram_link : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].linked_in_link : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].description : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.peoples.length >= 1 ? items.company_id.peoples[0].profile_image : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.press.length >= 1 ? items.company_id.press[0].id : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.press.length >= 1 ? items.company_id.press[0].title : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.press.length >= 1 ? items.company_id.press[0].link : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.press.length >= 1 ? items.company_id.press[0].description : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.company_id.press.length >= 1 ? items.company_id.press[0].banner : " - "}</td>
                        
                         <td scope="col-2" >{items ? items.status : null}</td>
                          <td scope="col-2" >{items ? items.youtube_link : null}</td>
                          <td scope="col-2" >{items ? items.ama_date : null}</td>
                          <td scope="col-2" >{items ? items.ama_meet_link : null}</td>
                          <td scope="col-2" >{items ? items.ama_youtube_video  : null}</td>
                          <td scope="col-2" >{items ? items.pitch : "null"}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.faqs.length >= 1 ? items.faqs[0].id: " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.faqs.length >= 1 ? items.faqs[0].question : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.faqs.length >= 1 ? items.faqs[0].answer : " - "}</td>
                        
                        
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.rewards.length >= 1 ? items.rewards[0].id: " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.rewards.length >= 1 ? items.rewards[0].amount : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.rewards.length >= 1 ? items.rewards[0].product_name : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.rewards.length >= 1 ? items.rewards[0].discounted_price : " - "}</td>

                        <td scope="col" style={{textAlign:"center"}}>{ items && items.higlights.length >= 1 ? items.higlights[0].id: " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.higlights.length >= 1 ? items.higlights[0].title : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.higlights.length >= 1 ? items.higlights[0].description : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.higlights.length >= 1 ? items.higlights[0].highlight_image : " - "}</td>
                        <td scope="col" style={{textAlign:"center"}}>{ items && items.higlights.length >= 1 ? items.higlights[0].status : " - "}</td> 
                        
                             <td scope="col-2" > <button className="btn btn1">
                                    <CreateIcon 
                                  onClick={() => {update(items)}} 
                                  />
                            </button></td>

                    </tr>
        </>
    )
}

export default Listing;

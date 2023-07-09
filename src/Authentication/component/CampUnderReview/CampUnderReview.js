import React from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useState } from "react";
import { useEffect } from "react";
import Base_url from "../Base_url";
import CreateIcon from '@mui/icons-material/Create';
import { authAxios } from "../../../Services/auth.service";
import { useNavigate } from "react-router-dom";
import {Data} from "./Listing"
import Listing from "./Listing";





function CampUnderReview (){
        
        const [camp_id, setCamp_id] = useState()
        useEffect ( () => {
            const getUploadedDocs = async () => {
              try {
                  const response = await authAxios.get(`${Base_url}/api/campaign/manage`);
                  
                setCamp_id(response.data)
                  
                  return response.data;
              }
              catch (error) {
                  if (error) {
                      console.log(error)
                  }
                  return error;
              }
        }
        getUploadedDocs();
        },[])


    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
            </div>
        </div>
        <div className="row">
            
        <div className="col-8" style={{marginTop:"100px", marginLeft:"350px"}}>
            <div  className="row" style={{marginLeft:"4%", border:"3px solid", width:"25%", borderRadius:"5px", marginBottom:"10px"}}>
                <ul>
                    <p style={{color:"#9BABB8"}}>• Company<span style={{color:"violet", marginLeft:"10%"}}>• Document</span></p>
                    <p style={{color:"#9376E0"}}>• People<span style={{color:"pink", marginLeft: "18%"}}>• Press</span></p>
                    <p style={{color:"#070A52"}}>• Campaign<span style={{color:"green"}}>• FAQs</span></p>
                    <p style={{color:"red"}}>• Rewards<span style={{color:"orange", marginLeft:"12%"}}>• Highlight</span></p>
                    
                </ul>
               
            </div>
           
               
            
            <table className="table table-hover table-bordered" style={{border:"2px solid"}}>
                <thead className="thead">
                 <tr>
                 <th scope="col" >Id</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Company Id</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>User Id</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Company Logo</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Founder Linked in Profile</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Company Name</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Company Linked_in Profile</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Website Url</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Previous Funding</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Product Description</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Traction Description</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Revenue</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Reason for Community Round</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Reason for Mynt</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Existing Commitments</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Company Pitch</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Country</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>State</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>City</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Pincode</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Company Address</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Facebook Link</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Instagram Link</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Legal Name</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Cin</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Date of Incorporation</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Incorporation Type</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Sector</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Invested so far</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Number of Employees</th>
                    <th scope="col" style={{backgroundColor:"#9BABB8"}}>Status</th>
                    <th scope="col" style={{backgroundColor:"violet"}}>Documents : ID</th>
                    <th scope="col" style={{backgroundColor:"violet"}}>Document Type</th>
                    <th scope="col"style={{backgroundColor:"violet"}}>Document Name</th>
                    <th scope="col" style={{backgroundColor:"violet"}}>Document Url</th>
                    <th scope="col" style={{backgroundColor:"violet"}}>Agreement Status</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Peoples: ID</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Type</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Name</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Position</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Facebook Link</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Instagram Link</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Linked In Link</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Description</th>
                    <th scope="col" style={{backgroundColor:"#9376E0"}}>Profile Image</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Press : ID</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Title</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Link</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Description</th>
                    <th scope="col" style={{backgroundColor:"pink"}}>Banner</th>
                     <th scope="col" style={{backgroundColor:"#070A52"}}>Status</th>
                    <th scope="col" style={{backgroundColor:"#070A52"}}>Youtube Link</th>
                    <th scope="col" style={{backgroundColor:"#070A52"}}>Ama Date</th>
                    <th scope="col" style={{backgroundColor:"#070A52"}}>Ama Meet Link</th>
                    <th scope="col" style={{backgroundColor:"#070A52"}}>Ama Youtube Video</th>
                    <th scope="col" style={{backgroundColor:"#070A52"}}>Pitch</th>
                    <th scope="col" style={{backgroundColor:"green"}}>Faqs : ID</th>
                    <th scope="col" style={{backgroundColor:"green"}}>Question</th>
                    <th scope="col"style={{backgroundColor:"green"}} >Answer</th>
                    <th scope="col" style={{backgroundColor:"red"}}>Reward : ID</th>
                    <th scope="col" style={{backgroundColor:"red"}}>Amount</th>
                    <th scope="col" style={{backgroundColor:"red"}}>Product Name</th>
                    <th scope="col" style={{backgroundColor:"red"}}>Discounted Price</th>
                    <th scope="col" style={{backgroundColor:"orange"}}>Highlight : Id</th>
                    <th scope="col" style={{backgroundColor:"orange"}}>Title</th>
                    <th scope="col" style={{backgroundColor:"orange"}}>Description</th>
                    <th scope="col" style={{backgroundColor:"orange"}}>Highlight Image</th>
                    <th scope="col" style={{backgroundColor:"orange"}}>Status</th>
                    <th scope="col">Action</th>
                 </tr>

                </thead>
                <tbody>

                     {
                        camp_id && camp_id.map( (val, ind)=> {
                                return <Listing id={val.id} />
                        } )
                    }  

                 
                </tbody>

            </table>

        </div>
        </div>

        </>
    )
}
export default CampUnderReview;

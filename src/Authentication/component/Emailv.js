import React, { useState } from "react";
import "./Emailv.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Base_url from "./Base_url";
import swal from "sweetalert";
import Swal from "sweetalert2";




const token = localStorage.getItem("access_token");

const Emailv = () => {
    const [email, setEmail] = useState();
    const [pass , setPass] = useState();
    const navigator = useNavigate();  
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    const getEmail = (e) => {
        setEmail(e.target.value);
     }

     const getPass = (e) => {
        setPass(e.target.value);
     }

     const verify = async() =>{
        
         try {
            // console.log("error")
             const response =   await axios.post(`${Base_url}/api/users/login`, {

               login_type : "ADMIN",
                email :email,
                password : pass,
                
                },
                
                )
                // console.log("error")
                localStorage.setItem("access_token", JSON.stringify(response.data.access_token))
                
                swal({
                    title:"Login Successfull !",
                    text:"Welcome to Dashboard",
                    icon : "https://upload.wikimedia.org/wikipedia/commons/d/d6/Logo_correct.png"
                    
                })
            navigator("/home");  
         }catch (error) {
            console.log(error)

             swal({
                title:'OOPs',
                text:'Email and Password is Wrong',
                // icon : 'https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-red-cross-mark-clipart-png-image_6552326.png'
                icon:'https://www.freeiconspng.com/thumbs/error-icon/message-error-icon-27.png'
             })
           

        
       }     
     }
    return(
        <>
        <img src="/Logo_1.png" alt="logo" style={{width:"200px", height:"200px", marginTop:"-50px"}} />
        <div className="container ">
        
            <div className="row justify-content-center">
                
                <div className="col-5 box" style={{marginTop:"5px", padding:"80px"}}>
                        <h1 className="title" >Login Admin</h1>
                        <p className="Para">Please enter your details</p>
                         
                        <input className="form-control email-form " id="email" type='email' placeholder="Enter your email" value={email} name="email" onChange={getEmail} required  />
                        
                        <input className="form-control email-form " id="password" type='password' placeholder="Enter your password" value={pass} name="email" onChange={getPass} required  />

                        {emailRegex.test(email) ? <button  class="btn btn-secondary form-control button-cs" type="button" onClick={verify}>Login</button>
                        :
                        <button  class="btn btn-secondary disabled form-control button-cs" type="button" >Login</button>
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Emailv;
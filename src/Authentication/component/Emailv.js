import React, { useState } from "react";
import "./Emailv.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

const Emailv = () => {
    const [email, setEmail] = useState();
    const navigator = useNavigate();  
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    const getEmail = (e) => {
        setEmail(e.target.value);
     }
     const verify = () =>{
            navigator("/verify");       
     }
    return(
        <>
        <div className="container ">
            
            <div className="row justify-content-center">
                <div className="col-5 box" style={{marginTop:"150px", padding:"80px"}}>
                        <h1 className="title" >Login Admin</h1>
                        <p className="Para">Please enter your details</p>
                     
                        <input className="form-control email-form " id="email" type='email' placeholder="Enter your email" value={email} name="email" onChange={getEmail} required  />
                        {emailRegex.test(email) ? <button  class="btn btn-secondary form-control button-cs" type="button" onClick={verify}>Sign up</button>
                        :
                        <button  class="btn btn-secondary disabled form-control button-cs" type="button" >Sign up</button>
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Emailv;
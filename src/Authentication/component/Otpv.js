import React, {useState} from "react";
import "./Otpv.css"
import { Card, CardContent, Button, Typography } from "@mui/material";
import OTPInput, { ResendOTP } from "otp-input-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Otpv = () =>{
    const [OTP, setOTP] = useState("");
    const [WarnMsg, setWarnMsg] = useState(false);
    const navigator = useNavigate();

    let loginType = localStorage.getItem('loginType')

    const handleResendOtp = () => {
        
    }
    console.log(loginType)
    const handleSubmit = (e) => {
        navigator("/home");
    }
    const renderButton = buttonProps => {
        return <button style={{ background: 'none', border: 'none', float: 'right', marginRight: '20px', cursor: 'pointer' }} {...buttonProps}>Resend</button>;
    };
    const renderTime = remainingTime => {
        return <span style={{ color: '#777777' }}>Resend after {remainingTime} s</span>;
    };

    return (
        <div className="container ">
            <div className="get-started-section" style={{marginTop:"5px", padding:"140px"}}>
                <span className="get-started-heading"><h1 style={{textAlign:"center"}}>OTP Verification</h1></span>
                <Card className="card-get-started">
                    <CardContent>
                        <div className="otp-verify-container">
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" className="otp-verification-image"></img>
                        </div>
                        <span className="get-started-subheading" style={{marginLeft:"130px"}}>We’ve sent an OTP to your registered email ID. Enter it here to verify your email and continue!</span>
                        <div className="otp-verification-section">
                            <OTPInput
                                value={OTP}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                // secure
                                inputStyles={{ width: '35px', outline: 'none', height: '35px', background: '#F4F4F4 0% 0% no-repeat padding-box', border: 'none', fontWeight: '600', fontSize: '20px' }}
                            />
                            {WarnMsg &&
                                <Typography style={{ fontSize: '14px', textAlign: 'left', color: '#FF9494', paddingTop: '10px' }}>Invalid OTP! please enter correct OTP.</Typography>}
                            <ResendOTP maxTime={90} onResendClick={() => handleResendOtp()} style={{marginTop:"11px",display:"flex",justifyContent:"space-between"}} renderTime={renderTime} renderButton={renderButton} disable={false} />
                        </div>

                        <button className="btn btn-secondary btn-lg" style={{marginLeft:"450px",marginTop:"20px"}} onClick={handleSubmit} > {loginType === 'new' ? "Verify OTP" : "Verify OTP"}</button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )           
}
export default Otpv;






    
    

 
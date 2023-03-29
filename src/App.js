import React from "react";
import Otpv from "../src/Authentication/component/Otpv"
import Emailv from "../src/Authentication/component/Emailv";
import {Routes , Route} from "react-router-dom";
import Dashboard from "../src/Authentication/Dashboard/Dashboard";
import File from "../src/Authentication/component/Company/File";
import Campaign from "./Authentication/component/Company/Campaign";
import Deal_term from "./Authentication/component/Company/Deal_term";
import Deal_type from "./Authentication/component/Company/Deal_type";
import FAQs from "./Authentication/component/Company/FAQs";
import Rewards from "./Authentication/component/Company/Rewards"
import Highlights from "./Authentication/component/Company/Highlights"
import Investor_KYC from "./Authentication/component/Company/Investor_KYC";
import Investor_consents from "./Authentication/component/Company/Investor_consents";
import User from "./Authentication/component/Company/User";
import People from "./Authentication/component/Company/People";
import Press from "./Authentication/component/Company/Press";

const App = () =>{
  return(
    <>
    <Routes>
    <Route path="/" element={<Emailv />} exact/>
    <Route path="/home" element={<Dashboard />} exact />
    <Route path="/verify" element={<Otpv />} exact />
    <Route path="/home/company" element={<File />} exact />
    <Route path="/home/campaign" element={<Campaign />} exact />
    <Route path="/home/deal_term" element={<Deal_term />} exact />
    <Route path="/home/deal_type" element={<Deal_type />} exact />
    <Route path="/home/faqs" element={<FAQs />} exact />
    <Route path="/home/rewards" element={<Rewards />} exact />
    <Route path="/home/highlights" element={<Highlights />} exact />
    <Route path="/home/investor_kyc" element={<Investor_KYC />} exact />
    <Route path="/home/investor_consents" element={<Investor_consents />} exact />
    <Route path="/home/user" element={<User />} exact />
    <Route path="/home/people" element={<People />} exact />
    <Route path="/home/press" element={<Press />} exact />
    </Routes>
    </>
  )
}
export default App;
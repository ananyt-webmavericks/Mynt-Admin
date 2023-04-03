import React from "react";
import Otpv from "../src/Authentication/component/Otpv"
import Emailv from "../src/Authentication/component/Emailv";
import {Routes , Route} from "react-router-dom";

import File from "../src/Authentication/component/Company/Card";
import Campaign from "./Authentication/component/Campaign/Campaign";
import Deal_term from "./Authentication/component/Deal_Term/Deal_term";
import Deal_type from "./Authentication/component/DealType/Deal_type";
import FAQs from "./Authentication/component/FAQS/FAQs";
import Rewards from "./Authentication/component/Rewards/Rewards"
import Highlights from "./Authentication/component/Highlights/Highlights"
import Investor_KYC from "./Authentication/component/Investor_KYC/Investor_KYC";
import Investor_consents from "./Authentication/component/Investor_Consents/Investor_consents";
import User from "./Authentication/component/User/User";
import People from "./Authentication/component/People/People";
import Press from "./Authentication/component/Press/Press";
import Campaign_Form from "./Authentication/component/Campaign/Campaign_Form";
import Company_Form from "./Authentication/component/Company/Company_Form";
import Deal_Term_Form from "./Authentication/component/Deal_Term/Deal_Term_Form";
import Deal_Type_Form from "./Authentication/component/DealType/Deal_Type_Form";
import Faqs_Form from "./Authentication/component/FAQS/Faqs_Form";
import Highlight_Form from "./Authentication/component/Highlights/Highlight_Form";
import Investor_Kyc_Form from "./Authentication/component/Investor_KYC/Investor_Kyc_Form";
import Investor_Consent_Form from "./Authentication/component/Investor_Consents/Investor_Consent_Form";
import User_Form from "./Authentication/component/User/User_Form";
import People_Form from "./Authentication/component/People/People_Form";
import Press_Form from "./Authentication/component/Press/Press_Form";
import Reward_Form from "./Authentication/component/Rewards/Reward_Form";
import Home from "./Authentication/component/Home/Home";
import Faqs_Insert_data from "./Authentication/component/FAQS/Faqs_Insert_data";
import Campaign_Insert_data from "./Authentication/component/Campaign/Campaign_Insert_data";
import Company_Insert_data from "./Authentication/component/Company/Company_Insert_data";
import Deal_Term_Insert_data from "./Authentication/component/Deal_Term/Deal_Term_Insert_data";
import Deal_Type_Insert_data from "./Authentication/component/DealType/Deal_Type_Insert_data";
import Highlights_Insert_data from "./Authentication/component/Highlights/Highlights_Insert_data";
import Investor_Consents_Insert_data from "./Authentication/component/Investor_Consents/Investor_Consents_Insert_data";
import Investor_KYC_Insert_data from "./Authentication/component/Investor_KYC/Investor_KYC_Insert_data";
import User_Insert_data from "./Authentication/component/User/User_Insert_data";
import People_Insert_data from "./Authentication/component/People/People_Insert_data";
import Press_Insert_data from "./Authentication/component/Press/Press_Insert_data";
import Rewards_Insert_data from "./Authentication/component/Rewards/Rewards_Insert_data";




const App = () =>{
  return(
    <>
    <Routes>
    <Route path="/" element={<Emailv />} exact/>
    <Route path="/home" element={<Home />} exact />
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
    <Route path="/campaign/campaign_form" element={<Campaign_Form />} exact/>  
    <Route path="/company/company_form" element={<Company_Form />} exact/> 
    <Route path="/deal_term/deal_term_form" element={<Deal_Term_Form />} exact/> 
    <Route path="/deal_type/deal_type_form" element={<Deal_Type_Form />} exact/> 
    <Route path="/faqs/faqs_form" element={<Faqs_Form />} exact/> 
    <Route path="/highlights/highlights_form" element={<Highlight_Form />} exact/> 
    <Route path="/investor_Kyc/investor_Kyc_Form" element={<Investor_Kyc_Form />} exact/>   
    <Route path="/investor_consents/investor_consents_Form" element={<Investor_Consent_Form />} exact/>  
    <Route path="/user/user_form" element={<User_Form />} exact/>  
    <Route path="/people/people_form" element={<People_Form />} exact/> 
    <Route path="/press/press_form" element={<Press_Form />} exact/> 
    <Route path="/rewards/rewards_form" element={<Reward_Form />} exact/> 
    <Route path="/home/faqs/insert" element={<Faqs_Insert_data />} exact />
    <Route path="/home/campaign/insert" element={<Campaign_Insert_data />} exact />
    <Route path="/home/company/insert" element={<Company_Insert_data />} exact />
    <Route path="/home/deal_term/insert" element={<Deal_Term_Insert_data />} exact />
    <Route path="/home/deal_type/insert"  element ={<Deal_Type_Insert_data />} exact />
    <Route path="/home/highlights/insert" element={<Highlights_Insert_data />} exact />
    <Route path="/home/investor_consents/insert" element={<Investor_Consents_Insert_data />} exact />
    <Route path="/home/investor_kyc/insert" element={<Investor_KYC_Insert_data/>} exact />
    <Route path="/home/user/insert" element={<User_Insert_data/>} exact />
    <Route path="/home/people/insert" element={<People_Insert_data />} exact/>
    <Route path="/home/press/insert" element={<Press_Insert_data/>} exact/>
    <Route path="/home/rewards/insert" element={<Rewards_Insert_data />} exact/>
    </Routes>
    </>
  )
}
export default App;
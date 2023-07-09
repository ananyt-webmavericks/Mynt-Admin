import React from "react";
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
import Payments from "./Authentication/Payments/Payments";
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
import Documents from "./Authentication/component/Documents/Documents";
import Documents_insert_data from "./Authentication/component/Documents/Documents_insert_data";
import Documents_Form from "./Authentication/component/Documents/Documents_Form";
import User_Invest from "./Authentication/component/User_Investor/User_Invest";
import User_Invest_Insert from "./Authentication/component/User_Investor/User_Invest_Insert";
import User_Invest_Form from "./Authentication/component/User_Investor/User_Invest_Form";
import CampUnderReview from "./Authentication/component/CampUnderReview/CampUnderReview";
import CampUnderUpdate from "./Authentication/component/CampUnderReview/CampUnderUpdate";
import CampCompany from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampCompany";
import CampDocument from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampDocument";
import CampPeople from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampPeople";
import CampPress from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampPress";
import CampHighlight from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampHighlight";
import CampReward from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampReward";
import CampFaqs from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampFaqs";
import CampCampaign from "./Authentication/component/CampUnderReview/CampaignRelatedDetials.js/CampCampaign";






const App = () =>{
  return(
    <>
    <Routes>
    <Route path="/" element={<Emailv />} exact/>
    <Route path="/home" element={<Home />} exact />
    <Route path="/home/company" element={<File />} exact />
    <Route path="/home/campaign" element={<Campaign />} exact />
    <Route path="/home/deal_term" element={<Deal_term />} exact />
    <Route path="/home/deal_type" element={<Deal_type />} exact />
    <Route path="/home/documents" element={<Documents />} exact />
    <Route path="/home/faqs" element={<FAQs />} exact />
    <Route path="/home/rewards" element={<Rewards />} exact />
    <Route path="/home/highlights" element={<Highlights />} exact />
    <Route path="/home/investor_kyc" element={<Investor_KYC />} exact />
    <Route path="/home/investor_consents" element={<Investor_consents />} exact />
    <Route path="/home/user" element={<User />} exact />
    <Route path="/home/people" element={<People />} exact />
    <Route path="/home/press" element={<Press />} exact />
    <Route path="/campaign/:id" element={<Campaign_Form />} exact/>  
    <Route path="/company/:id" element={<Company_Form />} exact/> 
    <Route path="/deal_term/:id" element={<Deal_Term_Form />} exact/> 
    <Route path="/deal_type/:id" element={<Deal_Type_Form />} exact/> 
    <Route path="/documents/:id" element={<Documents_Form />} exact/> 
    <Route path="/faqs/:id" element={<Faqs_Form />} exact/> 
    <Route path="/highlights/:id" element={<Highlight_Form />} exact/> 
    <Route path="/investor_Kyc/:id" element={<Investor_Kyc_Form />} exact/>   
    <Route path="/investor_consents/:user_id" element={<Investor_Consent_Form />} exact/>  
    <Route path="/user/:id" element={<User_Form />} exact/>  
    <Route path="/people/:id" element={<People_Form />} exact/> 
    <Route path="/press/:id" element={<Press_Form />} exact/> 
    <Route path="/rewards/:id" element={<Reward_Form />} exact/> 
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
    <Route path="/home/documents/insert" element={<Documents_insert_data />} exact/>
    <Route path ="/home/payments" element={<Payments   />} exact />
    <Route path="/home/user-invest" element={<User_Invest />} exact />
    <Route path="/home/user-invest/insert" element={<User_Invest_Insert/>} exact />
    <Route path="/user-invest/:id" element={<User_Invest_Form />} exact/>  
    <Route path="/home/under-review" element={<CampUnderReview />} exact/>  
    <Route path="/home/under-update/:id" element={<CampUnderUpdate />} exact/>  
    <Route path="/home/under-update/:id/campcompany" element={<CampCompany />} exact/> 
    <Route path="/home/under-update/:id/campdocument" element={<CampDocument />} exact/> 
    <Route path="/home/under-update/:id/camppeople" element={<CampPeople />} exact/> 
    <Route path="/home/under-update/:id/camppress" element={<CampPress />} exact/> 
    <Route path="/home/under-update/:id/campcampi" element={<CampCampaign />} exact/>
    <Route path="/home/under-update/:id/campfaqs" element={<CampFaqs />} exact/>
    <Route path="/home/under-update/:id/campreward" element={<CampReward />} exact/> 
    <Route path="/home/under-update/:id/camphighlight" element={<CampHighlight />} exact/> 
    </Routes>
    </>
  )
}
export default App;
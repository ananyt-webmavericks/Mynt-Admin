import React from "react";
import Otpv from "../src/Authentication/component/Otpv"
import Emailv from "../src/Authentication/component/Emailv";
import {Routes , Route} from "react-router-dom";
// import Dashboard from "../src/Authentication/component/Dashboard";
const App = () =>{
  return(
    <>
    <Routes>
    <Route path="/" element={<Emailv />} exact/>
    <Route path="/verify" element={<Otpv />} exact />
    </Routes>
    </>
  )
}
export default App;
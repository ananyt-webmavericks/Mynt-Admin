import React, {useState} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';

function Investor_KYC() {
  const navigator = useNavigate();
  function update (){
   navigator("/investor_Kyc/investor_Kyc_Form")
  }

  const goToAdd =() =>{
    navigator("/home/investor_kyc/insert");
  }

  return (
    <> 
      <div className='container-fluid'>
            <div className='row'>
              
                <Dashboard />
              
            </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"300px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Investor_KYC</button>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td>1</td>
                    <td>Leanne Graham</td>
                    <td><a href="div@gmail.com">div@gmail.com</a></td>
                    <td>7896541237</td>
                    <td>kcsckn.org</td>
                    <td>XYZ</td>
                    <td ><CreateIcon onClick={update} /></td>
                  </tr>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td>2</td>
                    <td>Leanne Graham</td>
                    <td><a href="div@gmail.com">div@gmail.com</a></td>
                    <td>7896541237</td>
                    <td>kcsckn.org</td>
                    <td>XYZ</td>
                    <td ><CreateIcon onClick={update} /> </td>
                  </tr>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td>3</td>
                    <td>Leanne Graham</td>
                    <td><a href="div@gmail.com">div@gmail.com</a></td>
                    <td>7896541237</td>
                    <td>kcsckn.org</td>
                    <td>XYZ</td>
                    <td ><CreateIcon onClick={update} /></td>
                  </tr>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td>4</td>
                    <td>Leanne Graham</td>
                    <td><a href="div@gmail.com">div@gmail.com</a></td>
                    <td>7896541237</td>
                    <td>kcsckn.org</td>
                    <td>XYZ</td>
                    <td ><CreateIcon onClick={update} /></td>
                  </tr>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td>5</td>
                    <td>Leanne Graham</td>
                    <td><a href="div@gmail.com">div@gmail.com</a></td>
                    <td>7896541237</td>
                    <td>kcsckn.org</td>
                    <td>XYZ</td>
                    <td ><CreateIcon onClick={update} /></td>
                  </tr>
                  
                </tbody>
              </table>
          </div>
       
      </div>
    </>
  );
}
export default Investor_KYC;
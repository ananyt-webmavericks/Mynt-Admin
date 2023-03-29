import React, {useState} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function User() {
    
    
  return (
    <>

      
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Dashboard />
          </div>
          <div className='col-10' style={{marginTop:"50px"}}>
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td>1</td>
                    <td>Leanne Graham</td>
                    <td><a>div@gmail.com</a></td>
                    <td>7896541237</td>
                    <td>kcsckn.org</td>
                    <td>XYZ</td>
                  </tr>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td>1</td>
                    <td>Leanne Graham</td>
                    <td><a>div@gmail.com</a></td>
                    <td>7896541237</td>
                    <td>kcsckn.org</td>
                    <td>XYZ</td>
                  </tr>
                  
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
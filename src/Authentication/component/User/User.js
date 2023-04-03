import React, {useState, useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"

function User() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (){
   navigator("/user/user_form")
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/users/manage`,  {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data)
          setItems(response.data)
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
})

const goToAdd =() =>{
  navigator("/home/user/insert");
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
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add UserList</button>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col-2"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col-2">id</th>
                    <th scope="col-2">first_name</th>
                    <th scope="col-2">last_name</th>
                    <th scope="col-2">email</th>
                    <th scope="col-2">email_otp</th>
                    <th scope="col-2">social_login</th>
                    <th scope="col-2">country</th>
                    <th scope="col-2">email_verified</th>
                    <th scope="col-2">nationality</th>
                    <th scope="col-2">created_at</th>
                    <th scope="col-2">updated_at</th>
                    <th scope="col-2">profile_image</th>
                    <th scope="col-2">user_type</th>
                    <th scope="col-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                          <td scope="col-2" ><CheckBoxOutlineBlankIcon /></td>
                          <td scope="col-2" >{item.id}</td>
                          <td scope="col-2" >{item.first_name}</td>
                          <td scope="col-2" >{item.last_name}</td>
                          <td scope="col-2" >{item.email}</td>
                          <td scope="col-2" >{item.email_otp}</td>
                          <td scope="col-2" >{item.social_login ? "true": "false"} </td>
                          <td scope="col-2" >{item.country}</td>
                          <td scope="col-2" >{item.email_verified ? "true": "false"}</td>
                          <td scope="col-2" >{item.nationality}</td>
                          <td scope="col-2" >{item.created_at}</td>
                          <td scope="col-2" >{item.updated_at}</td>
                          <td scope="col-2" >{item.profile_image}</td>
                          <td scope="col-2" >{item.user_type}</td>
                          <td scope="col-2" ><CreateIcon onClick={update} /></td>
                          </tr>
                        </>
                      )
                    })
                  }

                  
                </tbody>
              </table>
          </div>
        </div>
      
    </>
  );
}
export default User;
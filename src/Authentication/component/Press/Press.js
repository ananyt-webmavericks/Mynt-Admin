import React,{useState , useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"

function Press() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (){
   navigator("/press/press_form")
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/press/manage`,  {
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

const goToAdd =()=>{
  navigator("/home/press/insert");
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
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Press</button>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col">id</th>
                    <th scope="col">company_id</th>
                    <th scope="col">title</th>
                    <th scope="col">link</th>
                    <th scope="col">description</th>
                    <th scope="col">banner</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                    <th scope="col">Action</th>
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
                          <td scope="col-2" >{item.company_id}</td>
                          <td scope="col-2" >{item.title}</td>
                          <td scope="col-2" >{item.link}</td>
                          <td scope="col-2" >{item.description}</td>
                          <td scope="col-2" >{item.banner} </td>
                          <td scope="col-2" >{item.created_at}</td>
                          <td scope="col-2" >{item.updated_at}</td>
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
export default Press;
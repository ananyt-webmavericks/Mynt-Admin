import React,{useState , useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Base_url from "../Base_url";
import { authAxios } from '../../../Services/auth.service';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "../../Comp_css/Component.css";


function Press() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (item){
   navigator(`/press/${item.id}`, {state : { bio : item}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/press/manage`);
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
},[])

const goToAdd =()=>{
  navigator("/home/press/insert");
}
  return (
    <> 
      <div className='container-fluid'>
            {/* <div className='row'>
                <Dashboard 
                 f1 = {true}
                 f2 = {false}
                 />
            </div> */}
        <div className='row'>
        <div className="d-flex justify-content-end">
          <Button variant="contained" className="addIcon" style={{marginBottom:"1%"}} onClick={goToAdd} >Add Press<AddIcon/></Button>
          </div>
          <div style={{ overflowX: "auto", height: "550px" }}>

            <table class="table table-hover table-bordered" style={{border:"2px solid"}}>
                <thead className='thead'>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Company Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Link</th>
                    <th scope="col">Description</th>
                    <th scope="col">Banner</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                          <td scope="col-2" >{item.id}</td>
                          <td scope="col-2" >{item.company_id}</td>
                          <td scope="col-2" >{item.title}</td>
                          <td scope="col-2" >{item.link}</td>
                          <td scope="col-2" >{item.description}</td>
                          <td scope="col-2" >{item.banner} </td>
                          <td scope="col-2" >  <button className="btn btn1">
                                    <CreateIcon 
                                  onClick={() => {update(item)}} />
                            </button></td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
       
      </div>
                  </div>
    </>
  );
}
export default Press;
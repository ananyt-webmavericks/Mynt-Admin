import React from "react";
import Dashboard from '../../Dashboard/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import { useLocation, useNavigate } from "react-router-dom";


const CampUnderUpdate = () => {
    const navigator = useNavigate() 
    const location = useLocation()
    const goToList = () => {
        navigator("/home/under-review")
    }

    const campcomp = () => {
        navigator(`/home/under-update/${location.state.bio.id}/campcompany`, {state : {bio : location.state.bio}})
    }
    const campdocument = () => {
        navigator(`/home/under-update/${location.state.bio.id}/campdocument`, {state : {bio : location.state.bio}})
    }
    const camppeople = () => {
        
        navigator(`/home/under-update/${location.state.bio.id}/camppeople`, {state : {bio : location.state.bio}})
    }
    const camppress = () => {
      navigator(`/home/under-update/${location.state.bio.id}/camppress`, {state : {bio : location.state.bio}})
    }
    const campcampi = () => {
      navigator(`/home/under-update/${location.state.bio.id}/campcampi`, {state : {bio : location.state.bio}})
    }
    const campfaqs = () => {
      navigator(`/home/under-update/${location.state.bio.id}/campfaqs`, {state : {bio : location.state.bio}})
    }
    const campreward = () => {
      navigator(`/home/under-update/${location.state.bio.id}/campreward`, {state : {bio : location.state.bio}})
    }
    const camphighlight = () => {
      navigator(`/home/under-update/${location.state.bio.id}/camphighlight`, {state : {bio : location.state.bio}})
    }

    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
            <Dashboard 
            /> 
        </div>
        </div>
        <div className='row'>
        <div className="col-8" style={{marginTop:"150px", marginLeft:"350px"}}>
        <button className="btn btn-success" style={{marginBottom: "10px"}} onClick={goToList}>
            Save
        </button>
        <table class="table table-hover table-bordered" style={{border:"2px solid"}}>
                <thead className="thead">
                  <tr>
                              <th scope="col">Campaign Id Related Data</th>
                              <th scope="col">Action</th> 
                  </tr>
                </thead>
                <tbody>
                          <tr>
                                  <td scope="col">Company</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                            onClick={campcomp}
                                         />
                                    </button>
                                  </td>
                          </tr>
                          
                          <tr>
                                  <td scope="col">Document</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                        onClick={campdocument}
                                        />
                                    </button>
                                  </td>
                          </tr>
                          
                          <tr>
                                  <td scope="col">People</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                              onClick={camppeople}
                                        />
                                    </button>
                                  </td>
                          </tr>
                          <tr>
                                  <td scope="col">Press</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                          onClick={camppress}
                                         />
                                    </button>
                                  </td>
                          </tr>
                          <tr>
                                  <td scope="col">Campaign</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                          onClick={campcampi}
                                        />
                                    </button>
                                  </td>
                          </tr>
                          <tr>
                                  <td scope="col">FAQs</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                          onClick={campfaqs}
                                        />
                                    </button>
                                  </td>
                          </tr>
                          <tr>
                                  <td scope="col">Rewards</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                          onClick={campreward}
                                        />
                                    </button>
                                  </td>
                          </tr>
                          <tr>
                                  <td scope="col">Highlight</td>
                                  <td scope="col-2" >
                                     <button className="btn btn1">
                                        <CreateIcon
                                          onClick={camphighlight}
                                        />
                                    </button>
                                  </td>
                          </tr>
                      
                </tbody>
              </table>

        </div>     

             
        </div>
        </>
    )
}
export default CampUnderUpdate;
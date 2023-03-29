import React, {useState} from 'react';
import Dashboard from '../../Dashboard/Dashboard';

function Investor_consents() {
  const [investorName, setInvestorName] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);

  
  const handleSubmit = (event) => {
    event.preventDefault();
   
  }

  return (
    <>

      
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Dashboard />
          </div>
          <div className='col-6' style={{marginRight:"200px", marginTop:"160px"}}>
          <div style={{borderRadius : "10px", backgroundColor : "#F9DBBB", padding :"70px"}}>
              <h2 style={{marginBottom:"30px"}}><b>Investor Consent Form</b></h2>
              <form onSubmit={handleSubmit}>
                <label >
                  <b>Investor Name:</b>
                  </label>
                  
                  <input type="text"  className="form-control" value={investorName} onChange={event => setInvestorName(event.target.value)} />
                
                <br />
                <label>
                  <b>Consent:</b>
                  </label>
                  <input style={{marginLeft:"10px", marginRight:"5px"}} type="checkbox" checked={consentGiven} onChange={event => setConsentGiven(event.target.checked)} />
                  I give my consent to the actions described above.
                
                <br />
                <button className="btn btn-success" type="submit" style={{marginTop:"20px", marginLeft:"200px"}}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investor_consents;
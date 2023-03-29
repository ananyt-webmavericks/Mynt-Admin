import React, {useState} from 'react';
import Dashboard from '../../Dashboard/Dashboard';

function Investor_KYC() {

    const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>

      
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Dashboard />
          </div>
          <div className='col-4' style={{marginRight:"400px", marginTop:"100px"}}>
            
            <form onSubmit={handleSubmit} style={{borderRadius : "10px", backgroundColor : "#F9DBBB", padding :"70px"}}>
                <label>
                    Name:
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button className="btn btn-success" type="submit" style={{marginTop:"20px"}}>Verify KYC</button>
        </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investor_KYC;
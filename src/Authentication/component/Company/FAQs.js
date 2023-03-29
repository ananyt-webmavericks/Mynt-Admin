import React, { useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQs() {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);

  const openFun1 = () => {
      setFlag1(!flag1)
  }
  const openFun2 = () => {
    setFlag2(!flag1)
}
const openFun3 = () => {
  setFlag3(!flag1)
}
const openFun4 = () => {
  setFlag4(!flag1)
}

  return (
    <>

      
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Dashboard />
          </div>
          <div className='col-9'>
                <h1>FAQs</h1>
                <p>Mynt University is the ultimate source for answsers to the most commonly asked questions.</p>
                
                <div style={{border : "1px solid", backgroundColor : "#fff", marginBottom:"30px"}}>
                  <h4 style={{padding:"10px"}}>01. How can I apply as a startup founder to Mynt invest ? <span  style={{marginLeft:"300px", fontWeight:"15px"}}><ExpandMoreIcon onClick={openFun1} /></span></h4>
                  { flag1 ?  
                    <p >Hello world</p>
                  :
                    null
                  }

                </div>
                <div style={{border : "1px solid", backgroundColor : "#fff"}}>
                  <h4 style={{padding:"10px"}}>01. How can I apply as a startup founder to Mynt invest ? <span  style={{marginLeft:"300px", fontWeight:"15px"}}><ExpandMoreIcon onClick={openFun2} /></span></h4>
                  { flag2 ?  
                    <p >Hello world</p>
                  :
                    null
                  }

                </div>
                <div style={{border : "1px solid", backgroundColor : "#fff"}}>
                  <h4 style={{padding:"10px"}}>01. How can I apply as a startup founder to Mynt invest ? <span  style={{marginLeft:"300px", fontWeight:"15px"}}><ExpandMoreIcon onClick={openFun3} /></span></h4>
                  { flag3 ?  
                    <p >Hello world</p>
                  :
                    null
                  }

                </div>
                <div style={{border : "1px solid", backgroundColor : "#fff"}}>
                  <h4 style={{padding:"10px"}}>01. How can I apply as a startup founder to Mynt invest ? <span  style={{marginLeft:"300px", fontWeight:"15px"}}><ExpandMoreIcon onClick={openFun4} /></span></h4>
                  { flag4 ?  
                    <p >Hello world</p>
                  :
                    null
                  }

                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
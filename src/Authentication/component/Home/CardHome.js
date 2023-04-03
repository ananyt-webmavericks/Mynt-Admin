import React from "react";

const CardHome = (props) =>{
      return(
        <>    
            <div className="card" style={{width:"18rem", display:"inline-block", marginRight:"20px", marginLeft:"20px", marginTop:"30px"}}>
            <h3 className="card-title">{props.title}</h3>
              <img style={{width:"280px",height:"200px"}} src={props.imgsrc} className="card-img-top" alt="..."/>
              <div className="card-body">   
                <p className="card-text">{props.txt}</p>
              </div>
            </div>
        </>
      )
}
export default CardHome;
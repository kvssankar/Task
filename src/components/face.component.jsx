import React from 'react';
import '../face.css';
const Face=()=>{
    return(
        <div className="face-card">
            <div className="face-left">
                <img height="400px" src="https://res.cloudinary.com/sankarkvs/image/upload/v1602783053/mypic_zrgs7c.jpg" alt="" srcset=""/>
            </div>
            <div className="face-right">
                <h6 style={{letterSpacing:".1rem"}}>HEY EVERYBODY ! I AM</h6>
                <h3 style={{fontStyle:"bold",fontWeight:"700"}}>KVS</h3>
                <h3 style={{fontStyle:"bold",fontWeight:"700"}}>SANKAR KUMAR</h3>
                <h5>FULL STACK WEB DEVELOPER || PROGRAMMER</h5>
                <p style={{fontFamily:"cursive",fontSize:"20px",color:"GrayText"}}>The way i see it, if you want rainbow, you gotta put up with the rain ...</p>
                <div className="flex">
                <img src="https://www.flaticon.com/premium-icon/icons/svg/3291/3291581.svg" style={{width:"30px"}} alt=""/> 14 <sup>th</sup> December 2001
                </div>
                <div className="flex">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/86/86662.svg" style={{width:"30px"}} alt=""/> 9347994869
                </div>
                <div className="flex">
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/2352/2352110.svg" style={{width:"30px"}} alt=""/> <span>kvs.sankar001@gmail.com</span> 
                </div>
                <p style={{textAlign:"right"}}><b>-- Elevate. Transform. Evolve.</b></p>
            </div>
        </div>
    );
}

export default Face;
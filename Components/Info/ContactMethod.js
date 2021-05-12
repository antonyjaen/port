import React, {useState,useRef,useEffect} from "react";
import lottie from "lottie-web";

const ContactMethod = ({url,info, action}) => {
    
   const GoTo=()=>{
        if(action){
            window.location.href= action
        }
   }
    return (
        <div className="container  hover-overlay contact-method">
            <div  onClick={GoTo} className="row py-2">
                <div className="col-4">
                    <div className="cont">
                        <img src={url} alt=""/>
                    </div>
                </div>
                <div className="col-8">
                    <h5 className="text-contact">{info}</h5>
                </div>
            </div>
        </div>
    )
}

export default ContactMethod
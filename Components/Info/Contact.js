import react, {useState,useRef,useEffect} from "react";
import ContactMethod from './ContactMethod';

const Contact = () => {
    /*https://api.whatsapp.com/send?phone=50661797265*/
    const social = [
        {
            url:"https://img.icons8.com/office/50/000000/whatsapp--v3.png" ,
            info:"+506 6179 7265",
            action:"https://api.whatsapp.com/send?phone=50661797265"
        },
        {
            url:"https://img.icons8.com/fluent/50/000000/gmail--v2.png" ,
            info:"Tonyjaen0@gmail.com",
            action:"mailto:tonyjaen0@gmail.com"
        }
        ,
        {
            //"https://img.icons8.com/officel/50/000000/linkedin.png"
            url:"https://img.icons8.com/color/50/000000/linkedin.png" ,
            info:"Linkedin",
            action:"https://www.linkedin.com/in/antony-jaen/"
        }
    ]
    return (
        <div className="container my-5">
            {social.map((s=>(
                <div className="row" key={s.url}>
                    <ContactMethod url={s.url} info={s.info} action={s.action}></ContactMethod>
                </div>
            )))}
            
        </div>
    )
}

export default Contact
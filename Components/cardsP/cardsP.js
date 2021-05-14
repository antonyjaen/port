import { useContext, useState } from "react";
import Context from "../Context/Context";
import CardP from "./cardP"
import Button from 'react-bootstrap/Button';

const CardsP = () => {
  const data = [
    { title: "Hotel-Angular", descS: "Una aplicación web diseñada para la gestión de un hotel creada con el fin de aprendizaje ", descE: "Is a web application developed to the management of the hotel for educational purposes.", imgURL: "/Hotel-Angular.png",video:"/primera.mp4" },
    { title: "Venta", descS: "Un sitio web dinámico creado para administración de ventas de una pequeña empresa", descE: "dynamic Website made to manage the sales of a startup business for educational purposes.", imgURL: "/Venta.png",video:"/Ventas.mp4" },
    { title: "Venta-Ionic", descS: "Adaptación de una aplicación web a aplicación móvil con tecnologías diferentes", descE: "using new and innovative technologies i created an a mobile application base on a website", imgURL: "/Venta-ionic.png",video:"/celular1.mp4" }
  ]
  const MyContext = useContext(Context)
  const [show, setShow] = useState(false)
  const [video, setVideo] = useState("")
  const showV = (state,vid)=>{
    setShow(state)
    setVideo(vid)
  }
  return (
    <div>
      {show ?
        <div className="Video-desc" >
          <h1 onClick={()=> {showV(false)}} >X</h1>
          <div className="ratio ratio-21x9 vid" >
            <iframe src={video} className="vid" title="YouTube video" allowfullscreen></iframe>
          </div>
        </div>
        :
        <div className="container fondo">
          <div className="row">
            {MyContext.english ?
              data.map(i => (
                <div className="col-md-4 pt-3 pb-3">
                  <CardP title={i.title} desc={i.descE} imgURL={i.imgURL}>
                    <Button onClick={()=> {showV(true,i.video)}} className="mt-2" variant="success">Conocer mas</Button>
                  </CardP>
                </div>
              ))
              :
              data.map(i => (
                <div className="col-md-4 pt-3 pb-3">
                  <CardP title={i.title} desc={i.descS} imgURL={i.imgURL}>
                    <Button  onClick={()=> {showV(true,i.video)}} className="mt-2" variant="success">Conocer mas</Button>
                  </CardP>
                </div>
              ))
            }
          </div>
        </div>
      }


    </div>
  )
}

export default CardsP
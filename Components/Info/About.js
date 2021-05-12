import { useContext } from "react"
import Context from "../Context/Context"
const About = () => {
    const MyContext = useContext(Context)
    return (
        <div className="container">
            <div className="row  ">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="content">
                                <div className="content-overlay"></div> <img class="content-image" src="yo.jpg" />
                                <div className="content-details fadeIn-bottom">
                                { MyContext.english ?
                                <h3 className="content-title">18 years</h3>
                                :
                                <h3 className="content-title">18 años</h3>
                                }
                                    
                                    <p className="content-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg> Heredia, San Joaquin</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1>Antony Jaén Víquez</h1>
                            { MyContext.english ?
                                <p>I’m going through my senior year at professional technical high school of Mercedes Norte, where I learned programming tools like Python, C++, HTML.CSS, JavaScript, MySQL y java. Besides that, self-studies like Angular, React, C#, typescript, MongoDB, flask y node.js. I have the ability to understand and speak english, I completed the BELT (business english language test) test and I got a result of B1</p>
                                :
                                <p className="fs">
                                Actualmente en me encuentro en Duodécimo grado en la especialidad de informática en
                                desarrollo de software en el colegio técnico profesional Mercedes Norte en la cual  he tenido
                                experiencia con las herramientas o lenguajes de programación  como lo son python, C++,  HTML.CSS,
                                JavaScrip,MySql y java. Además de varios estudios autodidactas por ejemplo Angular,React,
                                C#,typescript,MongoDB, flask y node.js.
                                </p>
                            }
                            
                        </div>
                    </div>
                    <div className="col-md-8 ">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
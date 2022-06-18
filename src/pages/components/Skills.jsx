import React from 'react'

export const Skills = ({ skills }) => {
    return (
        <div className="skills lax lax_preset_slideX:961:150" >
            <div className="area "  >
                <div className="lax lax_preset_seesaw:140:10" >  <img style={{ width: '250px', height: '200px' }} src="https://sithus.com/images/frontBack.png" /></div>
                <h4>Front-End</h4>
                <pre>
                    {
                        skills['front-end'].map((skill, index) => {
                            return <div key={index} > {skill} <br /> </div>
                        }
                        )
                    }
                </pre>
            </div>
            <div className="area">
                <img className="lax lax_preset_seesaw:140:10" style={{ width: '250px', height: '200px' }} src="https://www.svgrepo.com/show/295404/development-web-development.svg" />
                <h4>Back-End</h4>
                <pre>
                    {
                        skills['back-end'].map((skill, index) => {
                            return <div key={index} > {skill} <br /> </div>
                        }
                        )
                    }
                </pre>

            </div>
            <div className="area">
                <img className="lax lax_preset_seesaw:140:10" style={{ width: '250px', height: '200px' }} src="https://www.zenesys.com/Zenesys/media/Images/devops-development/services/icon5.png" />
                <h4 className="skill-title">Dev-Ops</h4>
                <pre>
                    {
                        skills['dev-ops'].map((skill, index) => {
                            return <div key={index} > {skill} <br /> </div>
                        }
                        )
                    }
                </pre>

            </div>
        </div>
    )
}



import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const Skill = ({name,imgURL})=>{
    return (
        <div className={"skill mx-4 my-3 skills"}>
            <OverlayTrigger
            placement={"top"}
            overlay={
                <Tooltip id={`tooltip-top`}>
                {name}
                </Tooltip>
            }
            >
             <img src={imgURL}/>
            </OverlayTrigger>
          
        </div>
    )
  }

export default Skill
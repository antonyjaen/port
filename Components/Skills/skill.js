import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const Skill = ({name,imgURL})=>{
    return (
        <div className={"skill col-3-md col-3-lg col-3-xl col-3-xll col-3-sm mx-4 my-3 skills"}>
            <div class="tooltip-inner">
                {name}
            </div>
             <img src={imgURL}/>
        </div>
    ) 
  }

export default Skill
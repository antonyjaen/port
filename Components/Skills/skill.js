import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const Skill = ({name,imgURL})=>{
    return (
        <div className={"skill col-3-md mx-4 my-3"} >
            <div class="tooltip-inner">
                 {name}
            </div>
             <img src={imgURL}/>
        </div>
    )
  }

export default Skill
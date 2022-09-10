import { Link } from "react-router-dom";

export function CancelButton({cancelLink}){
    return  <Link to={cancelLink} className='frmgrid__cancel'>Cancel</Link>
}
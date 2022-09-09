import { Link } from "react-router-dom";

export function CancelButton(){
    return  <Link to={'/warehouses'} className='frmgrid__cancel'>Cancel</Link>
}
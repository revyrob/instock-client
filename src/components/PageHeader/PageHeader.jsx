import './PageHeader.scss'
import { Link } from "react-router-dom";
export default function PageHeader({title,backLink}){
    return(
        <div className="pheader">
            <div className="pheader__bg-curtain"></div>
            <div className="pheader__wrapper">
                <Link to={`/${backLink}`} className="pheader__bcklink"><svg className="pheader__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2E66E6"/>
                        </svg></Link>
                <h1 className="pheader__txt">{title}</h1> 
             </div>
        </div>
        
    )
}
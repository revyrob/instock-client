import logo from '../../assets/logo/InStock-Logo_2x.png'
import './Header.scss'
export default function Header(){
    return(
        <header>
            <navbar className="nav">
                <a href="" className="nav__logo-link">
                    <img src={logo} alt="logo" className="nav__logo-img" />
                </a>
                <a href="" className="nav__link-item nav__link-item--active">Warehouses</a>
                <a href="" className="nav__link-item">Inventory</a>
            </navbar>
        </header>
    )
}
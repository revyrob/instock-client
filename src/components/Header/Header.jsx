import logo from '../../assets/logo/InStock-Logo_1x.png'
import './Header.scss'
export default function Header(){
    return(
        <div>
            <header className='nav__header'>
                <nav className="nav">
                    <a href="" className="nav__logo-link">
                        <img src={logo} alt="logo" className="nav__logo-img" />
                    </a>
                    <a href="" className="nav__link-warehouse nav__link-item--active">Warehouses</a>
                    <a href="" className="nav__link-inventory">Inventory</a>
                </nav>
            </header>
        </div>  
    )
}
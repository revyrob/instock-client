import logo from '../../assets/logo/InStock-Logo_1x.png';
import './Header.scss';

// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [page, setPage] = useState('warehouses');
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      <header className="nav__header">
        <nav className="nav">
          <Link to="/warehouses" className="nav__logo-link">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </Link>
          {/* <Link
            to="/warehouses"
            className="nav__link-warehouse nav__link-item--active"
          > */}
          <Link
            to="/warehouses"
            className={`${
              page === 'warehouses'
                ? 'nav__link-warehouse nav__link-item--active'
                : 'nav__link-warehouse'
            }`}
          >
            Warehouses
          </Link>
          {/* <Link to="/inventory" className="nav__link-inventory"> */}
          <Link
            to="/inventory"
            className={`${
              page === 'warehouses'
                ? 'nav__link-inventory'
                : 'nav__link-inventory nav__link-item--active'
            }`}
          >
            Inventory
          </Link>
        </nav>
      </header>
    </div>
  );
}

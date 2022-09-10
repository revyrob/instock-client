import logo from '../../assets/logo/InStock-Logo_1x.png';
import './Header.scss';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  // const regexInventory = /^/inventory[a-zA-Z-/-:---_]*/;
  // const path = paragraph.match(pathname);
  // console.log(path);

  return (
    <div>
      <header className="nav__header">
        <nav className="nav">
          <Link to="/warehouses" className="nav__logo-link">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </Link>

          <Link
            to="/warehouses"
            className={`${
              pathname === '/' ||
              pathname === '/warehouses' ||
              pathname === '/warehouses/new' ||
              pathname === 'warehouses/edit'
                ? 'nav__link-warehouse nav__link-item--active'
                : 'nav__link-warehouse'
            }`}
          >
            Warehouses
          </Link>

          <Link
            to="/inventory"
            className={`${
              pathname === '/inventory' ||
              pathname === '/inventory/new' ||
              pathname === 'inventory/edit'
                ? 'nav__link-inventory nav__link-item--active'
                : 'nav__link-inventory '
            }`}
          >
            Inventory
          </Link>
        </nav>
      </header>
    </div>
  );
}

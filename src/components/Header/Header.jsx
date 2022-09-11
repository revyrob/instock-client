import logo from '../../assets/logo/InStock-Logo_1x.png';
import './Header.scss';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [path, setPath] = useState('warehouses');

  const { pathname } = useLocation();

  // Read the path. Extract the first letter after the backslash. If i (inventory/...) or if w (warehouses/...). Apply css button classes in JSX from 'path' variable.
  useEffect(() => {
    const str = pathname.slice(1, 2);

    if (str === 'i') setPath('inventory');
    if (str === 'w' || str === undefined) setPath('warehouses');
  }, [pathname, path]);

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
              path === '' || path === 'warehouses'
                ? 'nav__link-warehouse nav__link-item--active'
                : 'nav__link-warehouse'
            }`}
          >
            Warehouses
          </Link>

          <Link
            to="/inventory"
            className={`${
              path === 'inventory'
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

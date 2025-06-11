import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

function Header() {
  return (
    <nav className="Header">
      <NavLink to="/"
        className={({ isActive}) =>
          isActive ? 'nav-link active' : 'nav-link'
      }>
        Home
      </NavLink>
      <NavLink to="/about"
              className={({ isActive}) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
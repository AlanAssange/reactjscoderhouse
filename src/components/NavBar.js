import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-li">
          <p className="logo">BRAND LOGO</p>
        </Link>
        <ul className="nav-list">
          <li>
            <Link to={"/productos/men's clothing"} className="nav-li">
              Men
            </Link>
          </li>
          <li>
            <Link to={"/productos/jewelery"} className="nav-li">
              Joyas
            </Link>
          </li>
          <li>
            <Link to={"/productos/electronics"} className="nav-li">
              Tech
            </Link>
          </li>
          <Link to="cart">
            <li>
              <CartWidget />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

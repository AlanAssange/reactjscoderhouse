import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export const NavBar = () => {



    return( 
    <div>
        <header>
        <nav>
          <p className="logo">BRAND LOGO</p>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Details</Link></li>
            <li><Link to="/products">Elemento 3</Link></li>
            <li><Link to="/">Elemento 4</Link></li>
            <li><CartWidget/></li>
          </ul>
        </nav>
      </header>
    </div>)
}

export default NavBar;
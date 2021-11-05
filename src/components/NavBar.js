import CartWidget from "./CartWidget";

export const NavBar = () => {



    return( 
    <div>
        <header>
        <nav>
          <p className="logo">BRAND LOGO</p>
          <ul className="nav-list">
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <li>Elemento 4</li>
            <li><CartWidget/></li>
          </ul>
        </nav>
      </header>
    </div>)
}

export default NavBar;
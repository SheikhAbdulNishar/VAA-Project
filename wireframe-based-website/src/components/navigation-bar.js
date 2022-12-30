const NavBar = () => {
    return ( 
        <div className="row navigationBar">
            <div className="col-lg-2 brand">
                <i className="brandLogo fa-brands fa-amazon"></i>
                <p className="brandName">amazon</p>
            </div>
            <div className=" col-lg-5 searchBar">
                <form class="d-flex" role="search" id="navBarSearchForm">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="col-lg-5 navBarLinks">
                <ul className="navBarList">
                    <li className="navItems">
                        <a href="">Home</a>
                    </li>
                    <li className="navItems">
                        <a href="">Products</a>
                    </li>
                    <li className="navItems">
                        <a href="">Orders & Returns</a>
                    </li>
                    <li className="navItems">
                        <a href="">Cart</a>
                    </li>
                    <li>
                        <input class="pristine" type="checkbox" name="toggle" value="on"></input>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default NavBar;
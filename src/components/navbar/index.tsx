import {
  Nav,
  Link1,
  NavMenu,
  Logo
} from "./navbar.styles";
import logo from "../../media/logo.png";
import Mycart from "../mycart";

const NavBar = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <Logo src={logo} alt="Logo" />
        </div>
        <div className="col-lg-8">
          <Nav>
            <NavMenu>
              <Link1 to="/">HOME</Link1>
              <Link1 to="/shop">SHOP</Link1>
              <Link1 to="/journal">JOURNAL</Link1>
              <Link1 to="/more">MORE</Link1>
            </NavMenu>
          </Nav>
        </div>
      </div>
      <Mycart />
    </>
  );
};

export default NavBar;

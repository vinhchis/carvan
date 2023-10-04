import { Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/image/logo/logofin.png";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-item">
      <Navbar.Brand href="/">
        <img src={Logo} alt="CARVAN_Logo" width={"100px"} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
        <Nav className="me-auto">
          <Nav.Link href="/brands">Brands</Nav.Link>
          <Nav.Link href="/ranges">Range of Cars</Nav.Link>
          <Nav.Link href="/cars">PreOwned Cars</Nav.Link>
          <Nav.Link href="/about">About CARVAN</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Nav.Link href="/signup">
            <FaUserPlus />
            SignUp
          </Nav.Link>
          <Nav.Link href="/signin">
            <FaUserCircle />
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
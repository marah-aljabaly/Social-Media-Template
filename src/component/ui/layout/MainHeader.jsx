import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

export default function MainHeader() {
  const navigate = useNavigate()
  
  return (
    
    <header className="shadow">
    <Navbar collapseOnSelect expand="sm" className="bg-dark pt-2 pb-2" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} className='logo'>MyLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/login")}}>Login</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/requist")}}>Requists</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/notification")}}>Notifications</Nav.Link>
          </Nav>
          <Nav>
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="rounded-circle img-fluid" width="45rem" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </header>
  )
}

   
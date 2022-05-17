import { Container, Nav, Navbar } from "react-bootstrap";
import navigationNavItems from '../../constants/navbarData.js';

const NavigationBar = () => {
 return (
  <Navbar bg="dark" variant="dark">
   <Container>
    <Navbar.Brand href="#home">GT Cutz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {navigationNavItems.map((item, i) => (
                <Nav.Link key={i} href={item.link}>{item.name}</Nav.Link>
            ))}
        </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default NavigationBar;

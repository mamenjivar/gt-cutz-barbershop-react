import { Container, Nav, Navbar } from "react-bootstrap";
import navigationNavItems from "../../constants/navbarData.js";

// styles
import classes from './NavigationBar.module.scss';

/**
 * The navigation bar for the barbershop
 * @returns
 */
const NavigationBar = () => {
 return (
  <nav className={classes.navColor}>
   <Navbar bg="dark" variant="dark">
    <Container>
     <Navbar.Brand href="#home">GT Cutz</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       {navigationNavItems.map((item, i) => (
        <Nav.Link key={i} href={item.link}>
         {item.name}
        </Nav.Link>
       ))}
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </nav>
 );
};

export default NavigationBar;

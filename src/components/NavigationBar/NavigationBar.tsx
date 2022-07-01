import { Container, Nav, Navbar } from 'react-bootstrap';
import navigationNavItems from '../../constants/navbarData.js';
import { Link as ScrollLink } from 'react-scroll';

// styles
import classes from './NavigationBar.module.scss';
/**
 * The navigation bar for the barbershop
 * @returns
 */
const NavigationBar = () => {
  const handleSetActive = () => {};

  return (
    <nav className={classes.navColor}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GT Cutz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link>
                <ScrollLink
                  to="hours-destination"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  Hours
                </ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink
                  to="location-destination"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  Location
                </ScrollLink>
              </Nav.Link>
              <Nav.Link>
                <ScrollLink
                  to="team-destination"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  Book Us
                </ScrollLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavigationBar;

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

// styles
import classes from './NavigationBar.module.scss';
/**
 * The navigation bar for the barbershop
 * @returns
 */
const NavigationBar = () => {
  return (
    <nav className={classes.navColor}>
      <Navbar className={classes.colorNav} variant="dark">
        <Container>
          <Navbar.Brand href="#home">GT CUTZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <ScrollLink
                className={classes.navItem}
                to="hours-destination"
                spy={true}
                smooth={true}
                duration={100}
              >
                Hours
              </ScrollLink>
              <ScrollLink
                className={classes.navItem}
                to="location-destination"
                spy={true}
                smooth={true}
                duration={100}
              >
                Location
              </ScrollLink>
              <ScrollLink
                className={classes.navItem}
                to="team-destination"
                spy={true}
                smooth={true}
                duration={100}
              >
                Book Us
              </ScrollLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavigationBar;

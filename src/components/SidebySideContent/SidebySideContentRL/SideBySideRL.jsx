import { Col, Container, Row } from "react-bootstrap";

// styles
import classes from "./SideBySideRL.module.scss";

/**
 * Contains location information
 * @returns
 */
const SideBySideRL = () => {
 return (
  <section className={`${classes.backgroundImage} ${classes.locationSection}`}>
   <Container>
    <Row>
     <Col md={6}>
      <div className={classes.location}>
       <h2>3978 S Figueroa St, <br />Los Angeles, CA 90037</h2>
      </div>
     </Col>
     <Col md={6}>
      <div className={classes.locationTitle}>
       <h1>Location</h1>
      </div>
     </Col>
    </Row>
   </Container>
  </section>
 );
};

export default SideBySideRL;

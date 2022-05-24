// styles
import { Col, Container, Row } from "react-bootstrap";
import classes from "./SideBySideRL.module.scss";

const SideBySideRL = () => {
 return (
  <section className={classes.backgroundImage}>
   <Container>
    <Row>
     <Col md={6}>
        <h2>3978 S Figueroa St, Los Angeles, CA 90037</h2>
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

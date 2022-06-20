import { Col, Container, Row } from 'react-bootstrap';

// styling
import classes from './SideBySideLR.module.scss';

/**
 * Hours section for barber shop
 * @returns
 */
const SidebySideLR = () => {
  return (
    <section className={classes.hoursSection}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={classes.hoursTitle}>
              <h1 className={classes.hoursSize}>Hours</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.hours}>
              <p>Monday: 12PM - 6PM</p>
              <p>Tuesday: 12PM - 6pm</p>
              <p>Wednesday: 11AM - 7PM</p>
              <p>Thursday: 11AM - 7PM</p>
              <p>Friday: 11AM - 7PM</p>
              <p>Saturday: 10AM - 4:45PM</p>
              <p>Sunday: 11:30AM - 4PM</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SidebySideLR;

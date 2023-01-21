import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// styles
import classes from './SideBySideRL.module.scss';

/**
 * Contains location information
 * @returns
 */
const SideBySideRL = () => {
  return (
    <section
      className={`${classes.backgroundImage} ${classes.locationSection}`}
    >
      <Container>
        <Row>
          <Col md={{ span: 6 }} xs={{ span: 12, order: 2 }}>
            <div className={classes.location}>
              <h2>
                <a
                  href="https://www.google.com/maps/place/GT+Cutz+Barbershop+LLC/@34.0117616,-118.2844714,17z/data=!3m2!4b1!5s0x80c2c80ea8c84f05:0xd6968f256a11c50e!4m5!3m4!1s0x80c2c91595a941d3:0xad44b8c34e82d4af!8m2!3d34.0117572!4d-118.2822827"
                  target="_blank"
                  rel="noreferrer"
                >
                  3978 S Figueroa St, <br />
                  Los Angeles, CA 90037
                </a>
              </h2>
            </div>
          </Col>
          <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <div className={classes.locationTitle}>
              <h1 className={classes.locationSize}>Location</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SideBySideRL;

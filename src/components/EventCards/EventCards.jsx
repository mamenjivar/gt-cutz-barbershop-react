import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// styles
import styles from './EventCards.module.scss';

import testImage from '../../img/team-img/dannybarber.jpeg';

const EventCards = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card
            style={{ width: '50rem', flexDirection: 'row' }}
            className="mx-auto"
          >
            <Card.Img className={styles.imageSize} src={testImage} />
            <Card.Body className={styles.testBorder}>
              <Card.Title className={styles.centerTitle}>
                Barber Event
              </Card.Title>
              <Card.Text>
                <b>June 30, 2023</b>
                <br />
                Sign up so you can be a part of the barber event happening at
                the shop!
              </Card.Text>
              <div>
                <Button>More Info</Button>
                <Button>Sign Up</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventCards;

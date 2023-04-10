import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// styles
import styles from './EventCards.module.scss';

import testImage from '../../img/team-img/dannybarber.jpeg';

import eventsData from '../../constants/eventsData';

const EventCards = () => {
  return (
    <Container>
      <Row>
        {eventsData.map((item, index) => {
          return (
            <Col key={index}>
              <Card
                style={{ width: '50rem', flexDirection: 'row' }}
                className="mx-auto"
              >
                <Card.Img className={styles.imageSize} src={item.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={styles.centerTitle}>
                    {item.eventTitle}
                  </Card.Title>
                  <Card.Text>
                    <b>{item.eventDate}</b>
                    <br />
                    {item.eventDescription}
                  </Card.Text>
                  <div className="mt-auto d-flex justify-content-around">
                    <Button size='lg'>More Info</Button>
                    <Button size='lg'>Sign Up</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default EventCards;

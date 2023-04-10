import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

// styles
import classes from './MeetTheTeam.module.scss';

// Barber profiles
import teamData from '../../constants/teamData';

/**
 * Meet the team section where one can see
 * all the barbers that are available.
 * Will have information to learn more about them
 * and book them for a cut
 * @returns
 */
const MeetTheTeam = () => {
  return (
    <section className={classes.meetTheTeam}>
      <Container>
        <h1 className={classes.teamTitleSize}>Book Us Here</h1>

        <Row>
          {teamData.map((item, index) => {
            return (
              <Col
                key={index}
                md={6}
                sm={12}
                lg={4}
                className={classes.teamCard}
              >
                <Card style={{ width: '18rem' }} className="mx-auto border-0">
                  <Card.Img src={item.image} />
                  <Card.Body>
                    <Card.Title className={classes.centerTitle}>
                      {item.name} <br  /> {item.specialty !== '' ? item.specialty : ''}
                    </Card.Title>
                    <Card.Text className={classes.igCenter}>
                      {item.handleName}
                    </Card.Text>
                    <div className={classes.centerButton}>
                      <a
                        href={item.handleLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          className={classes.instaSize}
                          icon={faInstagramSquare}
                        />
                      </a>
                      <Button
                        href={item.bookLink}
                        variant="primary"
                        target="_blank"
                        size="lg"
                      >
                        Book
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default MeetTheTeam;

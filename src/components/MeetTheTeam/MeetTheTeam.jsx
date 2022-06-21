import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// styles
import classes from './MeetTheTeam.module.scss';

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
        <h1 className={classes.teamTitleSize}>Meet the Team</h1>

        <Row>
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  GT the Barber
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    className={classes.instaSize}
                    icon={faInstagram}
                  />{' '}
                  @GTcutz
                </Card.Text>
                <div className={classes.centerButton}>
                  <Button
                    href="Https://getsqr.co/gt-the-barber"
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
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Danny the Barber
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    className={classes.instaSize}
                    icon={faInstagram}
                  />{' '}
                  @DannyHBarber
                </Card.Text>
                <div className={classes.centerButton}>
                  <Button
                    href="https://dannybarber.square.site/"
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
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Jr the Barber
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    className={classes.instaSize}
                    icon={faInstagram}
                  />{' '}
                  @LavishhJr_Cutzzz
                </Card.Text>
                <div className={classes.centerButton}>
                  <Button
                    href="http://book.thecut.co/lavishhjr_cutzz"
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
        </Row>

        <Row>
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Miguel the Barber
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    className={classes.instaSize}
                    icon={faInstagram}
                  />{' '}
                  @Ciskoe_Cutz
                </Card.Text>
                <div className={classes.centerButton}>
                  <Button
                    href="https://getsqr.co/miguel-silva"
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
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Ciskoe the Barber
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    className={classes.instaSize}
                    icon={faInstagram}
                  />{' '}
                  @Ciskoe_Cutz
                </Card.Text>
                <div className={classes.centerButton}>
                  <Button
                    href="https://instagram.com/ciskoe_cutz?igshid=YmMyMTA2M2Y="
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
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Hector the Barber
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    className={classes.instaSize}
                    icon={faInstagram}
                  />{' '}
                  @Jumpy_Cutz
                </Card.Text>
                <div className={classes.centerButton}>
                  <Button
                    href="https://instagram.com/jumpy_cutz?igshid=YmMyMTA2M2Y="
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
        </Row>
        <Row>
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Vanessa <br /> Barber / Cosmetologist
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    className={classes.instaSize}
                    icon={faInstagram}
                  />{' '}
                  @ChuckisCuts1
                </Card.Text>
                <div className={classes.centerButton}>
                  <Button
                    href="https://instagram.com/chuckiscuts1?igshid=YmMyMTA2M2Y="
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
        </Row>
      </Container>
    </section>
  );
};

export default MeetTheTeam;

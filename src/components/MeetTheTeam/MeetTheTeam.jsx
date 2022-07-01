import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// styles
import classes from './MeetTheTeam.module.scss';

// images
import gtcutz from '../../img/team-img/Gtctuz-Gt_the_barber.jpeg';
import dannyhbarber from '../../img/team-img/DannyHBarber-Danny-the-barber.jpeg';
import lavishcutz from '../../img/team-img/LavishhJr_Cutzz-Jr_the_barber.jpeg';
import miguelblends from '../../img/team-img/_miguelblends-Miguel_the_barber.jpeg';
import ciskoeCutz from '../../img/team-img/Ciskoe_Cutz-Ciskoe_the_barber.jpeg';
import jumpyCutz from '../../img/team-img/jumpy_cutz-Hector_the_barber.jpeg';
import chuckiscutz from '../../img/team-img/chuckiscuts1-vanessa-Garza.jpeg';

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
          <Col md={4} sm={12} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={gtcutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  GT the Barber
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://www.instagram.com/gtcutz/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagram}
                    />
                  </a>{' '}
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
              <Card.Img src={dannyhbarber} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Danny the Barber
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://www.instagram.com/DannyHBarber/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagram}
                    />
                  </a>{' '}
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
              <Card.Img src={lavishcutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Jr the Barber
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://www.instagram.com/lavishhjr_cutzz/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagram}
                    />
                  </a>{' '}
                  @LavishhJr_Cutzz
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
              <Card.Img src={miguelblends} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Miguel the Barber
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://www.instagram.com/_Miguelblends/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagram}
                    />
                  </a>{' '}
                  @_Miguelblends
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
              <Card.Img src={ciskoeCutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Ciskoe the Barber
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://www.instagram.com/Ciskoe_Cutz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagram}
                    />
                  </a>{' '}
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
              <Card.Img src={jumpyCutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Hector the Barber
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://www.instagram.com/Jumpy_Cutz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagram}
                    />
                  </a>{' '}
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
              <Card.Img src={chuckiscutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Vanessa <br /> Barber / Cosmetologist
                </Card.Title>
                <Card.Text>
                  <a
                    href="https://www.instagram.com/ChuckisCuts1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagram}
                    />
                  </a>{' '}
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

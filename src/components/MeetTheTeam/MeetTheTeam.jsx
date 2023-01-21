import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

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
import diegocutz from '../../img/team-img/Diego-cutz-barber.jpeg';
import pollocutz from '../../img/team-img/pollocutz-barber.jpeg';

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
          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={gtcutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  GT the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>@GTcutz</Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/gtcutz/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={dannyhbarber} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Danny the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>
                  @DannyHBarber
                </Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/DannyHBarber/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={lavishcutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Jr the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>
                  @LavishhJr_Cutzz
                </Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/lavishhjr_cutzz/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={miguelblends} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Miguel the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>@_Miguelblends</Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/_Miguelblends/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={ciskoeCutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Ciskoe the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>@Ciskoe_Cutz</Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/Ciskoe_Cutz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={jumpyCutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Hector the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>@Jumpy_Cutz</Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/Jumpy_Cutz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={chuckiscutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Vanessa <br /> Barber / Cosmetologist
                </Card.Title>
                <Card.Text className={classes.igCenter}>
                  @ChuckisCuts1
                </Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/ChuckisCuts1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={diegocutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Diego the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>
                  @d.tb___
                </Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/d.tb___/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
                  <Button
                    href="http://book.thecut.co/dtb_"
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

          <Col md={6} sm={12} lg={4} className={classes.teamCard}>
            <Card style={{ width: '18rem' }} className="mx-auto">
              <Card.Img src={pollocutz} />
              <Card.Body>
                <Card.Title className={classes.centerTitle}>
                  Pollo the Barber
                </Card.Title>
                <Card.Text className={classes.igCenter}>
                  @pollocutz_
                </Card.Text>
                <div className={classes.centerButton}>
                  <a
                    href="https://www.instagram.com/pollocutz_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={classes.instaSize}
                      icon={faInstagramSquare}
                    />
                  </a>
                  <Button
                    href="https://www.instagram.com/pollocutz_/?igshid=YmMyMTA2M2Y%3D"
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

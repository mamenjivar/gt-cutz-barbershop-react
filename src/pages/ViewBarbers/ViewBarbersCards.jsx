import React, { useState, useEffect } from 'react';
import { app } from '../../firebaseConfig';
import { getDatabase, ref, get, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// styles
import classes from './ViewBarbersCards.module.scss';

// Barber profiles
//import teamData from '../../constants/teamData';

/**
 * This page will replace the table used to display all the barbers. It'll look better
 * @returns
 */
const ViewBarbersCards = () => {
  const navigate = useNavigate();
  let [barberArray, setBarberArray] = useState([]);

  // load barber data on page load
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'barber');
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const myData = snapshot.val();
      const temporaryArray = Object.keys(myData).map((myFireId) => {
        return {
          ...myData[myFireId],
          barberId: myFireId,
        };
      });
      setBarberArray(Object.values(temporaryArray));
    } else {
      console.log("couldn't find entries, please add some more");
    }
  };

  // delete a barber; might convert to archiving instead
  const deleteBarber = async (barberId) => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'barber/' + barberId);
    await remove(dbRef);
    window.location.reload();
    // fetchData();
  };

  // navigate to create barber page
  const createBarberAction = () => {
    navigate('/createBarber');
  };

  return (
    <section className={classes.meetTheTeam}>
      <Container>
        <h1>Barber Dashboard</h1>
        <Row>
          {barberArray.map((item, index) => {
            return (
              <Col
                key={index}
                md={6}
                sm={12}
                lg={4}
                className={classes.teamCard}
              >
                <Card style={{ width: '18rem' }} className="mx-auto border-0">
                  <Card.Img src={item.profilePicture} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      {item.name} <br />
                    </Card.Title>
                    <Card.Text>
                      <span className={classes.labelName}>IG Handle: </span> @
                      <a href={item.instagramURL} title="View IG Handle">
                        {item.instagramHandle}
                      </a>
                      <br />
                      <span className={classes.labelName}>
                        Booking name:
                      </span>
                      Instagram <br />
                      <span className={classes.labelName}>
                        Booking URL: {item.bookingURL}
                      </span>
                      <br />
                      <span className={classes.labelName}>Specialties: </span> {item.specialty !== '' ? item.specialty : ''}
                    </Card.Text>
                    <div style={{ marginBottom: '10px' }}>
                      <Button
                        className={classes.buttonSpacing}
                        variant="primary"
                        onClick={ () => navigate(`/updatebarber/${item.barberId}`)}
                      >
                        <FontAwesomeIcon icon={faPencil} /> Edit Info
                      </Button>
                      <Button
                        className={classes.buttonSpacing}
                        variant="danger"
                        onClick={ () => deleteBarber(item.barberId)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Delete Barber
                      </Button>
                      <br />
                    </div>
                    <Button variant={`${item.isBarberActive === 'true' ? 'outline-success' : 'outline-secondary'}`} disabled>
                    {item.isBarberActive === 'true' ? 'Active' : 'Inactive'}
                    </Button>
                    {/* success && secondary */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

          {/* Create a new user card */}
          <Card style={{ width: '18rem' }} className="mx-auto border-0">
            <h2>Create a new barber <FontAwesomeIcon  icon={faCirclePlus}/></h2>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default ViewBarbersCards;

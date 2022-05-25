import { Card, Button, Container, Row, Col } from "react-bootstrap";

/**
 * Meet the team section where one can see
 * all the barbers that are available.
 * Will have information to learn more about them
 * and book them for a cut
 * @returns
 */
const MeetTheTeam = () => {
 return (
  <section>
   <Container>
    <h1>Meet the Team</h1>

    <Row>
     <Col md={4}>
      <Card style={{ width: "18rem" }}>
       <Card.Img />
       <Card.Body>
        <Card.Title>GT Cutz</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Book</Button>
       </Card.Body>
      </Card>
     </Col>
     <Col md={4}>
      <Card style={{ width: "18rem" }}>
       <Card.Img />
       <Card.Body>
        <Card.Title>Barber 01</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Book</Button>
       </Card.Body>
      </Card>
     </Col>
     <Col md={4}>
      <Card style={{ width: "18rem" }}>
       <Card.Img />
       <Card.Body>
        <Card.Title>Barber 01</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Book</Button>
       </Card.Body>
      </Card>
     </Col>
    </Row>
   </Container>
  </section>
 );
};

export default MeetTheTeam;

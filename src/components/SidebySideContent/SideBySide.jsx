import { Col, Container, Row } from "react-bootstrap";

const SidebySide = () => {
 return (
  <section>
   <Container>
    <Row>
        <Col md={6}>
            <h1>Hours</h1>
        </Col>
        <Col md={6}>
            <p>
                Monday - Friday: 10am - 6p
            </p>
        </Col>
    </Row>
   </Container>
  </section>
 );
};

export default SidebySide;

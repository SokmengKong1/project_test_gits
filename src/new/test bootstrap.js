import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

const WelcomePage = () => {
  return (
    <Container>
      <Jumbotron className="mt-5">
        <h1>Welcome to Our Website!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default WelcomePage;

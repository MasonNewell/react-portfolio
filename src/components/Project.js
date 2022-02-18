import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import roomf from "../images/Projects/roomf.png";
import budgetTracker from "../images/Projects/budgetTracker.png";
import techBlog from "../images/Projects/techBlog.png";
import workoutTracker from "../images/Projects/workoutTracker.png";
function Project() {
  return (
    <Container>
      <Row>
        {/* RoomFinder */}
        <Col xs={12} md={6}>
          <Card className="bg-dark text-white">
            <Card.Img src={roomf} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>RoomFinders</Card.Title>
              <Card.Text>Uses Roomster API to find rental properties</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        {/* Budget Tracker */}
        <Col xs={12} md={6}>
          <Card className="bg-dark text-black">
            <Card.Img src={budgetTracker} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Budget Tracker</Card.Title>
              <Card.Text>MongoDB/Mongoose/IndexedDB to keep track of budget info</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        {/* Techblog */}
        <Col xs={12} md={6}>
          <Card className="bg-dark text-black">
            <Card.Img src={techBlog} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Techblog</Card.Title>
              <Card.Text>Node/Express/MySQL</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        {/* Workout Tracker */}
        <Col xs={12} md={6}>
          <Card className="bg-dark text-black">
            <Card.Img src={workoutTracker} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Workout Tracker</Card.Title>
              <Card.Text>Node/Express/NoSQL/MongoDB</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;

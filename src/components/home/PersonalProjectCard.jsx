import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const PersonalProjectCard = ({ value }) => {
  const { name, description, images } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || "Project Name"} </Card.Title>
          <Card.Text>{description || "Project Description"}</Card.Text>
          {images && images.length > 0 && (
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalProjectCard;
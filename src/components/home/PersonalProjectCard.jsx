import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const PersonalProjectCard = ({ value }) => {
  const { name, description, images } = value;

  return (
    <Col md={6} className="d-flex align-items-center justify-content-center mb-4">
      <Card className="card shadow-lg bg-light rounded">
        <Card.Body>
          <Card.Title as="h5" className="text-dark">{name || "Project Name"} </Card.Title>
          <Card.Text className="text-dark">{description || "Project Description"}</Card.Text>
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

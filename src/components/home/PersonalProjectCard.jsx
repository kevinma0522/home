import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const PersonalProjectCard = ({ value }) => {
  const { name, description, images } = value;

  const cardStyle = {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "#cceeff",
    borderRadius: "1.5rem", // More rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Floating effect
  };

  const carouselStyle = {
    height: "250px", // Fixed height for the carousel to maintain card size
  };

  const imageStyle = {
    height: "250px", // Ensure images fit within the carousel height
    objectFit: "cover", // Maintain aspect ratio and cover the area
  };

  return (
    <Col md={6} className="d-flex align-items-center justify-content-center mb-4">
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title as="h5" className="text-dark">{name || "Project Name"} </Card.Title>
          <Card.Text className="text-dark">{description || "Project Description"}</Card.Text>
          {images && images.length > 0 && (
            <Carousel style={carouselStyle}>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} style={imageStyle} />
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

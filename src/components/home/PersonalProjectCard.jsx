import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const PersonalProjectCard = ({ value, gradient }) => {
  const { name, description, images } = value;

  const cardStyle = {
    width: "100%",
    maxWidth: "800px", // Increased max-width to make the card bigger
    height: "600px", // Fixed height for the card
    margin: "auto",
    background: `linear-gradient(136deg,${gradient})`, // Use the gradient from mainBody
    backgroundSize: "1200% 1200%",
    borderRadius: "1.5rem", // More rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Floating effect
  };

  const carouselStyle = {
    height: "350px", // Fixed height for the carousel to maintain card size
    overflow: "hidden",
  };

  const imageStyle = {
    height: "auto", // Allow images to maintain their own height
    width: "100%",
    objectFit: "cover", // Maintain aspect ratio and cover the area
  };

  return (
    <Col md={12} className="d-flex align-items-center justify-content-center mb-4">
      <Card style={cardStyle}>
        <Card.Body className="d-flex flex-column">
          <Card.Title as="h5" className="text-dark">{name || "Project Name"} </Card.Title>
          {images && images.length > 0 && (
            <Carousel style={carouselStyle}>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} style={imageStyle} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <Card.Text className="text-dark mt-3">
            {description || "Project Description"}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalProjectCard;

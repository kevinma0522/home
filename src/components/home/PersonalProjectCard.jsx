import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const PersonalProjectCard = ({ value, gradient }) => {
  const { name, description, images } = value;
  const [showDescription, setShowDescription] = useState(false);

  const cardStyle = {
    width: "100%",
    maxWidth: "800px", // Increased max-width to make the card bigger
    height: "600px", // Increased height to make the card bigger
    margin: "auto",
    background: `linear-gradient(136deg,${gradient})`, // Use the gradient from mainBody
    backgroundSize: "1200% 1200%",
    borderRadius: "1.5rem", // More rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Floating effect
  };

  const carouselStyle = {
    height: "350px", // Fixed height for the carousel to maintain card size
  };

  const imageStyle = {
    height: "350px", // Ensure images fit within the carousel height
    objectFit: "cover", // Maintain aspect ratio and cover the area
  };

  const handleReadMore = () => {
    setShowDescription(!showDescription);
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
          {showDescription && (
            <Card.Text className="text-dark mt-3">
              {description || "Project Description"}
            </Card.Text>
          )}
          <Button
            variant="link"
            onClick={handleReadMore}
            className="mt-auto align-self-start"
          >
            {showDescription ? "Show Less" : "Read More"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalProjectCard;

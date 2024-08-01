import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const PersonalProjectCard = ({ value, gradient }) => {
  const { name, description, images } = value;

  const cardStyle = {
    width: "100%",
    maxWidth: "500px", // Adjusted max-width to make the card more vertical
    height: "700px", // Increased height for the card
    margin: "auto",
    background: `linear-gradient(136deg,${gradient})`, // Use the gradient from mainBody
    backgroundSize: "1200% 1200%",
    borderRadius: "1.5rem", // More rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Floating effect
  };

  const carouselStyle = {
    height: "450px", // Increased height for the carousel to match card height
    overflow: "hidden",
  };

  const imageStyle = {
    height: "100%", // Ensure the image covers the height of the carousel
    width: "100%", // Ensure the image covers the width of the carousel
    objectFit: "contain", // Ensure the whole image is shown without being cut off
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

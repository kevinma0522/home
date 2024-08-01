import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const PersonalProjectCard = ({ value }) => {
  const { name, description, images, links, linkDescription } = value;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || "Project Name"} </Card.Title>
          {images && images.length > 0 && (
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <Button variant="link" onClick={toggleDescription}>
            {showDescription ? "Show Less" : "Read More"}
          </Button>
          {showDescription && <Card.Text>{description}</Card.Text>}
          {links && links.length > 0 && (
            <div>
              <h6>{linkDescription}</h6>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalProjectCard;

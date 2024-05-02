import React from "react";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function Grid() {
  const gridData = [
    {
      id: 1,
      name: "Dog 1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
    },
    {
      id: 2,
      name: "Dog 2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
    },
    {
      id: 3,
      name: "Dog 3",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
    },
    {
      id: 4,
      name: "Dog 4",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
    },
    {
        id: 5,
        name: "Dog 5",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
      },
      {
        id: 6,
        name: "Dog 6",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
      },
      {
        id: 7,
        name: "Dog 7",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
      },
      {
        id: 8,
        name: "Dog 8",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
      },
      {
        id: 9,
        name: "Dog 9",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ipsum nec justo aliquet ultricies.",
      },
  ];

  return (
    <div style={{ backgroundColor: "#f89f95", padding: "20px" }}>
      <div className="row">
        {gridData.map((item) => (
          <div
            key={item.id}
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
            style={{ marginBottom: "20px" }}
          >
            <div
              style={{
                backgroundColor: "#e95c51",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <Card>
                <Card.Img variant="top" src="images\assert\About1.webp" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.details}</Card.Text>
                  <Button variant="danger">Get</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;

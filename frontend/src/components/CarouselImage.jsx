import React from "react";
import Button from "react-bootstrap/Button";

function CarouselImage(props) {
  return (
    <div
      className=" d-flex flex-column flex-md-row justify-content-md-evenly align-items-center"
      style={{
        padding: "10px 20px",
        background: "linear-gradient(to bottom, #f89f95, #e95c51)",
      }}
    >
      <div
        className="text-center mb-3 mb-md-0 text-md-start"
        style={{ width: "30%" }}
      >
        <h2>{props.name}</h2>
        <p>{props.caption}</p>
        <Button variant="outline-light">Get Now</Button>
      </div>
      <img
        src={`${props.img}`}
        alt={`${props.name}`}
        className="mb-3 mb-md-0"
        style={{ width: "auto", height: "400px" }}
      />
    </div>
  );
}

export default CarouselImage;

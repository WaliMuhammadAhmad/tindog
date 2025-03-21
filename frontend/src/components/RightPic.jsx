import React from "react";

function RightPic(props) {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          width: "100%",
          padding: "2em",
        }}
      >
        <div
          style={{
            fontSize: "2em",
            padding: "1em",
          }}
        >
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
        <img
          src={props.image}
          alt={props.title}
          style={{
            height: "auto",
            maxWidth: "20%",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default RightPic;

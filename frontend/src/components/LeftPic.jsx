import React from 'react';

function LeftPic(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      width: "100%",
      padding: "2em",
      backgroundImage: `linear-gradient(to bottom, ${props.topColor}, ${props.topColor})`,
    }}>
      <img src={props.image} alt="left-pic" style={{
        height: "auto",
        maxWidth: "20%",
        borderRadius: "20px",
      }} />
      <div style={{
        fontSize: "2em",
        padding: "1em",
      }}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default LeftPic;
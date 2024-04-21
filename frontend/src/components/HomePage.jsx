import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function HomePage(props) {
  return (
    <div
      className="custom-gradient"
      style={{
        backgroundImage: "linear-gradient(to top, #d83f31, #e95c51)",
        height: "100vh",
        paddingTop: "3rem",
      }}
    >
      <div className="container" style={{ width: "85%" }}>
        <h1
          className="font-capitalize"
          style={{
            color: "white",
            padding: "1em 0",
            fontSize: "5em",
            borderBottom: "1px solid white",
          }}
        >
          {props.text}
        </h1>
        <h3 style={{ padding: "1em 0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          tempore amet temporibus sint distinctio possimus nemo. Corrupti
          laudantium eligendi numquam pariatur quis tempora modi odit provident.
          Deserunt sint esse explicabo.
        </h3>
      </div>
      <div className="text-center"
      style={{
        fontSize: "5em",
        color: "white",
        cursor: "pointer",
        // position: "absolute",
        bottom: "1em",
        // left: "50%",
        // transform: "translateX(-50%)",
      }}>
        <MdKeyboardDoubleArrowDown />
      </div>
    </div>
  );
}

export default HomePage;

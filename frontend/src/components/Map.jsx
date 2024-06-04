import React from "react";

function Map() {
  return (
    <div
      className="fluid-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "100%",
        backgroundImage: "linear-gradient(to bottom, #E95D52, #E95D52)",
      }}
    >
      <h1 className="display-3" style={{position: "absolute"}}>OUR LOCATION</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6805.9373690863285!2d74.31953519999998!3d31.470047599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1717490844941!5m2!1sen!2s"
        width="100%"
        height="70%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;

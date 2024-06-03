import React from "react";
import Topbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import Grid from "../components/Grid";
import NewsLetters from "../components/NewsLetters";
import Footer from "../components/Footer";

function Shop() {
  return (
    <div>
      <Topbar />
      <HomePage text="Shop" />
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #D84032, #F89F95)",
        }}
      >
        <Grid />
      </div>
      <NewsLetters />
      <Footer />
    </div>
  );
}

export default Shop;

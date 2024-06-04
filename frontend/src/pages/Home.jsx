import React from "react";
import LandingPage from "../components/LandingPage";
import Topbar from "../components/Navbar";
import Carousl from "../components/Carousel";
import Info from "../components/Info";
import Description from "../components/Description";
import Map from "../components/Map";
import Footer from "../components/Footer";

const description = {
  text: "Our Mission",
  content:
    "Our mission is simple: to connect pet lovers with the furry companions of their dreams. We offer a curated selection of the finest breeds, trusted breeders, and top-notch pet products, ensuring that every pet finds a loving home and every owner has access to the best care. Join us on this heartfelt journey as we celebrate the unconditional love, boundless joy, and endless adventures that come with being a pet owner. At tindog, we're not just building a marketplace; we're building a community of pet lovers united by their love for all things furry and fantastic.",
  topColor: "#E95C51",
  bottomColor: "#F69B91",
};

function Home() {
  return (
    <div className="text-white">
      <Topbar />
      <LandingPage />
      <Info />
      <Carousl />
      <Map />
      <Description {...description} />
      <Footer />
    </div>
  );
}

export default Home;

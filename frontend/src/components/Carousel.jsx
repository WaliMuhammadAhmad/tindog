import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";

const CarouselImages = [
  {
    img: "/images/dogs/GRetriever.png",
    name: "Golden Retriever",
    caption: "Golden Retrievers are friendly, tolerant, and intelligent dogs known for their gentle temperament and love for people. They are popular family pets and are often used as therapy dogs due to their calm demeanor and affectionate nature. Golden Retrievers have a beautiful golden coat and are renowned for their loyalty and devotion to their owners.",
  },
  {
    img: "/images/dogs/Shephard.png",
    name: "German Shepherd",
    caption: "German Shepherds are intelligent, courageous, and versatile dogs known for their loyalty and trainability. They are often used as police, military, and search-and-rescue dogs due to their strong work ethic and protective instincts. German Shepherds have a distinctive black and tan coat and are highly adaptable to various environments.",
  },
  {
    img: "/images/dogs/LRetriever.png",
    name: "Labrador Retriever",
    caption: "Labrador Retrievers are friendly, outgoing, and high-spirited dogs known for their intelligence and loyalty. They are excellent family pets and are often used as service dogs due to their gentle nature and willingness to please. Labradors come in three colors: black, yellow, and chocolate.",
  },
  {
    img: "/images/dogs/Bulldog.png",
    name: "Bulldog",
    caption: "Bulldogs are sturdy, courageous, and affectionate dogs known for their distinctive wrinkled face and pushed-in nose. They have a calm and gentle disposition, making them excellent companions for families and individuals alike. Bulldogs are known for their loyalty and are often referred to as 'sourmugs' due to their comical expressions.",
  },
  {
    img: "/images/dogs/Poddle.png",
    name: "Poodle",
    caption: "Poodle are intelligent, elegant, and highly trainable dogs known for their curly hypoallergenic coat and graceful appearance. They come in three sizes: standard, miniature, and toy, and are versatile in various roles, including family pets, therapy dogs, and show dogs. Poodles are known for their athleticism and agility, as well as their playful and affectionate nature.",
  },
  {
    img: "/images/dogs/Dalmatian.png",
    name: "Dalmatian",
    caption: "Dalmatians are energetic, playful, and distinctive dogs known for their unique spotted coat and graceful appearance. They are highly active and require regular exercise and mental stimulation. Dalmatians are friendly and loyal companions, often forming strong bonds with their families. They have a history as carriage dogs and firefighters' mascots and are known for their endurance and agility.",
  },
  {
    img: "/images/dogs/Pitbull.png",
    name: "Pitbull",
    caption: "Pitbull are strong, loyal, and affectionate dogs known for their muscular build and determined demeanor. Despite their often-misunderstood reputation, Pitbulls are loving and devoted companions when raised and trained properly. They are intelligent and eager to please, making them highly trainable. Pitbulls thrive on human companionship and are known for their loyalty and protective instincts towards their families.",
  },
  {
    img: "/images/dogs/Cordi.png",
    name: "Cordi ",
    caption: "Cordi are intelligent, affectionate, and spirited dogs known for their long bodies, short legs, and expressive faces. They come in two distinct breeds: Pembroke Welsh Corgi and Cardigan Welsh Corgi. Corgis are herding dogs with a strong instinct to work and are highly trainable. They are loyal family pets and are known for their playful nature and ability to form strong bonds with their owners.",
  },
];
console.log(CarouselImages);

function Carousl() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {CarouselImages.map((_, idx) => (
        <Carousel.Item key={idx}>
          <CarouselImage {..._}  />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousl;
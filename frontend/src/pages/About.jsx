import React from "react";
import Topbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import Description from "../components/Description";
import Footer from "../components/Footer";
import LeftPic from "../components/LeftPic";
import RightPic from "../components/RightPic";
import NewsLetters from "../components/NewsLetters";

const description = {
  text: "Our Mission",
  content: "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore amet temporibus sint distinctio possimus nemo. Corrupti laudantium eligendi numquam pariatur quis tempora modi odit provident. Deserunt sint esse explicabo.",
  topColor: "#D84032",
  bottomColor: "#d83f31"
};

const PicANDContent = [
  {
    image: "/images/assert/About1.webp",
    title: "Boring isn't in our DNA.",
    content: "At Tindog, we believe in living life to the fullest. With our vibrant community and exciting activities, boredom is simply not an option. Get ready to embark on thrilling adventures and make unforgettable memories with your furry companion by your side.",
    topColor: "#D84032",
    bottomColor: "#f89f95"
  },
  {
    image: "/images/assert/About2.webp",
    title: "Active and healthy",
    content: "Our four-legged friends deserve the best, which is why we prioritize their health and well-being. From daily walks in the park to energetic play sessions, we promote an active lifestyle that keeps your pet happy, healthy, and full of vitality.",
    topColor: "#D84032",
    bottomColor: "#f89f95"
  },
  {
    image: "/images/assert/About3.webp",
    title: "So beautiful",
    content: "Each dog is a masterpiece of nature, with its own unique charm and grace. At Tindog, we celebrate the beauty of every breed, from the majestic Golden Retriever to the elegant Dalmatian. Prepare to be captivated by the stunning diversity of canine companionship.",
    topColor: "#D84032",
    bottomColor: "#f89f95"
  },
  {
    image: "/images/assert/About4.webp",
    title: "Stay where you are",
    content: "With Tindog, you don't need to go far to find your perfect match. Whether you're at home or on the go, our user-friendly platform connects you with a wide range of dogs available for adoption or sale. Browse, discover, and connect with your new furry friend without ever having to leave your comfort zone.",
    topColor: "#D84032",
    bottomColor: "#f89f95"
  }
]

function About() {
  return (
    <>
      <Topbar />
      <HomePage text='About' />
      <Description {...description} />
      <LeftPic {...PicANDContent[0]} />
      <RightPic {...PicANDContent[1]} />
      <LeftPic {...PicANDContent[2]} />
      <RightPic {...PicANDContent[3]} />
      <NewsLetters />
      <Footer />
    </>
  );
}

export default About;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage1 from "../assets/hero0.jpg";
import heroImage2 from "../assets/hero1.jpg"; // Add more images as needed
import heroImage3 from "../assets/hero2.jpg"; // Add more images as needed
import heroImage4 from "../assets/hero3.jpg";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="">
      <div className="md:flex flex-wrap items-center justify-between md:w-11/12  p-8">
        <div className="md:w-1/2 md:p-7 flex flex-col">
          <h1 className="md:text-2xl text-lg text-fuchsia-600 font-bold">Fitness Club</h1>
          <h2 className="md:text-2xl text-lg font-bold text-white">Sweat, Smile and Repeat</h2>
          <p className="md:text-2xl text-lg font-bold text-white">
            Check out the most effective exercises
          </p>
          <div className="my-8">
            <a
              href="#exercises"
              className="px-4 py-2 bg-red-500 rounded-md font-medium text-white hover:bg-black"
            >
              Explore Exercises
            </a>
          </div>
        </div>
        <div className="md:w-1/2 h-1/2 bg-black">
          <Slider {...settings} >
            <div className="flex justify-center items-center">
              <img src={heroImage1} alt="hero" className="" />
            </div>
            <div>
              <img src={heroImage2} alt="hero" className="w-full h-full bg-black" />
            </div>
            <div>
              <img src={heroImage3} alt="hero" className="w-full h-full bg-black" />
            </div>
            <div>
              <img src={heroImage4} alt="hero" className="w-full h-full bg-black" />
            </div>
          </Slider>
        </div>
      </div>
      <h1 className="md:text-9xl text-5xl tracking-wider font-bold opacity-10 text-white">
        Exercises
      </h1>
    </div>
  );
};

export default HeroSection;

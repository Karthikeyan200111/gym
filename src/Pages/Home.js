import React, { useState } from "react";

// Add more images as needed
import SearchExercise from "../Components/SearchExercise";
import HeroSection from "../Components/HeroSection";
import Excercise from "../Components/Excercise";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  
  

  return (
    <div>
      <HeroSection />
      <SearchExercise
      setExercises={setExercises}
      setBodyPart={setBodyPart}
      bodyPart={bodyPart} />
      <Excercise
      setExercises={setExercises}
      bodyPart={bodyPart} 
      exercises={exercises} />
    </div>
  );
};

export default Home;

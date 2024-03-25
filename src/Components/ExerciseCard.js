import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="flex  items-center justify-center p-3 md:w-72 ">
      <Link to={`/exercise/${exercise.id}`}>
        <div className=" w-52 md:p-4 flex flex-col item center justify-center mx-3 border-solid border-b-2 hover:opacity-100 transition duration-300 ease-in-out">
          <img src={exercise.gifUrl} alt={exercise.name} className="rounded-md"  />
          <div className="flex gap-10 mt-4">
            <button className={`border-solid border-black border-2  py-2 ${exercise.bodyPart.length> 5 ? `px-4`:`px-3`} rounded-md font-semibold  uppercase text-sm bg-fuchsia-400 hover:bg-black hover:text-white`}>{exercise.bodyPart}</button>
            <button className={`border-solid border-black border-2  py-2 ${exercise.target.length> 5 ? `px-4`:`px-3`} rounded-md  font-semibold uppercase text-sm bg-fuchsia-400 hover:bg-black hover:text-white`}
            >{exercise.target}</button>
          </div>
          <div className="">
          <h1 className={` text-white uppercase p-4 ${exercise.name.length> 10 ? `text-sm`:`text-md`}`}>{exercise.name}</h1>
          </div>
         
        </div>
      </Link>
    </div>
  );
};

export default ExerciseCard;

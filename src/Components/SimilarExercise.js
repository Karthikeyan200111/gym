import React from "react";
import HorizontalResults from "./HorizontalResults";
import Loader from "./Loader";

const SimilarExercise = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <div className="font-bold md:text-xl">
      <div className="p-3">
        <p className="hover:border-b-2 inline border-red-600 border-spacing-y-12 uppercase text-white">
          Similar <span className="font-bold text-red-600">Target Muscle</span>{" "}
          exercises
        </p>
        <div className="mt-4">
          {targetMuscleExercises.length !== 0 ? (
            <HorizontalResults data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className="p-3">
        <p className=" mt-2 hover:border-b-2 inline border-red-600 border-spacing-y-12 uppercase text-white">
          Similar <span className="font-bold text-red-600">Equipment</span>{" "}
          exercises
        </p>
        <div className="p-4 font-bold text-xl ">
          {equipmentExercises.length !== 0 ? (
            <HorizontalResults data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarExercise;

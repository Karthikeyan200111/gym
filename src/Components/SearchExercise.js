import React, { useEffect, useState } from "react";
import { fetchUrl, options } from "../utils/fetchData";
import HorizontalResults from "./HorizontalResults";

const SearchExercise = ({setExercises,bodyPart,setBodyPart}) => {
const URL="https://exercisedb.p.rapidapi.com/exercises"

  const [search, setSerach] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
 
  


  useEffect(() => {
    const fetchData = async () => {
      const bodyresults = await fetchUrl(`${URL}/bodyPartList`, options);
      
    
      setBodyParts(['all', ...bodyresults]);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (search) {
      const dataExercise = await fetchUrl(URL, options);
      const searchExercise = dataExercise.filter(
        (dataExercise) =>
          dataExercise.name.toLowerCase().includes(search) ||
          dataExercise.target.toLowerCase().includes(search) ||
          dataExercise.equipment.toLowerCase().includes(search) ||
          dataExercise.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSerach('');
      setExercises(searchExercise);
    }
  };
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-6 ">
      <div>
        <h1 className="font-bold md:text-3xl text-lg text-white">Awesome Exercises You</h1>
        <h1 className="font-bold md:text-3xl text-lg text-center text-white ">Should Know</h1>
      </div>
      <div className="my-5 p-6  w-full flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSerach(e.target.value.toLowerCase())}
          className=" rounded-md text-lg md:px-6 px-3 border-solid md:py-2 py-1 md:w-4/5 border-2 border-black border-spacing-1"
        />
        <button
          onClick={handleSubmit}
          className=" rounded-md md:px-6 md:py-2 px-2 py-1 border-2 border-black bg-fuchsia-400 font-bold text-lg hover:bg-black hover:text-white"
        >
          Search
        </button>
      </div>
      <div className="w-11/12 p-4 ">
        <HorizontalResults data={bodyParts} bodyParts  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </div>
    </div>
    </>
  );
};

export default SearchExercise;

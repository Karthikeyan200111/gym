import React, { useEffect } from 'react'
import { fetchUrl, options } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard'
import Loader from './Loader';

const Excercise = ({exercises,setExercises,bodyPart}) => {
 // console.log(exercises);
  const URL="https://exercisedb.p.rapidapi.com/exercises"
  useEffect(()=>{

    const fetchExerciseData=async()=>{
      let exerciseData=[];

      if(bodyPart === 'all'){
        exerciseData= await fetchUrl(URL,options);
      }else{
        exerciseData= await fetchUrl(`${URL}/bodyPart/${bodyPart}`,options);
      
      }
      setExercises(exerciseData);
    }
    fetchExerciseData();


  },[bodyPart,setExercises])

  if (!exercises.length) return <Loader />;

  return (
    <section id="exercises">
      <div className='p-4' id='exercises '>
        <p className='md:text-2xl font-bold uppercase text-white text-lg ' >Showing Results :</p>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        {exercises.map((exercise,index)=>(
         <ExerciseCard key={index} exercise={exercise} />
      
        ))}
      </div>
    </section>
  )
}

export default Excercise
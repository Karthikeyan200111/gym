import React, { useEffect, useState } from 'react'
import SimilarExercise from '../Components/SimilarExercise'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import { useParams } from 'react-router-dom'
import { fetchUrl, options, youtubeOptions } from '../utils/fetchData'


const ExerciseDetails = () => {
    const[exerciseDetail,setExerciseDetail]=useState({});
    const [exerciseVideo,setExeriseVideo]=useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const{id}=useParams();

    useEffect(()=>{
        const fetchData=async()=>{
            const exerciseUrl='https://exercisedb.p.rapidapi.com';
            const youtubeUrl="https://youtube-search-and-download.p.rapidapi.com"

            const exerciseDetail=await fetchUrl(`${exerciseUrl}/exercises/exercise/${id}`,options);
           // console.log("exerciseDetail",exerciseDetail)
            setExerciseDetail(exerciseDetail);

            const exerciseVideoData=await fetchUrl(`${youtubeUrl}/search?query=${exerciseDetail.name} exercise`,youtubeOptions);
            
            setExeriseVideo(exerciseVideoData);

            const targetMuscleExercisesData = await fetchUrl(`${exerciseUrl}/exercises/target/${exerciseDetail.target}`, options);
          
            setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchUrl(`${exerciseUrl}/exercises/equipment/${exerciseDetail.equipment}`, options);
    
      setEquipmentExercises(equimentExercisesData);
        }



        fetchData();

    },[id])
  return (
    <>
    <Detail exerciseDetail={exerciseDetail} />
    <ExerciseVideos exerciseVideo={exerciseVideo}  name={exerciseDetail.name}/>
    <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </>
  )
}

export default ExerciseDetails
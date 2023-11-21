import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import SimilarEquipments from '../components/SimilarEquipments'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

const ExerciseDetails = () => {
const [exerciseDetail, setExerciseDetail] = useState({});
const [exerciseVideos, setexerciseVideos] = useState([]);
const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [equimnetExercises, setEquimnetExercises] = useState([]);
const { id } =useParams();

// useEffect(() => {
//   const fetchExercisesData = async () => {
//     const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
//     const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

//     const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
//     setExerciseDetail(exerciseDetailData);

//     // const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
//     // setexerciseVideos(exerciseVideoData.contents); // .contents used for hold the array data.

//     if (exerciseDetailData.name) {
//       const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
//       setexerciseVideos(exerciseVideoData.contents);
//     }

//   }
//   fetchExercisesData();
// }, [id]); // recall the function when id is change

// ExerciseDetails.js (Assuming this is where you make the API request)

useEffect(() => {
  const fetchExercisesData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    try {
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setexerciseVideos(exerciseVideoData.contents);

      // // Check if the response contains an error message
      // if (exerciseVideoData.message === "You are not subscribed to this API.") {
      //   // Handle the error and display a message to the user
      //   console.error("API Subscription Error:", exerciseVideoData.message);
      //   // You can set an error state and display a message in your UI
      //   // setErrorState(exerciseVideoData.message);
      // } else {
      //   // API request was successful, set the videos
        
      // }

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquimnetExercises(equimentExercisesData);

    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle other types of errors here
      // setErrorState("An error occurred while fetching data.");
    }
  };

  fetchExercisesData();
}, [id]);


  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      {/* <ExerciseVideos exerciseVideo={exerciseVideos} name={exerciseDetail.name}/> */}
      <SimilarExercises
       targetMuscleExercises={targetMuscleExercises} />
       <SimilarEquipments
       equimentExercises={equimnetExercises}
       />
    </Box>
  )
}

export default ExerciseDetails
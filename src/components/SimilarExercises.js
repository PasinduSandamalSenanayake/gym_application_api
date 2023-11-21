import React, { useRef } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { KeyboardArrowRight,KeyboardArrowLeft } from '@mui/icons-material';

const SimilarExercises = ({ targetMuscleExercises}) => {
  //console.log(targetMuscleExercises);

  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Box sx={{ mt: { lg: '70px', xs: '25px' } }} p='25px'>
      <Typography variant='h3'>
        Exercises that target the <span style={{color: '#ff2625'}}>same muscle group</span>
      </Typography>
      <div
        ref={scrollContainerRef}
        style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
      >
        <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
          {targetMuscleExercises.map((exercise, index) => (
            <div key={index}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
              <Button
                sx={{
                  ml: '21px',
                  color: '#fff',
                  background: '#ffa9a9',
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize',
                }}
              >
                {exercise.bodyPart}
              </Button>
              <Button
                sx={{
                  ml: '21px',
                  color: '#fff',
                  background: '#fcc757',
                  fontSize: '14px',
                  borderRadius: '20px',
                  textTransform: 'capitalize',
                }}
              >
                {exercise.target}
              </Button>
            </Stack>
            <Typography
              ml="21px"
              color="#000"
              fontWeight="bold"
              mt="11px"
              pb="10px"
              textTransform="capitalize"
              fontSize="18px"
            >
              {exercise.name}
            </Typography>
          </div>
          ))}
        </Stack>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
      <Button
          onClick={() => handleScroll(-100)}
          endIcon={<KeyboardArrowLeft sx={{ fontSize: 32 }}/>}
          color='error'
        >
        </Button>
        <Button
          onClick={() => handleScroll(100)}
          endIcon={<KeyboardArrowRight sx={{ fontSize: 32 }}/>}
          color='error'
        >
        </Button>
      </div>
    </Box>
    
  );
};

export default SimilarExercises;

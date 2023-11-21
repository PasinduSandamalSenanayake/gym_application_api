import React, { useContext, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import BodyPart from './BodyPart';
import { KeyboardArrowRight,KeyboardArrowLeft } from '@mui/icons-material';

import ExerciseCard from './ExerciseCard';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', overflowX: 'auto' }} ref={containerRef}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="20px 20px" // Adjust margin as needed
            style={{ width: '250px', height: '250px' }} // Set width and height as needed
          >
            {isBodyParts ? <BodyPart item={item} setBodyParts={setBodyPart} bodyPart={bodyPart} /> :
             <ExerciseCard exercise={item}/>
            }
          </Box>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Button color="error" onClick={scrollLeft} endIcon={<KeyboardArrowLeft sx={{ fontSize: 32 }}/>}>
        </Button>
        <Button color="error" onClick={scrollRight} endIcon={<KeyboardArrowRight sx={{ fontSize: 32 }}/> }>
          
        </Button>
      </div>
    </div>
  );
};

export default HorizontalScrollBar;

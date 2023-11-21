import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,  bodyPart, setBodyParts}) => {
    //console.log('setBodyPart:', setBodyParts);
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={ {
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
        }
        }
        onClick={()=> {
            setBodyParts(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'}) // if click the categoty scroll down the related exercises
        }}
    >
        <img
            src={Icon}
            alt="dumbbell"
            style={{width: '40px', height: '40px'}}
        />
        <Typography fontSize="22px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart
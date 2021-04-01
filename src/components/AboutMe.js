import React from 'react';
import { Typography } from '@material-ui/core';


import Picture from '../assets/images/sunset-3325080_1920.jpg';
import data from '../info/data';

const AboutMe = () => {
  return (
    <div className='about-me box-shadow'>
      <div className='about-me-name'>
        <Typography className='name'>{data.name}</Typography>
        <Typography className='title'>{data.title}</Typography>
      </div>

      <figure className='about-me-pic'>
        <img src={Picture} alt="nice picture"/>
      </figure>
    </div>
  )
}

export default AboutMe

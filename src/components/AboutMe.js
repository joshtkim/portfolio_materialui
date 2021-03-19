import React from 'react';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

      <List>
        <ListItem>
          <ListItemText secondary={data.name}/>
        </ListItem>
        <ListItem>
          <ListItemText primary="Work"/>
        </ListItem>
      </List>
    </div>
  )
}

export default AboutMe

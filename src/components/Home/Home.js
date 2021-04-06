import React from 'react';
import { Typography } from '@material-ui/core';
import './Home.css'


import pic from '../../assets/images/sunset-3325080_1920.jpg';
import data from '../../info/data';

const Home = () => {
	return (
		<div className='home box-shadow' id="home">
			<br></br>
			<br></br>
			<div className='home-name'>
				<Typography variant="h2" className='name'>{data.name}</Typography>
				<Typography variant="h2" className='title'>{data.title}</Typography>
			</div>
{/* 
			<figure className='home-pic'>
				<img src= {pic} alt="nice picture"/>
			</figure> */}
		
		</div>
	)
}

export default Home

import React from 'react';
import { Typography } from '@material-ui/core';
import './Home.css'

import data from '../../info/data';

const Home = () => {
	return (
		<div className='home box-shadow' id="home">
			<br></br>
			<br></br>
			<div className='home-name'>
				<Typography variant="h2" align="center" className='name'>{data.name}</Typography>
				<Typography variant="h2" align="center" className='title'>{data.title}</Typography>
			</div>
		</div>
	)
}

export default Home

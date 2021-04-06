import React from 'react';
import { Typography } from '@material-ui/core';
import './Home.css'

import data from '../../info/data';

const Home = () => {
	return (
		<div className='home-border'>
			<div className='home' id="home">
				<div className='home-name'>
					<Typography variant="h2" align="center" className='name'>Hello!</Typography>
					<Typography variant="h2" align="center" className='name'>My name is {data.name} and welcome to my page!</Typography>
					<Typography variant="h2" align="center" className='name'>____________________________</Typography>
					<br></br>
					<Typography variant="h2" align="center" className='title'>{data.title}</Typography>
				</div>
			</div>
		</div>

	)
}

export default Home

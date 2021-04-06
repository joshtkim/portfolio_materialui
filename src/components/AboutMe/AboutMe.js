import { Typography } from '@material-ui/core'
import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
	return (
		<div className='about-me' id="about-me">
			<Typography variant="h3" align="center">About Me</Typography>
			<br></br>
			<Typography variant="h5" align="center">Quick and eager web developer with full stack experience using Ruby, Ruby on Rails, Javascript, React, and SQL. I can adapt easily to new situations and stay focused on the goal which will be a strong addition to any team. Ready to engage with your organization to problem solve and leverage my skills and knowledge to continue to grow.</Typography>
			<Typography variant="h5" align="center">I attended Flatiron School to gain the skills needed to pursue a new career as a software engineer.</Typography>
			<Typography variant="h5" align="center">In my free time I enjoy spending time doing activities such as playing basketball, flag football, hiking, grilling, and computer games. </Typography>
		</div>
	)
}

export default AboutMe

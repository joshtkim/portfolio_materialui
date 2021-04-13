import React from 'react'

import './Project.css'

import project from '../../info/project';
import ReactPlayer from 'react-player'

const Projects = () => {

	return (
		<div className='projects' id="projects">
			<br></br>
			<br></br>
			<h1>Projects</h1>
			{project.map((x) => (
				<div className={x.name.toLowerCase().replace(/\s/g, '')} key={x.name}>
					<h1>{x.name}</h1>
					<p>{x.text}</p>
					<ReactPlayer className="video"
						url={x.link}
					/>
					<div className="repos">
						<div className="front-repo">
							<a href={x.frontend}>
								<h3>Frontend Repo</h3>
							</a>
						</div>
						<div className="back-repo">
							<a href={x.backend}>
								<h3>Backend Repo</h3>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Projects

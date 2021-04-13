import React from 'react'
import { Typography } from '@material-ui/core';
import './Contact.css'
import data from '../../info/data'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
  console.log(data.socials)
  return (
    <div className='contact' id="contact">
      <Typography variant="h4" align="center">Contact</Typography>
      <br></br>
      <Typography variant="h4" align="center">email: jykim92@gmail.com</Typography>
      <div className="contact-link">
        {Object.keys(data.socials).map((x) => (
          <div>
            <a href={data.socials[x].link}>
              <img src={data.socials[x].icon} alt={data.socials[x].text} className="logoimage"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact


import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

export default {
  name: "Joshua Kim",
  title: "Software Engineer",
  email: "jykim92@gmail.com",

  socials: {
    linkedin: {
      link: 'https://github.com/joshtkim',
      text: 'My LinkedIn',
      icon: <LinkedInIcon />,
    },
    github: {
      link: 'https://www.linkedin.com/in/joshua-kim29/',
      text: 'My Github',
      icon: <GithubIcon />,
    },
  },
};
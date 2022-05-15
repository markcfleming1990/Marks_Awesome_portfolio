import React from 'react';
import {container, Typography} from '@material-core';
import {makeStyles} from '@material-ui/core/styles';
import {textDecrypt} from '../content/TextDecrypt';
import{ FirstName, LastName} from '../utils/getName';

import'./About.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Welcome to my page!";
  const aboutme = `My name is ${FirstName} ${LastName}, a career Sales professional turned Web Developer living with my wife Coleen in Goshen Indiana.
  I started my journey into Web developing in order to change careers after I obtain my Full Stack Devoplment certificate from Bulter University's
  Coding Bootcamp in May 2022. My sales experience brings a compeititive and professional spirit to any team.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
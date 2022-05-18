/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react_portfolio.png';
// import Veritru from '../../assets/recentprojects/veritru.png';
import TinyNote from '../../assets/recentprojects/tiny_note.png';
import Workout from '../../assets/recentprojects/workout_buddy.png';
import Mystery from '../../assets/recentprojects/buter_station.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    // { 
    //   id: 2,
    //   title: 'VeriTru Project', 
    //   description: `An advocacy project website built using
    //   MEAN stack with fact-checking tool to promote actions against
    //   fake news.`,
    //   alter: 'VeriTru Project',
    //   image: `${Veritru}`,
    // },
    { 
      id: 3,
      title: 'LoFo Project', 
      description: `A Website that allows users to organize their thoughts`,
      alter: 'LoFo Project',
      image: `${TinyNote}`,
    },
    { 
      id: 4,
      title: 'Workout Buddy', 
      description: `A website project that allows users to create workouts day by date and organize their gym time. Demonstrates use of 
      the MERN stack as well as non relational Databases`,
      alter: 'Startup Project',
      image: `${Workout}`,
    },
    { 
      id: 5,
      title: 'Mystery at Butler Station', 
      description: `A website using CanvasJS to create a dungeon explorer scroll game.`,
      alter: 'Startup Project',
      image: `${Mystery}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

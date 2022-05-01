import React from 'react';
import Project from '../Projects';

function Portfolio() {
	const projects = [
    {
      name: 'Mystery at Bulter Station',
      category:'project',
      description:
        'Exciting Dungeon Crawler where you have to figureout who the Mysterious alien is on the station',
      repo: 'link',
      deployed: 'link'
    },
    
    {
      name: 'Just Tech News',
      category: 'project',
      description:
        'Tech based forum that allows users to talk about their favorite aspects of tech',
      repo: 'link',
      deployed: 'link'
    },
    {
      name: 'Budget Tracker',
      category: 'project',
      description:
        'Application that allows users to track their budgets either at home or on the go, even offline!',
      repo: 'link',
      deployed: 'link'
    }
  ]



return (
  <section>
    <div className="center">
      <h1 className="page-header">My Portfolio</h1>
    </div >
    <div>
      <ul className="flex-row">
        <li className="padding">
          <Project projects={projects[0]}></Project>
        </li>
        <li className="padding">
          <Project projects={projects[1]}></Project>
        </li>
      </ul>
      <ul className="flex-row">
        <li className="padding">
          <Project projects={projects[2]}></Project>
        </li>
        <li className="padding">
          <Project projects={projects[3]}></Project>
        </li>
      </ul>
      <ul className="flex-row">
        <li className="padding">
          <Project projects={projects[4]}></Project>
        </li>
        <li className="padding">
          <Project projects={projects[5]}></Project>
        </li>
      </ul>
    </div>
  </section>
);
}

export default Portfolio;
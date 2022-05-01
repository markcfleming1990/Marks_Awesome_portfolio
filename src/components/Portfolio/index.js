import React from 'react';
import Projects from '../Projects';

function Portfolio() {
	const projects = [
    {
      name: 'Mystery at Bulter Station',
      category:'project',
      description:
        'Exciting Dungeon Crawler where you have to figureout who the Mysterious alien is on the station',
      repo: 'https://github.com/gsd79/Mystery-of-Butler-Station',
      deployed: 'https://mystery-of-butler-station.herokuapp.com/'
    },
    {
      name: 'Tiny Note',
      category: 'project',
      description:
        'Application that allows users to write down their thoughts and feelings',
      repo: 'https://github.com/gsd79/tiny-note',
      deployed: 'https://gsd79.github.io/tiny-note/'
    },
    {
      name: 'Just Tech News',
      category: 'project',
      description:
        'Tech based forum that allows users to talk about their favorite aspects of tech',
      repo: 'https://github.com/markcfleming1990/tech_blog',
      deployed: 'https://tech-news-center.herokuapp.com/'
    },
    {
      name: 'Budget Tracker',
      category: 'project',
      description:
        'Application that allows users to track their budgets either at home or on the go, even offline!',
      repo: 'https://github.com/markcfleming1990/Budget_Tracker',
      deployed: 'https://budgettracker-mf.herokuapp.com/'
    },
    {
      name: 'Quiz Challenge',
      category: 'project',
      description:
        'Application to test your javascript knowledge',
      repo: 'https://github.com/markcfleming1990/Marks_Quiz_Challenge',
      deployed: 'https://markcfleming1990.github.io/Marks_Quiz_Challenge'
    },
    {
      name: 'ReadMe Generator',
      category: 'project',
      description:
        'Application using CLI to create fast and professional readme files',
      repo: 'https://github.com/markcfleming1990/Readme-Generator',
      deployed: 'n/a'
    },
  ];



  return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div >
			<div>
				<ul className="flex-row">
					<li className="padding">
						<Projects projects={projects[0]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[1]}></Projects>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Projects projects={projects[2]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[3]}></Projects>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Projects projects={projects[4]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[5]}></Projects>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
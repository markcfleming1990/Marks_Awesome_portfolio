import React, { useState } from "react";
import Modal from "../Modal";

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    
    {
      name: 'Mystery at Bulter Station',
      category:'project',
      description:
        'Exciting Dungeon Crawler where you have to figureout who the Mysterious alien is on the station',
      repo: 'link'
    },
    
    {
      name: 'Just Tech News',
      category: 'project',
      description:
        'Tech based forum that allows users to talk about their favorite aspects of tech',
      repo: 'link'
    },
    {
      name: 'Budget Tracker',
      category: 'project',
      description:
        'Application that allows users to track their budgets either at home or on the go, even offline!',
      repo: 'link'
    }
  ]);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  const toggleModal = (projects, i) => {
    setCurrentProject({ ...projects, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((projects, i) => (
          <img
            // src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={projects.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(projects, i)}
            key={projects.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

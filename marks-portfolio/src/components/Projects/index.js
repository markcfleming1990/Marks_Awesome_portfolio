import React, { useState } from "react";
import Modal from "../Modal";

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Mystery at Bulter Station',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      repo: 'link'
    },
    {
      name: 'Tiny Note',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      repo: 'link'
    },
    {
      name: 'Oh Snap!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      repo: 'link'
    },
    {
      name: 'Readme Generator',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
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

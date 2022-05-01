import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Projects(props) {

	const currentProject = useState(props)[0].projects;
	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const siteLink = currentProject.deployed;
	const repoLink = currentProject.repo;

	return (
		<Card style={{ width: "20rem", marginRight: "20px", marginBottom: "20px" }}>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={siteLink} target="_blank" className="card-link" style={{ textDecoration: "underline" }}>
						Deployed {name} app ⬅️
					</Card.Link>
					<div>
						<br></br>
					</div>
					<Card.Link href={repoLink} target="_blank" className="card-link" style={{ textDecoration: "underline" }}>
						{name} Repo ⬅️
					</Card.Link>
				</Card.Body>
			</div>
			<br></br>
			<Card.Img
				variant="top"
				src={require(`../../assets/projectImg/${image}`)}
				className="card-image"
			/>
		</Card>
	);
}

export default Projects;

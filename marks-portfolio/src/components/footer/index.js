import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '../../index.css'

function Footer() {

  return (
		<footer className="container">
			<div>
        <a href="https://github.com/markcfleming1990">
          <FontAwesomeIcon icon={faGithub} className="icons"></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/in/mark-fleming-827a34142/">
          <FontAwesomeIcon icon={faLinkedin} className="icons"></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/MFleming1990">
          <FontAwesomeIcon icon={faTwitter} className="icons"></FontAwesomeIcon>
        </a>
			</div>
		</footer>
	);
}

export default Footer;
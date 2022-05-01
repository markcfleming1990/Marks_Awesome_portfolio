import React from "react";

function Navigation(props) {
	const { currentPage, setCurrentPage } = props;

	return (
		<nav>
			<ul className="flex-row nav">
				<li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("about")}>About Me</span>
				</li>
				<li className={currentPage === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("portfolio")}>Portfolio</span>
				</li>
				<li className={currentPage === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("contact")}>Contact</span>
				</li>
				<li className={currentPage === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentPage("resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
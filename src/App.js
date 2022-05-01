import React, { useState } from "react";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/footer";
import "./index.css";

function App() {
	const [currentPage, setCurrentPage] = useState("about");

	const Page = () => {
		switch (currentPage) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
				case "resume":
					return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div>
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
			</div>
			<div>
				<main> {Page()}</main>
			</div>
				<Footer></Footer>
		</div>
	);
}

export default App;




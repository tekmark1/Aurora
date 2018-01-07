import React from "react";
import { render } from "react-dom";

import Background from "./components/Background";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

class App extends React.Component {
	render() {
		return (
			<div>
				<Background />
				<Header />
				<NavBar />
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
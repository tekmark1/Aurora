import React from "react";
import { render } from "react-dom";

import Background from "./components/Background";

class App extends React.Component {
	render() {
		return (
			<div>
				<Background />
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
import React, { Component } from 'react';

import MenuItem from "./MenuItem"

class Header extends Component {
	render() {
		return (
			<div class="row header-row">
				<div class="col-1"></div>
				<div class="col-10 header-font">Aurora Consulting</div>
				<MenuItem />
			</div>
		)
	}
}

export default Header;
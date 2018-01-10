import React, { Component } from 'react';
import NavBarItem from './NavBarItem';

class NavBar extends Component {
	render() {
		return (
			<div class="row navigation">
				<div class="col-1"></div>
				<div class="col-10 nav-bar">
					<div class="row">
				{/* Add props to NavBarItem which take column-# and title*/}
						<div class="col-2 left-pad text-center">
							<NavBarItem />
						</div>
						<div class="col-2 left-pad text-center">
							<NavBarItem />
						</div>
						<div class="col-2 left-pad text-center">
							<NavBarItem />
						</div>
						<div class="col-2 left-pad text-center">
							<NavBarItem />
						</div>
						<div class="col-2 left-pad text-center">
							<NavBarItem />
						</div>
						<div class="col-2 left-pad text-center">
							<NavBarItem />
						</div>
					</div>
				</div>
				<div class="col-1"></div>
			</div>
		)
	}
}

export default NavBar;
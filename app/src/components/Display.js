import React, { Component } from 'react';
import DisplayText from './DisplayText';
import DisplayImage from './DisplayImage';

class Display extends Component {
	render() {
		return (
			<div class="row display-pad">
				<div class="col-1"></div>
				<div class="col-10">
					<div class="row left-align">
						<div class="col-5">
							<DisplayImage />
						</div>
						<div class="col-7">
							<DisplayText />
						</div>
					</div>
				</div>
				<div class="col-1"></div>
			</div>
		)
	}
}

export default Display;
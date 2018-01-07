import React, { Component } from 'react';
import BackgroundImage from '../../images/aurora-background-image.jpg';

class Background extends Component {
	render() {
		return (
			<div>
				<img className="bg" src={ BackgroundImage } alt="bg" />
			</div>
		)
	}
}

export default Background;
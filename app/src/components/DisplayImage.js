import React, { Component } from 'react';
import PracticeImage from '../../images/practice-image.jpeg';

class DisplayImage extends Component {
	render() {
		return (
			<img className="dis-image" src={ PracticeImage } alt="bg" />
		)
	}
}

export default DisplayImage;
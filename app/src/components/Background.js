import React, { Component } from 'react';
import BackgroundImage from '../../images/aurora-background-image.jpg';

// export class Home extends React.Components {
// 	componentWillMount() {
// 	    var w = window,
// 	    d = document,
// 	    e = d.documentElement,
// 	    g = d.getElementsByTagName('body')[0],
// 	    x = w.innerWidth || e.clientWidth || g.clientWidth,
// 	    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	    
// 	    this.setState({x:x,y:y});
// 	}
// 	render() {
// 		return (
// 			<div><img className='bg' src={'../images/'+this.state.x+'x'+this.state.y+'/?nature'} /></div>
// 		)
// 	}
// }

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
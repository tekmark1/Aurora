import React from "react";

export class Home extends React.Components {
	componentWillMount() {
	    var w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0],
	    x = w.innerWidth || e.clientWidth || g.clientWidth,
	    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	    
	    this.setState({x:x,y:y});
	}
	render() {
		return (
			<div><img className='bg' src={'../images/'+this.state.x+'x'+this.state.y+'/?nature'} /></div>
		)
	}
}
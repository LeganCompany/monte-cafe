import React from 'react';
import background from './../img/frame1.png';

// Component for displaying the very first screen of the website. (Welcome to Monte Cafe)
function Hero() {
	const divStyle = {
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		width: '100%',
		height: '914px',
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
	};

	return (
		<div style={divStyle}>
			<h1>Hello</h1>
		</div>
	);
}

export default Hero;

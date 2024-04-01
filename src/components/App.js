import '../styles/App.css';
import React from 'react';

import Hero from './Hero';
import Location from './Location';
// import Footer from './Footer';

function App() {
	return (
		<div className="App">
			<Hero/>
			{/* <BeanPage/> */}
			<Location/>
			{/* <Review/> */}
			{/* <Footer/> */}
		</div>
	);
}

export default App;

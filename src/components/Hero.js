import React from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


import background from './../img/frame1.png';

// Component for displaying the very first screen of the website. (Welcome to Monte Cafe)
function Hero() {
	const divStyle = {
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		width: '100%',
		height: '914px',
		display: 'flex',
		// justifyContent: 'center',
		alignItems: 'center',
	};

	const headingStyle1 = {
		fontFamily: 'Prata, serif',
		fontSize: 64,
		color: 'white',
	};

	const headingStyle2 = {
		fontFamily: 'Prata, serif',
		fontSize: 128,
		color: '#FFFCE4',
	};

	const headingStyle3 = {
		fontFamily: 'Open Sans Condensed, sans-serif',
		fontSize: 32,
		color: 'white',
		textAlign: 'left',
	};

	const ColoredButton = styled(Button)({
		backgroundColor: '#EB5A47',
		color: 'white',
		fontSize: 32,
		fontFamily: 'Open Sans Condensed, sans-serif',
		fontWeight: 300,
		border: '1px solid #EB5A47',
		borderRadius: 0,
	});

	// Custom styled component for the second button
	const TransparentButton = styled(Button)({
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 32,
		fontFamily: 'Open Sans Condensed, sans-serif',
		border: '1px solid #EB5A47',
		borderRadius: 0,
		fontWeight: 300,
	});

	return (
		<div style={divStyle}>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				marginLeft={10}
				width={ '60%' }
			// spacing={2}
			>
				<Typography variant="h1" style={headingStyle1}>
					Welcome to
				</Typography>
				<Typography variant="h1" style={headingStyle2}>
					Monte Cafe
				</Typography>
				<Typography variant="h1" style={headingStyle3}>
					Monte Cafe in downtown Ulaanbaatar offers a cozy retreat for all customers. Enjoy our welcoming atmosphere and excellent coffee in the heart of the city.
				</Typography>
				<Box>
					<ColoredButton variant="outlined">ORDER AHEAD</ColoredButton>
					<TransparentButton variant="outlined">VIEW MENU</TransparentButton>
				</Box>
			</Stack>
		</div>
	);
}

export default Hero;

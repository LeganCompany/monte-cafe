
import React from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { styled } from '@mui/system';


// A component for displaying the location of the cafe.
function Hero() {
	const divStyle = {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#00877D',
	};

	const headingStyle = {
		fontFamily: 'Open Sans Condensed Bold, sans-serif',
		fontSize: 64,
		color: 'white',
		marginTop: '3vh',
	};

	const headingStyle2 = {
		fontFamily: 'Open Sans Condensed Bold, sans-serif',
		fontSize: 36,
		color: 'white',
	};

	const subHeadingStyle = {
		fontFamily: 'Open Sans Condensed Light, sans-serif',
		fontSize: 36,
		// fontWeight: 300,
		color: 'white',
		// textAlign: 'left',
		// marginTop: '-25px',
		// marginBottom: '10px',
	};

	// const ColoredButton = styled(Button)({
	// 	backgroundColor: '#EB5A47',
	// 	color: 'white',
	// 	fontSize: 32,
	// 	fontFamily: 'Open Sans Condensed, sans-serif',
	// 	fontWeight: 300,
	// 	border: '1px solid #EB5A47',
	// 	borderRadius: 0,
	// });

	// const TransparentButton = styled(Button)({
	// 	backgroundColor: 'transparent',
	// 	color: 'white',
	// 	fontSize: 32,
	// 	fontFamily: 'Open Sans Condensed, sans-serif',
	// 	border: '1px solid #EB5A47',
	// 	borderRadius: 0,
	// 	fontWeight: 300,
	// 	marginLeft: '40px'
	// });

	return (
		<div style={divStyle}>
			<Stack
				direction="column"
				width="100%"
			>
				<Typography variant="h1" style={headingStyle}>
					COME VISIT US
				</Typography>
				<Stack
					direction={'row'}>
					<Stack
						direction={'column'}
						margin={'0 30px'}
						width={'30%'}
					>
						<Box sx={{ margin: '25px 0' }}>
							<Typography variant="h1" textAlign="left" style={headingStyle2}>
								Monte Cafe, Ulaanbaatar
							</Typography>
							<Typography variant="h1" textAlign="left" style={subHeadingStyle}>
								Peace Avenue, Ulaanbaatar 15170, Mongolia
							</Typography>
						</Box>
						<Box sx={{ margin: '25px 0' }}>
							<Typography variant="h1" textAlign="left" style={headingStyle2}>
								Open Hours
							</Typography>
							<Typography variant="h1" textAlign="left" style={subHeadingStyle}>
								Everyday 08:00 AM - 21:30 PM
							</Typography>
						</Box>
						<Box sx={{ margin: '25px 0' }}>
							<Typography variant="h1" textAlign="left" style={headingStyle2}>
								Delivery Options:
							</Typography>
							<Typography variant="h1" textAlign="left" style={subHeadingStyle}>
								Tok-Tok <br /> SakDak Foods
							</Typography>
						</Box>
						<Box sx={{ margin: '25px 0' }}>
							<Typography variant="h1" textAlign="left" style={headingStyle2}>
								Business Inquires:
							</Typography>
							<Typography variant="h1" textAlign="left" style={subHeadingStyle}>
								montecafe@montecafe.com
							</Typography>
						</Box>
					</Stack>
					<div style={{
						border: '1px solid black',
						width: '70%',
						margin: '30px 20px',
					}}></div>
				</Stack>
			</Stack>
		</div >
	);
}

export default Hero;

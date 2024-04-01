
import React from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
// import MapContainer from './MapContainer';


// A component for displaying the location of the cafe.
function Location() {

	// const businessName = 'Your Business Name';
	// const location = {
	// 	lat: 37.7749, // Latitude of business location
	// 	lng: -122.4194 // Longitude of business location
	// };

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
		color: 'white',
	};

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
					{/* <MapContainer businessName={businessName} location={location} /> */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d167.12561142450875!2d106.91149231975598!3d47.91684816799454!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96932cad242cfb%3A0x2a357c007c918f95!2sMonte%20Cafe!5e0!3m2!1sen!2sau!4v1706425985252!5m2!1sen!2sau"
						width='70%'
						style={{ border: '0', margin: '30px' }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</Stack>
			</Stack>
		</div >
	);
}

export default Location;

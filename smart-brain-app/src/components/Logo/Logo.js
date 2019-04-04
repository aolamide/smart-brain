import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './brain.png'

const Logo = () => {
	return(
		<div className='ma4 nt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			 	<div>
					<img style={{paddingTop : '5px'}} alt='logo' src={brain}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;
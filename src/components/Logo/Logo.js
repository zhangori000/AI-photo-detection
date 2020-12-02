import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import jesus from './jesus.png';

// no states, simple component, no arguments
const Logo = () => {
    return(
        <div className='logo ma4 mt0'>
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}} src={jesus} alt="logo-looks-like-jesus"/> </div>
                <small> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
            </Tilt>
        </div>
    );
}

export default Logo;
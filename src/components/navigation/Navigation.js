import React from 'react';


// no states, simple component, no arguments
const Navigation = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f3 link dim black underline pa3 pointer'> sign out </p>
        </nav>
    );
}

export default Navigation;
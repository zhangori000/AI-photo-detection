import React from 'react';
import './Toggle.css';

// no states, simple component, no arguments w-15 grow br3 f4 link mb3 ma2 ph1 pv2 dib white bg-orange

const Toggle = ({ onToggleSubmit }) => {
    return( 
        <div>
            <button
                className='learn-more'
                onClick={(x='apparel') => onToggleSubmit('apparel')}
            > Apparel! </button>
            <button 
                className='learn-more'
                onClick={(x='general') => onToggleSubmit('general')}
            > General! </button>
            <button 
                className='learn-more'
                onClick={(x='travel') => onToggleSubmit('travel')}
            > Travel! </button>
        </div>
        
    );
}

export default Toggle;
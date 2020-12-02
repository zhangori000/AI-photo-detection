import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
    return(
        <div className='center border' style={{overflowY: 'scroll', height: '150px', width: '500px'}}>
            {props.children}
        </div>
    );

}

export default Scroll;
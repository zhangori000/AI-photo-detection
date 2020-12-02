import React from 'react';

const ApparelRecognition = ({ imageURL }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageURL} alt='sample iamge' width='500px' height='auto'/>
            </div>
        </div>
    );
}


export default ApparelRecognition;
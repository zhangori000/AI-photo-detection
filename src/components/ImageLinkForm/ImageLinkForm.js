import React from 'react';
import './ImageLinkForm.css';

// no states, simple component, no arguments
const ImageLinkForm = ( { onInputChange, onButtonSubmit }) => {
    return( 
        <div>
            <p className='f3'>
                {'Jesus tests the heart; but what about AI?! Paste an Image URL and try it out :)'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='paste image url' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onButtonSubmit}
                    > detect </button>
                </div>
                
            </div>
        </div>
        
    );
}

export default ImageLinkForm;
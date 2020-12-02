import React from 'react';
import 'tachyons';

const ListItem = ({ keyValue, itemValue, pValue }) => {
    return (
        <div key={keyValue} className='tc b bg-white dib br3 pa2 ma2 grow bw2 shadow-5'>
            <div>
                <p>{itemValue}</p>
                <p className="fw3">{pValue}%</p>
            </div>
        </div>
    );
}

export default ListItem;
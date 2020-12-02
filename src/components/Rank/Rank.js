import React from 'react';
import ListItem from '../ListItem/ListItem';
import './Rank.css';

// no states, simple component, no arguments
const Rank = ({ apparelItems }) => {
    const listItemArray = apparelItems.map((item, i) => {
        return <ListItem key={i} itemValue={item.name} pValue={(item.value*100).toFixed(2)}/>;
    });
    return( 
        <div className='list-box'>
            { listItemArray }
        </div>
        
    );
}

export default Rank;
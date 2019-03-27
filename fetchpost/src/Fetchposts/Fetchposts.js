import React from 'react';
import Fetchpost from './Fetchpost/Fetchpost';

const fetchposts = ( props ) => {
    return <Fetchpost 
            url={props.apiurl}
            selected={(e) => {
                let selector = document.querySelector('select');
                let value = selector[selector.selectedIndex].value;
                console.log(value);
            }}
            />
}

export default fetchposts
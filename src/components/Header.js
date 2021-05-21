import React from 'react';

const Header = (props) => {

    return (
        <div>
            <h1>Astronomy Photo of the Day</h1>
            <h1>From NASA</h1>
            <h2>{props.nasaData.title}</h2>
        </div>
    )
}

export default Header;
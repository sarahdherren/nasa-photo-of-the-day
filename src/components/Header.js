import React from 'react';
import { Title, PhotoTitle } from '../styles/Content';

const Header = (props) => {

    return (
        <div>
            <Title>Astronomy Photo of the Day</Title>
            <PhotoTitle>{props.nasaData.title}</PhotoTitle>
        </div>
    )
}

export default Header;


import React from 'react';
import { Credit } from '../styles/Content';

const Footer = (props) => {

    return (
        <div>
            <Credit>
                photo of the Day App created 2021 
                <br />
                copyright {props.nasaData.copyright} image provided by NASA APOD API
            </Credit>
        </div>
    )
}

export default Footer;


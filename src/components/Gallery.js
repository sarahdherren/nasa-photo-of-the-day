import React from 'react';

const Gallery = (props) => {

    return (
        <div>
            <img src={props.nasaData.url} />
            <p>{props.nasaData.date}</p>
            <p>{props.nasaData.explanation}</p>
        </div>
    )
}

export default Gallery;
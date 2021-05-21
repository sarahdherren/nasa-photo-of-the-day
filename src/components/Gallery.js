import React from 'react';

const Gallery = (props) => {

    return (
        <div>
            <h2>{props.nasaData.title}</h2>
            <img src={props.nasaData.url} />
            <p>{props.nasaData.date}</p>
            <p>{props.nasaData.explanation}</p>
        </div>
    )
}

export default Gallery;
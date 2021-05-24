import React from 'react';
import styled from "styled-components";
import Content from '../styles/Content';

const Gallery = (props) => {

    const Image = styled.img`
        height: 100%;
        max-height: 50vh;
        width: auto;
        border-radius: 20px;
    `;


    return (
        <div>
            <Image src={props.nasaData.url} />
            
            <Content>
                {props.nasaData.date}
                <br />
                <br />
                {props.nasaData.explanation}
            </Content>
        </div>
    )
}

export default Gallery;
import styled from "styled-components";

const Content = styled.p`
    margin: 20px auto 40px;
    padding: 20px;
    max-width: 70vw;
    text-align: center;
    line-height: 150%;
    background: #d3cfd6;
    font-family: 'Niramit', sans-serif;
    border-radius: 10px;
`;

const Title = styled.h1`
    margin: 20px auto;
    padding-top: 40px;
    font-size: 2em;
    font-family: 'KoHo', sans-serif;
    color: #d3cfd6;
`

const Credit = styled.p`
    margin: auto;
    padding: 40px;
    color: #d3cfd6;
    font-family: 'KoHo', sans-serif;
    
`

const PhotoTitle = styled.h2`
    padding-bottom: 20px;
    font-family: 'KoHo', sans-serif;
    font-size: 1.25em;
    font-style: italic;
    color: #d3cfd6;
`

export default Content;
export { Title, PhotoTitle, Credit };
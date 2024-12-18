import styled from "styled-components";


// Header
const Header = styled.header`
    background-color: rgba(249, 250, 255, 0.5);
    padding: 12px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

const Name = styled.span`
    font-family: "Comfortaa", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.8;
    white-space: nowrap;
`


export const S = {
    Header,
    Name,
}



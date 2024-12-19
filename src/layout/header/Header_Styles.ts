import styled from "styled-components";
import {theme} from "../../styles/Theme";



// Header
const Header = styled.header`
    padding: 12px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
    &.backGround {
        background-color: rgba(249, 250, 255, 0.7);
    }
`

const Name = styled.span`
    font-family: "Comfortaa", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.8;
    white-space: nowrap;
    cursor: pointer;
    transition: ${theme.animations.transition};
    &:hover{
        color: ${theme.colors.accent}; //❓❓❓
}
`

export const S = {
    Header,
    Name,
}



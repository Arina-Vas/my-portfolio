import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    font-family: "Playfair", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 88px;


    position: relative;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background-color: ${theme.colors.accent};
        
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);        
    }
    
    @media ${theme.media.tablet} {
        margin-bottom: 58px;
    }
`
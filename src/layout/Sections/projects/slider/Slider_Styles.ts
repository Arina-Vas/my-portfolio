import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../Components/FlexWrapper";
import {StyledBtn} from "../../../../Components/StyledBtn";

const Slider = styled.div`
    max-width: 992px;
    width: 100%;
    @media ${theme.media.tablet}{
        max-width: 496px;        
    }
}`

const Slide = styled.div`
    display: flex;
    min-height: 524px;
    flex-grow: 1;
    justify-content: center;
    width: 100%;
    border-radius: 24px;
    background-color: ${theme.colors.secondaryBg};
    overflow: hidden;
    
   //filter: drop-shadow(0 6px 64px rgba(73, 80, 86, 0.1));
    &:nth-of-type(even) {
        img {
            order: -1;
        }
    }

    @media ${theme.media.tablet} {
        height: 630px;
        flex-wrap: wrap;
        img {
            order: -1;
        }
    }
    &:hover {
        cursor: grab;
    }
    &:active {
        cursor: grabbing;
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 496px;
    width: 100%;
    padding: 0 40px 15px 50px ;
    pointer-events: none;
    user-select: none;

    ${StyledBtn} {
        border-width: 1px;
        border-radius: 24px;
        white-space: nowrap;
        max-width: 150px;
    }
`

const SlideTitle = styled.h3`
    font-family: "Playfair", sans-serif;
    font-weight: 700;
    font-size: 46px;
    line-height: 1.5;
`

const SlideText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.secondaryFont};
    margin: 20px 0;
`

const SlideImage = styled.img`
    width: 50%;
    max-width: 496px;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
    @media ${theme.media.tablet} {
        width: 100%;
    }
`


export const S = {
    Slider,
    Slide,
    TextWrapper,
    SlideTitle,
    SlideText,
    SlideImage,
}


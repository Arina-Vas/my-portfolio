import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../../Components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {StyledBtn} from "../../../../Components/StyledBtn";


export const Slider = (props: { items: Array<{ title: string, text: string, image: any }> }) => {
    return (
        <StyledSlider>
            <FlexWrapper align={"center"} direction={"column"} gap={"75px"}>
                {props.items.map((item, index) => {
                    return <Slide key={index}>
                        <TextWrapper>
                            <SlideTitle>{item.title}</SlideTitle>
                            <SlideText>{item.text}</SlideText>
                            <StyledBtn btnType={"secondary"}>View Project</StyledBtn>
                        </TextWrapper>
                        <SlideImage src={item.image} alt={item.title}/>
                    </Slide>
                })}
                <Pagination>
                    <span></span>
                    <span className={"active"}></span>
                    <span></span>
                </Pagination>
            </FlexWrapper>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    @media ${theme.media.mobile} {
        ${FlexWrapper} {
            gap: 45px;
        }
    }
`

const Slide = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    
    min-height: 524px;
    max-width: 992px;
    width: 100%;
    
    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    background-color: ${theme.colors.secondaryBg};
    overflow: hidden;



    &:nth-of-type(even) {
        img {
            order: -1;
        }
    }
    
    @media ${theme.media.tablet} {
        flex-wrap: wrap;
        img{
            order: -1;
        }
    }

`

const TextWrapper = styled.div`
    min-height: 524px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 496px;
    width: 100%;
    padding-left: 50px;
    padding-right: 40px;

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
    min-height: 524px;
    width: 496px;
    object-fit: cover;
    @media ${theme.media.tablet} {
        width: 100%;
    }
`



const Pagination = styled.div`

    span {
        display: inline-block;
        border-radius: 20px;
        width: 10px;
        height: 10px;

        & + span {
            margin-left: 5px;
        }

        background-color: rgba(130, 130, 130, 0.5);

        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }`



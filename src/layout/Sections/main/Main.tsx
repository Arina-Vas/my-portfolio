import React from 'react';
import photo from '../../../assets/img/photos/myPhoto-removebg.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {StyledBtn} from "../../../Components/StyledBtn";
import {Container} from "../../../Components/Container";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../Components/Link";
import yellowBg from "../../../assets/img/yellowBg.svg"
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={'center'} wrap={'wrap'}>
                    <TextWrapper>
                        <MainTitle>Frontend Developer</MainTitle>
                        <SubTitle>Hello, my name is Arina Vasilevskaya</SubTitle>
                        <Text>
                            Short text with details about you, what you do or your professional career. You can add more
                            information on the about page.
                        </Text>
                        <div>
                            <StyledBtn as={Link} btnType={"primary"}>Projects</StyledBtn> {/*as link*/}
                            <StyledBtn as={Link} btnType={"secondary"}>LinkedIn</StyledBtn> {/*as link*/}
                        </div>
                    </TextWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Me"/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    padding-top:100px;
    overflow: hidden;
    position: relative;
    //min-height: 630px;
    @media ${theme.media.mobile} {
        padding-top:0;
    }
`


const TextWrapper = styled.div`
    max-width: 508px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    div {
        display: flex;
        gap: 12px;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 300px;
    }

    @media ${theme.media.tablet} {
        margin-top: 430px;
    }

    @media ${theme.media.mobile} {
        margin-top:550px;
    }

    @media screen and (max-width: 450px) {
        margin-top:430px;
    }
`

const PhotoWrapper = styled.div`
    left: 50%;
    position: absolute;
    height: 877px;
    width: 777px;
    bottom: 10%;
    background-color: ${theme.colors.accent};
    mask-image: url(${yellowBg});
    mask-repeat: no-repeat;
    mask-size: 100%;
    mask-position: left bottom;

    @media screen and (max-width: 1024px) {
        left: 40%;
        bottom: 35%;
    }

    @media ${theme.media.tablet} {
        left: 20%;
        bottom: 40%;
    }

    @media ${theme.media.mobile} {
        left: 0;
        bottom: 45%;
    }

    @media screen and (max-width: 450px) {
        height: 550px;
        width:486px;
        top: -15%;
    }
`

const Photo = styled.img`
    position: absolute;
    object-fit: contain;
    width: 45%;
    top:35%;                
    left: 30%;

    @media screen and (max-width: 1024px) {
        left: 20%;}

     @media screen and (max-width: 450px) {
        left: 30%;
        width: 50%;
    }
    
    



`


const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    color: ${theme.colors.secondaryFont};
    margin: 32px 0;
`

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    margin-bottom: 12px;
`
const SubTitle = styled.h2`
    ${font({weight: 700, Fmax: 64, Fmin: 46, family:"\"Roboto\", sans-serif"})}
`




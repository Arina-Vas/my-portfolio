import React from 'react';
import {Icon} from "../../Components/Icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import footerBG from "../../assets/img/Vector.png"
import triangle from "../../assets/img/triangle.svg"
import {theme} from "../../styles/Theme";
import {Container} from "../../Components/Container";
import {Link} from "../../Components/Link";
import {font} from "../../styles/Common";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} justify={"space-between"} >
                    <SocialListTitle>Let’s be Friends</SocialListTitle>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={"25px"} height={"25px"} viewBox={"0 0 50 50"} iconId={"instagram"}></Icon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={"25px"} height={"25px"} viewBox={"0 0 50 50"} iconId={"linkedin"}></Icon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={"25px"} height={"25px"} viewBox={"0 0 50 50"} iconId={"envelope"}></Icon>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <StyledText>More projects I’ve worked on github
                        <Link href={"https://github.com/Arina-Vas"}> @Arina-Vas </Link>
                    </StyledText>
                    <Copyright>Arina Vasilevskaya 2024</Copyright>
                </FlexWrapper>
                <img src={`${footerBG}`} alt={""}/>
            </Container>

        </StyledFooter>

    );
};

const StyledFooter = styled.footer`

    display: flex;
    //align-items: flex-end;
    justify-content: center;
    min-height: 344px;
    position: relative;
    z-index: 0;
    padding-bottom: 5px;

    img {
        min-height: 344px;
        max-height: 485px;
        width: 100%;
        position: absolute;
        z-index: -9999999999999;
        bottom: 0;
        left: 0;
        object-fit: cover;

        @media ${theme.media.tablet} {


        }
    }
`

const Copyright = styled.small`
    font-family: "Raleway", sans-serif;
    font-size: 14px;
`
const StyledText = styled.p`
    ${font({Fmax: 18, Fmin: 14, family:"\"Raleway\", sans-serif"})}

`

const SocialList = styled.ul`

    list-style: none;
    display: flex;
    align-items: center;
    gap: 40px;

`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: relative;
    width: 50px;
    height: 50px;
    color: #383838;

    &::after {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.accent};
        opacity: 0.5;
        mask-image: url("${triangle}");
        mask-size: contain;
        mask-repeat: no-repeat;
        transform: rotate(25deg);
    }

    &::before {
        z-index: -2;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.accent};
        transform: rotate(75deg);
        opacity: 0.7;
        mask-image: url("${triangle}");
        mask-size: contain;
        mask-repeat: no-repeat;
    }



`

const SocialListTitle = styled.span`
    ${font({weight: 500, Fmax: 36, Fmin: 28, family: "\"Playfair\", sans-serif"})}
    line-height: 1.5%;
    text-align: center;
    margin-top: 50px;
`




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
                                <Icon width={"50%"} height={"50%"} viewBox="0 0 24 24" iconId={"telegram"}></Icon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={"50%"} height={"50%"} viewBox="0 0 24 24" iconId={"linkedin"}></Icon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={"50%"} height={"50%"} viewBox="0 0 24 24" iconId={"instagram"}></Icon>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <StyledText>More projects I’ve worked on github
                        <Link href={"https://github.com/Arina-Vas"}> @Arina-Vas </Link>
                    </StyledText>
                    <Copyright>Arina Vasilevskaya 2024</Copyright>
                </FlexWrapper>
            </Container>

        </StyledFooter>

    );
};

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    min-height:  344px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${footerBG});
    background-position: center bottom;
    
    @media ${theme.media.desktop} {
        background-size: 100% 100%;
    }
`


const SocialListTitle = styled.span`
    ${font({weight: 500, Fmax: 36, Fmin: 28, family: "\"Playfair\", sans-serif"})}
    line-height: 1.5%;
    text-align: center;
    margin-top: 50px;
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
    width: 70px;
    height: 70px;
    color: #383838;

    &::after, &::before {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.accent};
        mask-image: url("${triangle}");
        mask-size: contain;
        mask-repeat: no-repeat;

    }

    &::after {
        opacity: 0.5;
        transform: rotate(25deg);
    }


    &::before {
        transform: rotate(-25deg);
        opacity: 0.7;
    }
`
const Copyright = styled.small`
    font-family: "Raleway", sans-serif;
    font-size: 14px;
`
const StyledText = styled.p`
    ${font({Fmax: 18, Fmin: 14, family:"\"Raleway\", sans-serif"})}

`





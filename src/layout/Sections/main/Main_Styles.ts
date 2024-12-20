import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import yellowBg from "../../../assets/img/yellowBg.svg";
import {font} from "../../../styles/Common";
import {Link} from "react-scroll";

const Main = styled.section`
    min-height: 630px;
    width: 100%;
    padding-top: 100px;
    overflow: hidden;
    position: relative;
`

const TextWrapper = styled.div`
    width: 50%;
    max-width: 508px;
    min-height: 426px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    div {
        display: flex;
        gap: 12px;
    }

    @media ${theme.media.tablet} {
        margin-top: 340px;
        width: 100%;
    }

    @media ${theme.media.mobile} {
        margin-top: 340px;
    }
}`

const PhotoWrapper = styled.div`

    left: 50%;
    position: absolute;
    min-height: 877px;
    max-width: 777px;
    width: 80%;
    height: 100%;
    bottom: 10%;
    background-color: ${theme.colors.accent};
    mask-image: url(${yellowBg});
    mask-repeat: no-repeat;
    mask-size: 100%;
    mask-position: left bottom;

    @media ${theme.media.tablet} {
        width: 100%;
        bottom: 35%;
        left: 20%;
    }

    @media ${theme.media.mobile} {
        height: 550px;
        min-width: 486px;
        left: 0;
        bottom: 53%;

    }
`

const Photo = styled.img`
    position: absolute;
    object-fit: contain;
    max-width: 630px;
    height: 150%;
    top: 39%;
    left: 50%;
    transform: translateX(-50%);


    @media ${theme.media.mobile} {
        height: 120%;
        left: 30%;
        top: 58%;
        transform: translateX(0);
    }
`

const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    color: ${theme.colors.secondaryFont};
    margin: 32px 0;
    text-align: left;
`

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    margin: 12px 0;

`

const SubTitle = styled.h2`
    ${font({weight: 700, Fmax: 64, Fmin: 46, family: "\"Roboto\", sans-serif"})}
`

const BtnLink = styled(Link)``

export const S = {
    Main,
    TextWrapper,
    PhotoWrapper,
    Photo,
    Text,
    MainTitle,
    SubTitle,
    BtnLink
}

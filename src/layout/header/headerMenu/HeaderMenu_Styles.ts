import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Link} from "react-scroll";

// Menu
const MenuItem = styled.li`
    position: relative;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.accent};

    transition: ${theme.animations.transition};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const NavLink = styled(Link)`
    color: transparent;
    font-family: "Raleway", sans-serif;    
    line-height: 1.5;
    font-size: 36px;
    font-weight: 600;
    text-align: center;

    &::before {
        content: "";
        display: none;
        height: 3px;
        background-color: ${theme.colors.secondaryFont};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transition: ${theme.animations.transition};
    }

    &:hover, &.active {
        &::before {
            display: inline-block;
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
}
`
// MobileMenu
const MobileMenu = styled.nav``

const BurgerBtn = styled.button<{ isOpen: boolean }>`
    width: 30px;
    height: 30px;
    position: fixed;
    z-index: 999999999999;
    right: 30px;
    top: 12px;

    span {
        display: block;
        position: absolute;
        width: 25px;
        height: 2px;
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 10px;
        background-color: ${theme.colors.primaryFont};

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before, &::after {
            content: "";
            display: block;
            position: absolute;
            width: 25px;
            height: 2px;
            background-color: ${theme.colors.primaryFont};
            border-radius: 10px;
            transition: ${theme.animations.transition};
        }
        

        &::before {
            transform: translateY(-5px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0px);
            `}
        }

        &::after {
            transform: translateY(5px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0px);
            `}
        }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(249, 250, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: .8s ease-in-out;

    ul {
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: .8s ease-in-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
        & ul {
            gap: 40px;
        }
    `}

`

// DesktopMenu
const DesktopMenu = styled.nav`
    ul {
        justify-content: center;
        display: flex;
        gap: 48px;
    }

    ${NavLink} {
        ${font({weight: 500, Fmax: 18, Fmin: 14})}
        color: transparent;

        &::before {
            height: 2px;
        }
    }

    ${Mask} {
        color: ${theme.colors.primaryFont};
    }
`

export const S = {
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    MenuItem,
    BurgerBtn,
    Mask,
    NavLink
}
import React from 'react';
import styled, {css} from "styled-components";
import {Link} from "../../../Components/Link";
import {theme} from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerBtn isOpen={false}>
                <span></span>
            </BurgerBtn>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link>
                                {item}
                                <Mask>
                                    <span>
                                    {item}
                                    </span>
                                </Mask>
                                <Mask>
                                    <span>
                                    {item}
                                    </span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    opacity: 0;
    @media ${theme.media.tablet} {
        opacity: 1;
    };


}
`
const BurgerBtn = styled.button<{ isOpen: boolean }>`
    width: 30px;
    height: 30px;

    //background-color: red;
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
    background-color: ${theme.colors.accent};
    opacity: 0.9;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.primaryFont};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    
    ${Link} {
        color: transparent;
        font-size: 36px;
        font-weight: 600;
        line-height: 1.5;
    }

    position: relative;

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
    }

    &:hover {
        &::before {
            display: inline-block;
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.primaryFont};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
}
`



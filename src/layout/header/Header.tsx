import React from 'react';
import styled from "styled-components";
import {Container} from "../../Components/Container";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";


const items = ["About", "Projects", "Contacts"]


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Name>Arina Vasilevskaya</Name>
                    <MobileMenu menuItems={items}/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: transparent;
    padding: 12px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

const Name = styled.span`
    font-family: "Comfortaa", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.8;
    white-space: nowrap;
`





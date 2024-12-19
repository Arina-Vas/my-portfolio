import React, {useEffect, useState} from 'react';
import {Container} from "../../Components/Container";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {animateScroll as scroll} from 'react-scroll'


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const [showBackGround, setShowBackGround] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                setShowBackGround(true)
            } else {
                setShowBackGround(false)
            }

        });
    })


    return (
            <S.Header className={showBackGround ? 'backGround' : ''}>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.Name onClick={() => {
                        scroll.scrollToTop()
                    }}>Arina Vasilevskaya</S.Name>

                    {width < breakpoint ? <MobileMenu/>
                        : <DesktopMenu/>}

                </FlexWrapper>
            </Container>
        </S.Header>

    );
};





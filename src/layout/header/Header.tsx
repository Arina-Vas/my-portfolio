import React from 'react';
import {Container} from "../../Components/Container";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"


const items = ["About", "Projects", "Contacts"]


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.Name>Arina Vasilevskaya</S.Name>

                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};





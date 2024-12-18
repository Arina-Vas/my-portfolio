import React from 'react';
import {Icon} from "../../Components/Icon/Icon";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {Container} from "../../Components/Container";
import {Link} from "../../Components/Link";
import {S} from "./Footer_Styles"


const socialData = [
    {
        iconId: "telegram",
        href: "https://t.me/vasy_an",
    },
    {
        iconId: "linkedin",
        href: "https://www.linkedin.com/",
    },
    {
        iconId: "instagram",
        href: "https://www.instagram.com/vasy__an/",
    },

]


export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} justify={"space-between"}>
                    <S.SocialListTitle>Let’s be Friends</S.SocialListTitle>
                    <S.SocialList>
                        {socialData.map((s, index) => {
                            return (
                                <S.SocialItem>
                                    <S.SocialLink href={s.href}>
                                        <Icon width={"50%"} height={"50%"} viewBox="0 0 24 24"
                                              iconId={s.iconId}></Icon>
                                    </S.SocialLink>
                                </S.SocialItem>)
                        })}
                    </S.SocialList>
                    <S.Text>More projects I’ve worked on github
                        <Link href={"https://github.com/Arina-Vas"}> @Arina-Vas </Link>
                    </S.Text>
                    <S.Copyright>© Arina Vasilevskaya 2024</S.Copyright>
                </FlexWrapper>
            </Container>

        </S.Footer>

    );
};


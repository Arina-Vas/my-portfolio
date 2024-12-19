import React from 'react';
import {S} from "../HeaderMenu_Styles";

const menuItems = [
    {
        title: "About",
        href: "about"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contact",
        href: "contact"
    },
]

export const Menu = () => {
    return (
        <ul>
            {menuItems.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={2}
                        isDynamic={true}>
                        {item.title}
                        <S.Mask>
                            <span>
                                    {item.title}
                            </span>
                        </S.Mask>
                        <S.Mask>
                            <span>
                                {item.title}
                            </span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

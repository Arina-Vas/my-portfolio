import React from 'react';
import {Link} from "../../../../Components/Link";
import {S} from "../HeaderMenu_Styles"


export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.DesktopMenuItem key={index}>
                        <Link>
                            {item}
                        </Link>
                    </S.DesktopMenuItem>
                })}
            </ul>
        </S.DesktopMenu>
    );
};


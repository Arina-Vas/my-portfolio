import React, {useState} from 'react';
import {Link} from "../../../../Components/Link";
import {S} from "../HeaderMenu_Styles"



export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>
            <S.BurgerBtn isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerBtn>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <S.MobileMenuItem key={index}>
                            <Link>
                                {item}
                                <S.Mask>
                                    <span>
                                    {item}
                                    </span>
                                </S.Mask>
                                <S.Mask>
                                    <span>
                                    {item}
                                    </span>
                                </S.Mask>
                            </Link>
                        </S.MobileMenuItem>
                    })}
                </ul>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../Icon/Icon";
import {animateScroll as scroll} from "react-scroll";
import {theme} from "../../styles/Theme";


export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }

        });
    })

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon viewBox="0 0 24 24" width={'30'} height={"30"} iconId={'arrow'}/>
                </StyledGoTopBtn>
            )}

        </>

    );
};

const StyledGoTopBtn = styled.button`
    color: ${theme.colors.primaryFont};
    background-color: transparent;
    padding: 8px;
    position: fixed;
    right: 20px;
    bottom: 20px;
`
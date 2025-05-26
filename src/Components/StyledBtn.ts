import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";
import {ButtonHTMLAttributes} from "react";

type StyledBtnPropsType = {
    btnType?: "primary" | "secondary";
}  & ButtonHTMLAttributes<HTMLButtonElement>;

export const StyledBtn = styled.button<StyledBtnPropsType>`
    display: flex;
    align-items: center;  
    border-radius: 8px;
    padding: 8px 24px;
    height: 43px;
    

    ${(props) => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${theme.colors.accent};
    `}
    ${(props) => props.btnType === "secondary" && css<StyledBtnPropsType>`
        border: 2px solid ${theme.colors.primaryFont};
    background-color: transparent;`}

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    transition: ${theme.animations.transition};

    &:hover{
      transform: scale(1.05);  
    }
`;
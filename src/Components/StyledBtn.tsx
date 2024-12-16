import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type StyledBtnPropsType = {
    btnType?: "primary" | "secondary";
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    display: flex;
    align-items: center;  
    border-radius: 8px;
    padding: 8px 24px;
    //width: 115px;
    //height: 43px;
    

    ${(props) => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${theme.colors.accent};
    `}
    ${(props) => props.btnType === "secondary" && css<StyledBtnPropsType>`
        border: 2px solid ${theme.colors.primaryFont};
    background-color: transparent;`}

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    //line-height: 1.5;
`;
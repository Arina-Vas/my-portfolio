import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const Link = styled.a`
    &:active,
    &:hover {
        color: ${theme.colors.primaryFont};
    }
    &:focus {
        color: ${theme.colors.secondaryFont};
    }
`

// ${font({weight: 500, Fmax: 18, Fmin: 14, family: "\"Raleway\", sans-serif"})}
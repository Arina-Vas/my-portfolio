import styled from "styled-components";
import {theme} from "../../../styles/Theme";

// Skills
const Skills = styled.section``

//Skill
const Skill = styled.div`
    width: 25%;
    height: 170px;
    flex-grow: 1;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-around; //❗❗❗
    color: ${theme.colors.accent};

    @media ${theme.media.mobile} {
        width: 50%;
    }

`

export const S = {
    Skills,
    Skill

}
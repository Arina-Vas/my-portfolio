import React from 'react';

import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../Components/Icon/Icon";


type SkillPropsType = {
    iconId: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={"120px"} height={"120px"} />
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
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
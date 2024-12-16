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
            <Icon iconId={props.iconId} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 120px;
    flex-grow: 1;
    //min-width: 16%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    color: ${theme.colors.accent};

    @media ${theme.media.tablet} {
        width: 30%;
    }

    @media ${theme.media.mobile} {
        width: 50%;
    }

`
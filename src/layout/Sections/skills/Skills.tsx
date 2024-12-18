import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Container} from "../../../Components/Container";
import {Icon} from "../../../Components/Icon/Icon";
import {S} from "./Skills_Styles"

const skillData = [
    {
        iconId: "ts"
    },
    {
        iconId: "js"
    },
    {
        iconId: "react"
    },
    {
        iconId: "html"
    },
    {
        iconId: "ws"
    },
    {
        iconId: "css"
    },
    {
        iconId: "st-components"
    },
    {
        iconId: "github"
    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    {skillData.map((skill, index) => {
                        return <S.Skill>
                            <Icon iconId={skill.iconId} width={"120px"} height={"120px"} />
                        </S.Skill>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


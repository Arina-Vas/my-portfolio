import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Container} from "../../../Components/Container";
import {Icon} from "../../../Components/Icon/Icon";
import {S} from "./Skills_Styles"
import {Zoom} from "react-awesome-reveal";

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
        <S.Skills id="skills">
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <Zoom damping={0.2} duration={2000}>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                        {skillData.map((skill, index) => {
                            return <S.Skill>
                                <Icon iconId={skill.iconId} width={"120"} height={"120"}/>
                            </S.Skill>
                        })}
                </FlexWrapper>
                </Zoom>
            </Container>
        </S.Skills>
    );
};


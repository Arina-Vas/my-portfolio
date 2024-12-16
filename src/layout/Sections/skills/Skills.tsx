import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../Components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} >
                    <Skill iconId={"vscode"}/>
                    <Skill iconId={"js"}/>
                    <Skill iconId={"css"}/>
                    <Skill iconId={"html"}/>
                    {/*<Skill iconId={"greensock"}/>*/}
                    {/*<Skill iconId={"vector"}/>*/}
                    <Skill iconId={"github"}/>
                    <Skill iconId={"git"}/>
                    {/*<Skill iconId={"react"}/>*/}
                    {/*<Skill iconId={"sass"}/>*/}
                    {/*<Skill iconId={"bootstrap"}/>*/}
                    {/*<Skill iconId={"tailwind"}/>*/}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
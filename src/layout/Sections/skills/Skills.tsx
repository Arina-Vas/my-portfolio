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
                <FlexWrapper justify={"space-between"} wrap={"wrap"} >  {/*❗❗❗gap*/}
                    <Skill iconId={"ts"}/>
                    <Skill iconId={"js"}/>
                    <Skill iconId={"react"}/>
                    <Skill iconId={"html"}/>
                    <Skill iconId={"ws"}/>
                    <Skill iconId={"css"}/>
                    <Skill iconId={"st-components"}/>
                    <Skill iconId={"github"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
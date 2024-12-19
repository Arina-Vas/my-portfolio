import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Container} from "../../../Components/Container";
import {Slider} from "./slider/Slider";
import {FlexWrapper} from "../../../Components/FlexWrapper";


export const Projects: React.FC = () => {
    return (
        <StyledProjects id="projects">
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>Projects</SectionTitle>
                <Slider/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
`


import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Container} from "../../../Components/Container";
import {Slider} from "./slider/Slider";
import firstProjectImg from "../../../assets/img/photos/proj-1c.jpg"
import secondProjectImg from "../../../assets/img/photos/proj-2.webp"
import thirdProjectImg from "../../../assets/img/photos/proj-3.webp"

const projects = [
    {
        title: "Project Name",
        text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        image: firstProjectImg
    },
    {
        title: "Project Name",
        text: "What was your role, your deliverables, if the project was personal, freelancing.",
        image: secondProjectImg
    },
    {
        title: "Project Name",
        text: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
        image: thirdProjectImg
    }]

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <Slider items={projects} />
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
${Container} {
    overflow: hidden;
}
`


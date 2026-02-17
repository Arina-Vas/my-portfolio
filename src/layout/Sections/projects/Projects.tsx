import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Container} from "../../../Components/Container";
import {Slider} from "./slider/Slider";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import firstProjectImg from "../../../assets/img/photos/todos.webp";
import communicationImg from "../../../assets/img/photos/devSocial.webp";
import thirdProjectImg from "../../../assets/img/photos/notes.webp";

export type ProjectType = {
    title: string,
    text: string,
    link: string,
    image: string,
}
const projects: ProjectType[] = [
    {
        title: "Communication platform",
        text: "Communication platform — a single-page social network app built with Next.js, React, Redux Toolkit, Socket.IO, and Zod. Features include user authentication, posts with likes and comments, basic messaging, image uploads, and real-time updates. Focused on clean architecture, responsive UI with Radix UI and Sass, and efficient state management — demonstrating practical skills in building interactive, scalable frontend applications.",
        link: "https://devsocial.online/ru/",
        image: communicationImg
    },
    {
        title: "Project Todolist",
        text: "ToDo List — a single-page task management app built with React, Redux Toolkit (RTK Query), and Zod. Features include user authentication, task creation and filtering, and integration with a remote API. Focused on clean architecture, robust data validation, and efficient state management — reflecting practical skills in building scalable, production-ready frontend applications.",
        link: "https://arina-vas.github.io/todolist/",
        image: firstProjectImg
    },
    // {
    //     title: "Counter",
    //     text: "A small single-page app built with React and Redux Toolkit. It’s a simple counter that lets you increase, decrease, reset, or set a custom value.This project shows how I use: Redux Toolkit (creating actions and reducers, setting up the store), React hooks (useSelector, useDispatch).The goal of the app is to practice modern state management using Redux Toolkit in a React project.",
    //     link:"https://arina-vas.github.io/counter-rtk",
    //     image: secondProjectImg
    // },
    {
        title: "Project Notes",
        text: "A browser-based notes app built with vanilla JavaScript, HTML, and CSS. It allows users to create, edit, and delete notes, with data saved in localStorage for persistence.Key features: Pure JavaScript (no frameworks or libraries),Dynamic DOM manipulation,State persistence using localStorage,Simple and responsive UI.This project demonstrates my ability to build functional apps from scratch using core web technologies.",
        link:'https://devsocial.online/',
        image: thirdProjectImg
    }
]
export const Projects: React.FC = () => {
    return (
        <StyledProjects id="projects">
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Projects</SectionTitle>
                    <Slider items={projects}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
`


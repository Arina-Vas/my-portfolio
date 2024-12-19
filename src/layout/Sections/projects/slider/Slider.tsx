import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../../../styles/slider.css'
import {S} from "./Slider_Styles";
import {StyledBtn} from "../../../../Components/StyledBtn";
import firstProjectImg from "../../../../assets/img/photos/proj-1c.jpg";
import secondProjectImg from "../../../../assets/img/photos/proj-2.webp";
import thirdProjectImg from "../../../../assets/img/photos/proj-3.webp";

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
    }
]

type SliderPropsType = {
    title: string,
    text: string,
    image: string,
}


const Slide = (props: SliderPropsType) => {
    return (
        <S.Slide>
            <S.TextWrapper>
                <S.SlideTitle>{props.title}</S.SlideTitle>
                <S.SlideText>{props.text}</S.SlideText>
                <StyledBtn btnType={"secondary"}>View Project</StyledBtn>
            </S.TextWrapper>
            <S.SlideImage src={props.image} alt={props.title}/>
        </S.Slide>

    )
}

export const Slider = () => {
    const info = projects.map((item, index) => (
        <div key={index} style={{padding: "0 5px"}}>
            <Slide
                title={item.title}
                text={item.text}
                image={item.image}
            />
        </div>));
    return (
        <S.Slider>
            <AliceCarousel
                mouseTracking
                items={info}
                disableButtonsControls
                autoPlay
                autoPlayStrategy={'action'}
                autoPlayInterval={1000}
                animationDuration={1500}
                infinite
            />
        </S.Slider>
    )
};






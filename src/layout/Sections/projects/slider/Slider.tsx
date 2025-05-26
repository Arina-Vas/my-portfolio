import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../../../styles/slider.css'
import {S} from "./Slider_Styles";
import {StyledBtn} from "../../../../Components/StyledBtn";
import {ProjectType} from "../Projects";



type SliderPropsType = {
    items: ProjectType[]
}


const Slide = (props: ProjectType) => {
    return (
        <S.Slide>
            <S.TextWrapper>
                <S.SlideTitle>{props.title}</S.SlideTitle>
                <S.SlideText>{props.text}</S.SlideText>
                <StyledBtn btnType={"secondary"}
                           as={'a'}
                           href={props.link}
                           target="_blank" rel="noopener noreferrer">
                    View Project</StyledBtn>
            </S.TextWrapper>
            <S.SlideImage src={props.image} alt={props.title}/>
        </S.Slide>

    )
}

export const Slider = (props: SliderPropsType) => {
    const info = props.items.map((item, index) => (
        <div key={index} style={{padding: "0 5px"}}>
            <Slide
                title={item.title}
                text={item.text}
                image={item.image}
                link={item.link}
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
                animationDuration={2000}
                infinite
            />
        </S.Slider>
    )
};






import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../../../styles/slider.css'
import {S} from "./Slider_Styles";
import {StyledBtn} from "../../../../Components/StyledBtn";
import {FlexWrapper} from "../../../../Components/FlexWrapper";


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

export const Slider = (props: { items: Array<{ title: string, text: string, image: string }> }) => {
    const info = props.items.map((item, index) => (
        <Slide
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
        />));
    return (
        <S.Slider>
                <AliceCarousel
                    mouseTracking
                    items={info}
                    disableButtonsControls
                />
        </S.Slider>
    )
};




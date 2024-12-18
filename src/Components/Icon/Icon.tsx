import React from 'react';
import iconSprite from '../../assets/img/icons/icons-sprite.svg';

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "32"} height={props.height || "32"} viewBox={props.viewBox || "0 0 256 256"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
        </svg>
    );
};




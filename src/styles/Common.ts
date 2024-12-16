import {theme} from "./Theme";

type fontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = (props: fontPropsType) => `
    font-family: ${props.family || "Nunito"};
    font-weight: ${props.weight || 400};
    color: ${props.color || theme.colors.primaryFont};
    line-height: ${props.lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(1440 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px);
    `
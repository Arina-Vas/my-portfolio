import React from 'react';
import {FlexWrapper} from "../../../../Components/FlexWrapper";
import {S} from "./Field_Styles"


type FieldPropsType = {
    label: string;
    displayAs?: "input" | "textarea";
    fieldId: string;
    placeHolder: string;
    name: string;
    type?: string;
}

export const Field: React.FC<FieldPropsType> = (props: FieldPropsType) => {
    return (
        <S.Field>
            <FlexWrapper direction={"column"}>
                <S.Label htmlFor={props.fieldId}>{props.label}
                </S.Label>
                <S.Input required name={props.name} placeholder={props.placeHolder} as = {props.displayAs} id={props.fieldId} type={props.type || 'text'}/>
            </FlexWrapper>
        </S.Field>
    );
};


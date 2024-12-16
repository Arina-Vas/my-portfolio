import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../Components/FlexWrapper";

// @ts-ignore
type FieldPropsType = {
    label: string;
    displayAs?: "input" | "textarea";
    fieldId: string;
    placeHolder: string;
}

export const Field = (props: FieldPropsType) => {
    return (
        <StyledField>
            <FlexWrapper direction={"column"}>
                <StyledLabel htmlFor={props.fieldId}>{props.label}
                </StyledLabel>
                <StyledInput placeholder={props.placeHolder} as = {props.displayAs} id={props.fieldId}/>
            </FlexWrapper>
        </StyledField>
    );
};

const StyledField = styled.div`
`
const StyledLabel = styled.label`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 8px;
`
const StyledInput = styled.input`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    width: 100%;
    padding: 7px 15px;
    
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #828282;
`
import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Field} from "./field/Field";
import {StyledBtn} from "../../../Components/StyledBtn";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Container} from "../../../Components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <StyledForm>
                        <Field fieldId = {"name"} label={"Name"}  placeHolder={"something@website.com"}/>
                        <Field fieldId = {"email"} label={"Email"}  placeHolder={"Question about your article"}/>
                        <Field fieldId = {"message"} label={"Message"} displayAs={"textarea"}  placeHolder={"Your message starts with…"}/>
                        <StyledBtn btnType={"primary"} type={"submit"}>Send</StyledBtn>
                    </StyledForm>

                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledForm = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;
    max-width: 400px;
    
    textarea{
        resize: none;
        height: 160px;        
        
    }

    
    ${StyledBtn} {
        align-self: end;
    }
`
// const Field = styled.section` `
const StyledContact = styled.section`
    margin-bottom: 0;
`




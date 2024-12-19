import React from 'react';
import {SectionTitle} from "../../../Components/SectionTitle";
import {Field} from "./field/Field";
import {StyledBtn} from "../../../Components/StyledBtn";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Container} from "../../../Components/Container";
import {S} from "./Contact_Styles"

export const Contact: React.FC = () => {
    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.Form>
                        <Field fieldId = {"name"} label={"Name"}  placeHolder={"something@website.com"}/>
                        <Field fieldId = {"email"} label={"Email"}  placeHolder={"Question about your article"}/>
                        <Field fieldId = {"message"} label={"Message"} displayAs={"textarea"}  placeHolder={"Your message starts with…"}/>
                        <StyledBtn btnType={"primary"} type={"submit"}>Send</StyledBtn>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};




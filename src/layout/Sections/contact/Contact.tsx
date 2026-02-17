import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../Components/SectionTitle";
import {Field} from "./field/Field";
import {StyledBtn} from "../../../Components/StyledBtn";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Container} from "../../../Components/Container";
import {S} from "./Contact_Styles"
import emailjs from '@emailjs/browser'
import doneImg from './../../../assets/img/icons/message.svg'

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const [showMessage, setShowMessage] = React.useState(false);


    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_qwitcjj', 'template_ls00xir', form.current, {
                publicKey: '8neBEfQ6DjcDFJ-ft',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setShowMessage(true)

                    setTimeout(() => {
                        setShowMessage(false);
                    }, 3000);

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();

    };

    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <Field name={'user_name'} fieldId={"name"} label={"Name"}
                               placeHolder={"Your name"}/>
                        <Field name={'user_email'} fieldId={"email"} type={'email'} label={"Email"}
                               placeHolder={"something@website.com"}/>
                        <Field name={'subject'} fieldId={"subject"} label={"Subject"}
                               placeHolder={"Question about your article"}/>
                        <Field name={'message'} fieldId={"message"} label={"Message"} displayAs={"textarea"}
                               placeHolder={"Your message starts with…"}/>
                        <FlexWrapper align={"center"} gap={'10px'}>
                            <S.Message className={((showMessage) ? "success" : "")}>
                                <img src={doneImg} alt={'done'}/>
                                <span>Your message sent!</span></S.Message>
                            <StyledBtn btnType={"primary"} type={"submit"}>Send</StyledBtn>
                        </FlexWrapper>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};




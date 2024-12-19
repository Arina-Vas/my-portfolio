import React from 'react';
import photo from '../../../assets/img/photos/myPhoto-removebg.png'
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {StyledBtn} from "../../../Components/StyledBtn";
import {Container} from "../../../Components/Container";
import {S} from "./Main_Styles"
import {Link} from "../../../Components/Link";




export const Main: React.FC = () => {
    return (
        <S.Main id="about">
            <Container>
                <FlexWrapper justify={"space-between"} align={'center'} wrap={'wrap-reverse'}>
                    <S.TextWrapper>
                        <S.MainTitle>Frontend Developer</S.MainTitle>
                        <S.SubTitle>Hello, I'm Arina Vasilevskaya</S.SubTitle>
                        <S.Text>
                            Short text with details about you, what you do or your professional career. You can add more
                            information on the about page.
                        </S.Text>
                        <div>
                            <StyledBtn smooth={true} as={S.BtnLink} to={'projects'} btnType={"primary"}>Projects</StyledBtn>
                            <StyledBtn target="_blank" as={Link} href={'https://www.linkedin.com/'} btnType={"secondary"}>LinkedIn</StyledBtn>
                        </div>
                    </S.TextWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Me"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};






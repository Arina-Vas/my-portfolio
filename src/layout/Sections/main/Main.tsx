import React from 'react';
import photo from '../../../assets/img/photos/photo.png'
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {StyledBtn} from "../../../Components/StyledBtn";
import {Container} from "../../../Components/Container";
import {S} from "./Main_Styles"
import {Link} from "../../../Components/Link";

const about = 'Aspiring Frontend Developer with strong foundational skills gained through intensive training at IT-Incubator. Built several educational projects using JavaScript, TypeScript, React, Redux, and RTK Query, focusing on responsive design, state management, and API integration.Confident in working with application state, handling async data, and writing modular, maintainable styles using CSS Modules. I’m passionate about clean, readable code and constantly improving my skills.'

export const Main: React.FC = () => {
    return (
        <S.Main id="about">
            <Container>
                <FlexWrapper justify={"space-between"} align={'center'} wrap={'wrap-reverse'}>
                    <S.TextWrapper>
                        <S.MainTitle>Frontend Developer</S.MainTitle>
                        <S.SubTitle>Hello, I'm Arina Vasilevskaya</S.SubTitle>
                        <S.Text>
                            {about}
                        </S.Text>
                        <div>
                            <StyledBtn smooth={true} as={S.BtnLink} to={'projects'} btnType={"primary"}>Projects</StyledBtn>
                            <StyledBtn target="_blank" as={Link} href={"https://www.linkedin.com/in/arina-vasilevskaya-501908367/"} btnType={"secondary"}>LinkedIn</StyledBtn>
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






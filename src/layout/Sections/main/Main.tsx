import React from 'react';
import photo from '../../../assets/img/photos/myPhoto-removebg.png'
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {StyledBtn} from "../../../Components/StyledBtn";
import {Container} from "../../../Components/Container";
import {Link} from "../../../Components/Link";
import {S} from "./Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.Main>
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
                            <StyledBtn as={Link} btnType={"primary"}>Projects</StyledBtn> {/*as link*/}
                            <StyledBtn as={Link} btnType={"secondary"}>LinkedIn</StyledBtn> {/*as link*/}
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






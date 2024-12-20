import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 400px;

    textarea {
        resize: none;
        height: 160px;

    }

    & div {
        width: 100%;
        
    }
`
const Contact = styled.section`
    margin-bottom: 0;
`

const Message=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    font-weight: 600;
    white-space: nowrap;
    border-radius: 24px;
    padding: 10px;
    background-color: ${theme.colors.accent};

    img {
        height: 30px;
        width: 30px;
    }

    transform: scale(0);
    transition: .3s ease-in-out;

    &.success {
        transform: scale(1);
    }

    @media ${theme.media.desktop} {
        bottom: 100px;
    }

`

export const S = {
    Form,
    Contact,
    Message
}
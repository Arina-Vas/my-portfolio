import styled from "styled-components";
import {StyledBtn} from "../../../Components/StyledBtn";

const Form = styled.div`
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
const Contact = styled.section`
    margin-bottom: 0;
`

export const S = {
    Form,
    Contact
}
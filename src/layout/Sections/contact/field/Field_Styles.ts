import styled from "styled-components";

const Field = styled.div`
`
const Label = styled.label`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 8px;
`
const Input = styled.input`
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

export const S = {
    Field,
    Label,
    Input
}
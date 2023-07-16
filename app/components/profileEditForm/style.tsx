import styled from "styled-components";




export const RightSection = styled.section`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
width: 353px;
min-height: 345px;
background: #FFE0E2;
padding: 29px 17px;
box-shadow: 0px 24px 36px 0px rgba(53, 49, 84, 0.28);

& > h3 {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 29px;
}

& > p {
    color: #5C6A79;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
`

export const UserCard = styled.div`
display: flex;
flex-flow: row wrap;
gap: 17px;

`
export const UserForm = styled.form`
display: flex; 
flex-direction: column;
`

export const FormLabel = styled.label`
color: #000;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 8px;
`
export const Input = styled.input`
height: 30px;
color: #000;
font-family: inherit;
font-size: 24px;
font-weight: 700;
margin-bottom: 8px;
`

export const ErrorMsg = styled.p`
height: 8px;
color: #FF353A;
font-size: 8px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 8px;
`
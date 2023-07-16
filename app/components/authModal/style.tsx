import styled, { css } from "styled-components";

export const Wrapper = styled.form`
position: absolute;
top: 33px;
left: -120px;
width: 241px;
height: 312px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 17px 11px;
`
export const Legend = styled.legend`
color: #1C2A39;
font-size: 16px;
font-style: normal;
font-weight: 700;
text-align: center;
margin-bottom: 14px;
`
export const Label = styled.label`
color: #000;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
position: relative;
`
export const FieldSet = styled.fieldset`
all: unset;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
row-gap: 8px;
margin: 0 15px;
margin-bottom: 42px;
`
export const Input = styled.input<{ $error?: boolean, $valid?: boolean, $default?: boolean }>`

font-size: 12px;
font-weight: 700;
text-transform: lowercase;
margin-top: 9px;
padding: 10px 9px;
width: 176px;
height: 35px;

${(props) => props.$default && css`
color: #5C6A79;
border: 1px solid #5C6A79;
`
}

${(props) => props.$error && css`
border: 1px solid #FF353A;
color: #FF353A;
`
}

${(props) => props.$valid && css`
color: #4C3DB2;
border: 1px solid #4C3DB2;
`
}

&:focus {
    outline: 3px solid grey;
}

&:placeholder {
    color: #9E98DC;
    opacity: .5;
    content: "e.g. example@google.com";
}

`
export const ErrorMsg = styled.p`
height: 8px;
color: #FF353A;
font-size: 8px;
font-weight: 700;
margin-top: 8px;
`

export const LogInBtn = styled.button<{ $disabled?: boolean }>`
all: unset;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
width: 176px;
height: 32px;
color: #FFF;
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
background: #9E98DC;
margin: 0 15px;

&:hover {
    color: #9E98DC;
    background: #FFF;
    border: 1px solid #4C3DB2;
}

&:disabled {
background: grey;
opacity: .5;
cursor: not-allowed;
}
`
export const PasswordToggleBtn = styled.button<{$hide: boolean}>`
all: unset;
display: block;
position: absolute;
inset: 34px calc(100% - (33px));
width: 12px;
height: 12px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: url(${(props) => props.$hide ? '/free-icon-view-closed.png' : '/free-icon-view-open.png'});
`


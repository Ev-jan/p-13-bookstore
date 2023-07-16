import styled from "styled-components";

export const StyledCounter = styled.div`
width: 176px;
height: 45px;
display: flex;
flex-flow: row nowrap;
justify-content: space-around;
align-items: center;
border: 1px solid #EEEDF5;
color: #5C6A79;
font-size: 16px;
font-weight: 700;
text-transform: uppercase;
`

export const CountBtn = styled.button`
all: unset;
width: 22px;
height: 25px;
color: #000000;
cursor: pointer;

&:disabled {
    cursor: not-allowed;
}

&:hover {
    && > svg {
        scale: 1.1;
    }

}
`
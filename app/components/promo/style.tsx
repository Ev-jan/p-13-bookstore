import styled from "styled-components";

export const AdSquare = styled.a`
transition: transform 1s ease-in-out;
display: flex;
flex-direction: column;
justify-content: end;
box-shadow: 0px 24px 36px rgba(53, 49, 84, 0.28);
color: #1C2A39;
font-family: 'Montserrat', sans-serif, Arial, Helvetica;
font-size: 18px;
font-weight: 700;
line-height: 22px;
text-transform: uppercase;
&:hover {
  transform: scale(1.2);
}
&:first-of-type {
    flex-direction: column;
    justify-content: end;
    width: 149px;
    height: 54.18%;
    margin: 5.49% 5.14% 5.28% auto;
    background-color: #9e98dc;
    padding: 102px 20px 36px 20px;
}
&:last-of-type {
    transition: transform 1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 0 0 0 auto;
    padding: 0 47px 36px 21px;
    width: 137px;
    height: 273px;
    background-color: #ff8fe6;
` 

export const AdSquareContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
position: absolute;
z-index: 1;
height: min-content;

@media(max-width: 690px) {
    display: none;
}
`
export const AdSquareInnerWrap = styled.div`
display: grid;
width: 1440px;
max-width: 1440px;
height: fit-content;
max-height: 7020px;
`
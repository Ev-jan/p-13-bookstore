import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: start;
max-width: 1120px;
margin: 0 auto;
position: relative;
padding: 87px 0;
gap: 10px;

@media(max-width: 1120px){
    padding: 87px 25px;
}

@media(max-width: 680px){
    flex-direction: column;
    align-items: center;
    padding: 87px 15px;
}
`
export const ProfileHeading = styled.h2`
color: #1C2A39;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 12px;
`
export const LeftSection = styled.section`
display: flex;
flex-direction: column;
align-items: start;

`
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
import styled from "styled-components";
import Button from "../button/button";

export const StyledCard = styled.section`
display: flex;
column-gap: 36px;
width: 424px;
height: 300px;
position: relative;

@media(max-width: 690px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    column-gap: 0rem;
    row-gap: 1rem;
    width: unset;
    height: unset;
}`

export const StyledCartCard = styled(StyledCard)`
width: 304px;
height: 159px;
`

export const BookDataContainer = styled.section`
display: grid;
grid-template-rows: 1.8rem 2.4rem 2.9rem 5.5rem 3.2rem 4.5rem;
width: 21.2rem;
padding: 4.8rem 0;
@media(max-width: 690px){
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 0;
}
`

export const Author = styled.p`
grid-row: 1/2;
font-family: 'Open Sans', sans-serif;
font-size: 1rem;
line-height: 1.4rem;
color: #5C6A79;
white-space: pre-wrap;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
height: 1.5rem;
margin-bottom: 0.4rem;`

export const Title = styled.h4`
grid-row: 2/3;
font-size: 1.6rem;
font-weight: 700;
line-height: 2rem;
white-space: pre-wrap;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
color: #1C2A39;
margin-bottom: 0.4rem;

@media(max-width: 690px){
    text-align: center;
}`

export const RatingBar = styled.div`
grid-row: 3/4;
display: flex;
column-gap: 0.6rem;
font-family: 'Open Sans', sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.4rem;
color: #5C6A79;
margin-bottom: 1.6rem;
position: relative;
height: 1.2rem;
width: fit-content;`

export const ReviewCount = styled.span`
background-color: transparent;`

export const Description = styled.p`
grid-row: 4/5;
font-family: 'Open Sans', sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.4rem;
color: #5C6A79;
text-transform: capitalize;
white-space: pre-wrap;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
height: 4.1rem;
width: 17.6rem;
margin-bottom: 1.6rem;

@media(max-width: 690px){
    text-align: center;
}
`

export const Price = styled.p`
grid-row: 5/6;
color: #1C2A39;
font-size: 1.3rem;
font-weight: 700;
text-transform: uppercase;
height: 1.6rem;
margin-bottom: 1.6rem;`

export const ButtonContainer = styled.div`
grid-row: 6/7;
display: block;`

export const BuyButton = styled(Button)<{$isBookInCart: boolean}>`
border: ${(props) => (props.$isBookInCart ? "1px solid #EEEDF5" : "1px solid #4C3DB2")};
color: ${(props) => (props.$isBookInCart ? "#5C6A79" : "#4C3DB2")};
`

export const ImageWrapper = styled.div`
display: block;
width: 212px;
height: 300px;
position: relative;
transition: scale 1s ease-in-out;

&:hover{
scale: 1.1;
}
`
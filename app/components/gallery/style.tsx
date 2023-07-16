import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
position: relative;
grid-row: 3/4;
display: grid;
grid-template-columns: auto;
grid-template-rows: auto;
z-index: 0;

@media(max-width: 1120px) {
      display: grid;
      grid-template-columns: min-content auto;
      z-index: 0;
}
`

export const SidebarIconToggle = styled.label`
@media (max-width: 690px) {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: fixed;
    z-index: 99;
    height: 10%;
    width: 10%;
    top: 135px;
    left: 15px;
    height: 25px;
    width: 25px;
}

`

const Spinner = styled.div`
@media (max-width: 690px) {
    transition: all 0.3s;
    box-sizing: border-box;
    position: fixed;
    height: 3px;
    width: 100%;
    background-color: #1C2A39;
}
`
export const SpinnerHorizontal = styled(Spinner) <{ $hidden: boolean }>`
@media (max-width: 690px) {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
    ${(props) => props.$hidden &&
        css`
        transition: all 0.3s;
        box-sizing: border-box;
        opacity: 0;
        `
    }
}
`
export const SpinnerDiagonal1 = styled(Spinner) <{ $hidden: boolean }>`
@media (max-width: 690px) {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
    ${(props) => props.$hidden &&
        css`
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(135deg);
        margin-top: 8px;
        `
    }
}
`
export const SpinnerDiagonal2 = styled(Spinner) <{ $hidden: boolean }>`
@media (max-width: 690px) {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
    ${(props) => props.$hidden &&
        css`
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(-135deg);
        margin-top: -9px;
        `
    }
}
`

export const SideNavContainer = styled.aside<{ $hidden: boolean }>`
position: absolute;
display: flex;
width: 41.6rem;
height: 71rem;
translate: -16rem;
z-index: -1;


@media(max-width: 1120px) {
    grid-column: 1/2;
    width: 23rem;
    height: 71rem;
    translate: -5px;
    position: relative;
    z-index: 0;
}

@media(max-width: 690px) {
    grid-column: 1/2;
    width: 230px;
    height: max-content;
    position: fixed;
    top: 116px;
    transform: ${(props) => props.$hidden === true ? "translateX(-5px)" : "translateX(-235px)"};
    transition: transform 250ms ease-in-out;
    z-index: 3;
    overflow-y: scroll;
    max-height: 100vh;
    &::-webkit-scrollbar {
        display: none;
      }
}
`
export const StyledBookGallery = styled.div`
z-index: 2;
display: grid;
grid-template-columns: repeat(2, auto);
grid-column-gap: 7.5rem;
grid-row-gap: 9rem;
margin: 0 auto;
max-width: 92.4rem;
width: 100%;
translate: 9.8rem 4.6rem;
margin-bottom: 7.4rem;

@media(max-width: 1120px) {
    grid-column: 2/3;
    max-width: min-content;
    padding: 0 15px;
    grid-template-columns: 1fr;
    translate: 0 4.6rem;
    grid-column-gap: 3.2rem;
}
`

export const LoaderContainer = styled.div`
display: flex;
justify-content: center;
max-width: 100%;
margin-left: 18%;

@media(max-width: 1120px) {
    display: flex;
    grid-column: 1/-1;
    justify-content: center;
    max-width: 100%;
    margin-left: 0;
}
`

export const LoadBtnContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 7.4rem;
margin-left: 18%;

@media(max-width: 1120px) {
    display: flex;
    grid-column: 1/-1;
    justify-content: center;
    max-width: 100%;
    margin-left: 0;
    margin-bottom: 7.4rem;
}
`

// hide controls

export const Input = styled.input<{ $checked: boolean }>`
transition: all 0.3s;
box-sizing: border-box;
display: none;
`
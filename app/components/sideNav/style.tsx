import styled, {css} from "styled-components";

export const StyledSideNav = styled.div`
background-color: #efeef6;
width: 100%;
height: 100%;
padding-left: 16rem;
padding-top: 2.5rem;

@media(max-width: 1120px) {
  padding-left: 6rem;
}
`
export const CategoryList = styled.ul`

font-weight: 500;
font-size: 1.2rem;
line-height: 1.5rem;
text-transform: capitalize;
color: #5C6A79;
list-style-type: none;
box-sizing: border-box;
@media(max-width: 690px) {
  font-size: 1rem;
  line-height: 1.2em;
  color: #5C6A79;
}
`

export const CategoryListItem = styled.li<{$active?: boolean}>`
padding-bottom: 2.3rem;
    &:first-of-type {
    padding-top: 2rem;
    }

    & button {
    all: unset;
    cursor: pointer;
    }
    &:hover {
        color: #1C2A39;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2rem;
      }
  ${(props) => 
  props.$active && 
  css`
  color: #1C2A39;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;

  &::before {
    content: "\\2022";
    color: #756ad3;
    display: inline-block;
    margin-left: -1.4rem;
    width: 1.4rem;
  }
  `
  }
  @media (max-width: 690px) {
    padding-bottom: 1rem;
    &:first-of-type {
      padding-top: 1rem;
    }
    &:last-of-type {
      padding-bottom: 2rem;
    }
  }

`
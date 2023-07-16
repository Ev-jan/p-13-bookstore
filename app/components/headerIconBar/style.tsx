import styled from "styled-components";
import Link from "next/link";

export const StyledIconBar = styled.div`
position: relative;
display: flex;
column-gap: 4rem;
height: 1.5rem;
min-width: 80px;

& > button {
  all: unset;
  margin: 0;
  padding: 0;
  cursor: pointer;
  }

& > a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  color: #5C6A79;
}
`

export const CartContainer = styled.div`
position: relative;
`

export const CartCount = styled.div<{$count: number}>`
    display: ${(props) => props.$count < 1 ? "none" : "block"};
    position: absolute;
    top: 6px;
    right: -5px;
    width: 13px;
    height: 13px;
    line-height: 13px;
    background-color: #FF353A;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  `

  export const StyledLink = styled(Link)<{$active?: boolean}>`
  & > svg {
    stroke: ${(props) => (props.$active ? "#756ad3" : "initial")};
    fill: ${(props) => (props.$active ? "#756ad3" : "none")};
  }
  `
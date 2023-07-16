import styled from "styled-components";
import Link from 'next/link';

export const Nav = styled.nav`
max-width: max-content;
margin: 0 2rem;

& > ul {
  list-style-type: none;
  display: flex;
  column-gap: 4rem;
}



  @media (max-width: 690px) {
    flex-flow: row wrap;
    max-width: 100%;
    justify-content: center;
    & > ul {
      list-style-type: none;
      display: flex;
      column-gap: 1rem;
    }
  }
`
export const StyledLInk = styled(Link)<{$isActive?: boolean}>`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.$isActive ? "#756ad3" : "#5C6A79"};

&:hover {
    color: #1C2A39;
  }
`
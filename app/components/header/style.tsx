import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  max-width: 112rem;
  justify-content: space-between;
  align-items: center;
  height: 11.6rem;
  box-sizing: border-box;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif, Arial, Helvetica;

  @media (max-width: 690px) {
      flex-flow: row wrap;
      justify-content: center;
    }
`

export const Logo = styled.div`
font-weight: 900;
font-size: 2.4rem;
color: #1C2A39;
`
export const HeaderContainer = styled.div`
display: block;
position: sticky;
top: 0;
z-index: 4;
background-color: white;
padding: 0 5px;
`


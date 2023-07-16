import styled from "styled-components";

export const Main = styled.main`
display: grid;
max-width: 1120px;
margin: 0 auto;
position: relative;
padding: 87px 0;
@media (max-width: 680px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`

export const CartHeading = styled.h2`
color: #1C2A39;
font-size: 24px;
font-weight: 700;
margin-bottom: 19px;
width: 100%;
@media (max-width: 680px) {
text-align: center;
}
`
const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  > :nth-child(1) {
    flex-basis: 36.71%;
  }

  > :nth-child(2) {
    flex-basis: 23.48%;
  }

  > :nth-child(3) {
    flex-basis: 22.77%;
  }

  > :nth-child(4) {
    flex-basis: 17.14%;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    justify-content: center;

    > * {

      display: flex;
      flex-basis: unset;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const TableHeaderWrapper = styled(RowWrapper)`
color: #5C6A79;
font-size: 10px;
font-weight: 700;
text-transform: uppercase;
margin-bottom: 28px;
width: 100%;
height: 12px;

@media (max-width: 680px) {
display: none;
}
`

export const TableItemWrapper = styled(RowWrapper)`
height: 152px;
margin-bottom: 66px;
@media (max-width: 680px) {
    height: unset;
  }
}
`

export const ItemPrice = styled.div`
color: #1C2A39;
font-size: 18px;
font-weight: 700;
text-transform: uppercase;
`
export const ItemDelivery = styled.div`
display: flex;
width: 176px;
flex-direction: column;
color: #5C6A79;
font-size: 12px;
font-weight: 700;
`

export const TotalPrice = styled.div`
color: #1C2A39;
font-size: 24px;
font-weight: 700;
margin-bottom: 19px;
`
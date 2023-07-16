import { Arrow } from "@/public/icons"
import { AdSquare, AdSquareContainer, AdSquareInnerWrap } from "./style"


const Promo = () => {
    return (
        <AdSquareContainer>
        <AdSquareInnerWrap>
          <AdSquare href="">Change old book to new one<div><Arrow /></div></AdSquare>
          <AdSquare href="">top 100 books 2022<div><Arrow /></div></AdSquare>
        </AdSquareInnerWrap>
      </AdSquareContainer>
    )
}

export default Promo
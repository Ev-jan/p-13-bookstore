import styled from "styled-components";
import { Star, StarColors } from "@/public/icons";

const StarContainer = styled.div`
display: flex;
column-gap: .1rem;
align-items: center;
position: relative;
z-index: -1;
height: 1.2rem;
background-color: #fff;
`
const Overlay = styled.div<{$widthDelta: number}>`
background-color: #EEEDF5;
opacity: 1;
position: absolute;
top: 0;
right: 0;
bottom: 0;
z-index: 1;
mix-blend-mode: color;
margin: 1px;
width: ${(props) => `100 - ${props.$widthDelta}%`}
`

type RatingStartProps = {
    rating: number;
}
const RatingStars: React.FC<RatingStartProps> = ({rating}) => {
    const starQty: number = 5
    if (rating === undefined) {
        return
    }
    const percentage = Math.round((rating / starQty) * 100);

    return (
        <StarContainer>{
            Array.from(Array(starQty)).map((_, index) => (
                <Star key={index} color={StarColors.yellow}/>
            ))
        }
            <Overlay $widthDelta={percentage}></Overlay>
        </StarContainer>)
}

export default RatingStars
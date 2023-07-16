"use client"

import { StyledCounter, CountBtn } from "./style"
import { Plus, Minus } from "@/public/icons";

type CouterProps = {
    startCount: number;
    decrement: () => void;
    increment: () => void;
}

const Counter: React.FC<CouterProps> = ({startCount, decrement, increment}) => {

    return (
        <StyledCounter>
            <CountBtn onClick={decrement} disabled={startCount < 2}><Minus /></CountBtn>
            <div>{startCount}</div>
            <CountBtn onClick={increment}><Plus /></CountBtn>
        </StyledCounter>
    )
} 

export default Counter
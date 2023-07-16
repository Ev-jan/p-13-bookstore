import styled from "styled-components";



export const SliderContainer = styled.div`
height: 100%;
width: 100%;
padding-top: calc(702 / 1120 * 100%);
position: relative;
z-index: 0;
`
export const SlideShowControls = styled.div`
display: flex;
height: 1.2rem;
width: 5.6rem;
column-gap: 1rem;
position: absolute;
inset: calc(100% + 17px) 50%;
z-index: 1;
`

export const DotIndicator = styled.div<{$active: boolean}>`
height: 12px;
width: 12px;
border-radius: 50%;
background: ${props => props.$active ? "#9e98dc" : "#efeef6"};
cursor: pointer;
}
`
import styled from "styled-components";

const StyledLoader = styled.div`
display: block;
    position: relative;
    width: 80px;
    height: 80px;
    & div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      background-color: #efeef6;
    }
    & div:nth-of-type(1){
      left: 8px;
      animation-delay: -0.24s;
    }
    div:nth-of-type(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    div:nth-of-type(3) {
      left: 56px;
      animation-delay: 0;
    }
  }

  @keyframes loader {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
`

const Loader: React.FC = (): React.ReactNode => {
    return (
        <StyledLoader>
            <div></div>
            <div></div>
            <div></div>
        </StyledLoader>  )
    
}

export default Loader
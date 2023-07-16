import { ComponentProps, ReactNode} from "react";
import StyledButton from "./style"; 

type ButtonProps = ComponentProps<"button"> & {
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {

    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
  };

  export default Button
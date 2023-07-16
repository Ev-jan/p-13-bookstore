import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  box-sizing: border-box;
  height: 4.5rem;
  width: 17.6rem;
  background-color: transparent;
  border: 1px solid rgba(76, 61, 178, 1);
  border-radius: 0px;
  color: rgba(76, 61, 178, 1);
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  line-height: 0.1rem;
  cursor: pointer;

  &:hover {
    color: #E5E5E5;
    background-color: rgba(76, 61, 178, 1);
    border: 1px solid #E5E5E5;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  }

  &:disabled {
    border: 1px solid #eeedf5;
    color: #5c6a79;
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #fff;
  }
`;

export default StyledButton;
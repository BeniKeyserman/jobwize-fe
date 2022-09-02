import styled from "styled-components";

const StyledButton = styled.button`
  padding: 16px;
  max-width: 181px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  color: ${ props => props.primary ? 'white' : '#FF6C2D' };
  background-color: ${ props => props.primary ? '#FF6C2D' : 'transparent' };
  border: 1px solid ${ props => props.primary ? 'transparent' : '#FF6C2D' };

  &:hover {
    background-color: ${ props => props.primary ? '#F05B1B' : 'transparent' };
    color: ${ props => props.primary ? 'white' : '#F05B1B' };
    border-color: ${ props => props.primary ? 'transparent' : '#F05B1B' };
  }

  &:active {
    background-color: ${ props => props.primary ? '#D03E00' : 'transparent' };
  }

  &:disabled {
    background-color: #EFEFEF;
    color: #8A8A8A;
  }
`;

export default StyledButton;

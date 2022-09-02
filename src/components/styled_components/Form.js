import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 375px;
  width: 100%;
`;

const StyledFormTitle = styled.h3`
  margin-bottom: 36px;
  padding: 16px 16px 0;
  line-height: 40px;
  font-size: 32px;
  font-weight: $weight-400;
  color: #392927;
`;

const StyledFormControl = styled.div`
  align-self: stretch;
`;

const StyledFormInput = styled.input`
  margin-bottom: 24px;
  width: 100%;
  padding: 18px 15px;
  max-height: 60px;
  line-height: 24px;
  font-size: 17px;
  color: #747474;
  border: 1px solid #D7D7D7;
  border-radius: 10px;

  &::placeholder {
    color: #747474;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }

    border-color: #6F7D87;
  }

  &:hover {
    &::placeholder {
      color: transparent;
    }

    border-color: #6F7D87;
  }
`;

export {
  StyledForm,
  StyledFormTitle,
  StyledFormControl,
  StyledFormInput
};

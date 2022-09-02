import React, {useState} from "react";
import styled from "styled-components";
import cover from "../assets/image/login-cover.jpg"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1160px;
  width: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  gap: 135px;
  padding: 80px 0 90px;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 558px;
  border-radius: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 375px;
  width: 100%;
`;

const FormTitle = styled.h3`
  margin-bottom: 36px;
  padding: 16px 16px 0;
  line-height: 40px;
  font-size: 32px;
  font-weight: $weight-400;
  color: #392927;
`;

const Control = styled.div`
  align-self: stretch;
`;

const StyledInput = styled.input`
  margin-bottom: 24px;
  width: 100%;
  padding: 18px 15px;
  max-height: 60px;
  line-height: 24px;
  font-size: 17px;
  color: #747474;
  border: 1px solid #D7D7D7;
  border-radius: 10px;
  transition: all .3s ease;

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

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 32px;
  width: 100%;
`;

const ButtonLogin = styled.button`
  padding: 16px;
  max-width: 181px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  transition: all .3s ease;
  color: white;
  background-color: #FF6C2D;

  &:hover {
    background-color: #F05B1B;
  }

  &:active {
    background-color: #D03E00;
  }

  &:disabled {
    background-color: #EFEFEF;
    color: #8A8A8A;
  }
`;

const ButtonCreate = styled.div`
  padding: 16px;
  max-width: 181px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  transition: all .3s ease;
  color: #F05B1B;
  background-color: transparent;
  border: 1px solid #F05B1B;
  transition: all .3s ease;

  &:hover {
    color: #F05B1B;
    border-color: #F05B1B;
  }

  &:active {
    color: #D03E00;
    border-color: #D03E00;
  }
`;

const ForgotContainer = styled.div`
  text-align: center;
  max-width: 343px;
  padding: 4px 16px 12px;
  font-weight: 500;
`;

const ForgotLink = styled.span`
  text-decoration: none;
  color: #747474;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    color: #F05B1B;
  }

  &:active {
    color: #D03E00;
  }
`;


const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email, password);
  }

  return (
    <Container>
      <LoginContainer>
        <Slider>
          <img src={ cover } alt="Work for students" />
        </Slider>
        <StyledForm>
          <FormTitle>AUTHORIZATION</FormTitle>
          <Control>
            <StyledInput
              value={ email }
              onChange={ e => { setEmail(e.target.value) } }
              type="email"
              placeholder="EMAIL"
            />
          </Control>

          <Control>
            <StyledInput
              type="password"
              value={ password }
              onChange={ e => { setPassword(e.target.value) } }
              placeholder="PASSWORD"
            />
          </Control>

          <ButtonsContainer>
            <ButtonLogin type="button" onClick={ () => handleSubmit() }>LOGIN</ButtonLogin>
            <ButtonCreate type="button">CREATE ACCOUNT</ButtonCreate>
          </ButtonsContainer>
          <ForgotContainer>
            <ForgotLink>
              FORGOT PASSWORD
            </ForgotLink>
          </ForgotContainer>
        </StyledForm>
      </LoginContainer>
    </Container>
  )
}

export default Login;

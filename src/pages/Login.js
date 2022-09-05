import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import API from "../utils/api";
import StyledContainer from "../components/styled_components/Constainer";
import { StyledForm,
  StyledFormTitle,
  StyledFormControl,
  StyledFormInput } from "../components/styled_components/Form";
import StyledButton from "../components/styled_components/Button";
import cover from "../assets/image/login-cover.jpg";

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

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 32px;
  width: 100%;
`;

const ForgotContainer = styled.div`
  text-align: center;
  max-width: 343px;
  padding: 4px 16px 12px;
  font-weight: 500;
  color: #747474;
`;

const ForgotLink = styled.span`
  text-decoration: none;
  margin: 0 2px;
  color: #FF6C2D;
  cursor: pointer;

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
  const [cookies, setCookie] = useCookies([]);
  const navigate = useNavigate();

  const login = () => {
    const api = new API();
    api
      .login(email, password)
      .then((res) => {        
        let role = res.data.role;
        setCookie('accessToken', res.data.accessToken);
        setCookie('userRole', role);
        props.setLoginState(true);
        props.setRole(res.data.role);

        role === 'employee'
          ? navigate('/employee')
          : navigate('/employer')
      })
      .catch((err) => console.log(err));
  }

  return (
    <StyledContainer>
      <LoginContainer>
        <Slider>
          <img src={ cover } alt="Work for students" />
        </Slider>
        <StyledForm>
          <StyledFormTitle>AUTHORIZATION</StyledFormTitle>
          <StyledFormControl>
            <StyledFormInput
              value={ email }
              onChange={ e => { setEmail(e.target.value) } }
              type="email"
              placeholder="EMAIL"
            />
          </StyledFormControl>

          <StyledFormControl>
            <StyledFormInput
              type="password"
              value={ password }
              onChange={ e => { setPassword(e.target.value) } }
              placeholder="PASSWORD"
            />
          </StyledFormControl>

          <ButtonsContainer>
            <StyledButton primary type="button" onClick={ login }>LOGIN</StyledButton>
            <StyledButton type="button">CREATE ACCOUNT</StyledButton>
          </ButtonsContainer>
          <ForgotContainer>
            Forgot your password? Click
            <ForgotLink>
              Here
            </ForgotLink>
            to get an email link with instructions to reset.
          </ForgotContainer>
        </StyledForm>
      </LoginContainer>
    </StyledContainer>
  )
}

export default Login;

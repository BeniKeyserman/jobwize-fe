import React from "react";
import styled from "styled-components";
import logo from '../assets/svg/logo.svg';
import ukFlag from '../assets/svg/flag-en.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  max-height: 82px;
  background-color: white;
  border-bottom: 1px solid #EDEDED;
`;

const LogoText = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

const StyledText = styled.span`
  line-height: 24px;
  font-size: 17px;
  font-weight: 700;
  color: #392927;
  transition: all .3s ease;
`;

const LangBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: None;
  
  &:hover {
    color: black;
  }
`;

const Lang = styled.span`
  line-height: 24px;
  font-size: 17px;
  color: #392927;
  background-color: transparent;
  transition: all .3s ease;
`;

const Header = () => {
  return (
    <Nav>
      <LogoText href="/">
          <img src={ logo } alt="Handly Logo" />
          <StyledText>Handly</StyledText>
      </LogoText>
      <LangBtn>
          <Lang className="lang">ENG</Lang>
          <img src={ ukFlag } alt="Flag of Great Britain" />
      </LangBtn>
    </Nav>
    )
}

export default Header;

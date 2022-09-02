import React from "react";
import styled from "styled-components";
import appStore from '../assets/svg/app-store.svg';
import googleStore from '../assets/svg/google-store.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 142px;
  padding: 32px 80px;
  max-height: 168px;
  background-color: white;
  border-top: 1px solid #EDEDED;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 20px;

  .text {
    color: #747474;
  }

  .col:first-of-type {
    max-width: 304px;
    width: 100%;
  }

  .col:last-of-type {
    max-width: 498px;
    width: 100%;
  }
`;

const StyledTitle = styled.h3`
  margin-bottom: 2px;
  line-height: 24px;
  font-size: 17px;
  font-weight: 600;
  color: #392927;
`;

const StyledText = styled.p`
  line-height: 18px;
  color: #6F7D87;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const AppImage = styled.img`
  max-width: 165px;
  max-height: 50px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Header>
          <div className="col">
            <StyledTitle>Lorem</StyledTitle>
            <StyledText>Lorem ipsum dolor sit amet.</StyledText>
          </div>
          <div className="col">
            <StyledTitle>Lorem@ipsum.com</StyledTitle>
            <StyledText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </StyledText>
          </div>
        </Header>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit accumsan est
          tincidunt iaculis suspendisse interdum lacus, tincidunt.
        </StyledText>
      </div>
      <RightSection>
        <a href="/">
          <AppImage
            src={ appStore }
            alt="Handle application on App Store"
          />
        </a>
        <a href="/">
          <AppImage
            src={ googleStore }
            alt="Handle application on Google Store"
          />
        </a>
      </RightSection>
    </Wrapper>
  )
}

export default Footer;

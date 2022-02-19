import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper id="footer">
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+447438217240">+44 7438 217 240</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:uk.vijayenderthakur@gmail.com">uk.vijayenderthakur@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Social Presence</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="/">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillInstagram size="2rem" />
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;

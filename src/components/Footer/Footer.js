import React from 'react';
import Social from '../Social/Social';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
       <LinkList>
            <LinkColumn>
                <LinkTitle>Telefone:</LinkTitle>
                <LinkItem href="tel: 55 11 932519833">+55 (11) 9 3251-9833</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Email:</LinkTitle>
                <LinkItem href="mailto:geronimo.olanda98@gmail.com">geronimo.olanda98@gmail.com</LinkItem>
            </LinkColumn>
       </LinkList>
       <SocialIconsContainer>
           <CompanyContainer>
               <Slogan>Desenvolvido por Geronimo Olanda</Slogan>
           </CompanyContainer>
           <SocialContainer>
                <Social />
            </SocialContainer>
       </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;

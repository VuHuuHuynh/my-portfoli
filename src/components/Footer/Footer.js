import { AiFillFacebook, AiFillGithub, AiFillSkype, AiFillTwitterCircle } from 'react-icons/ai';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import { Link } from '../../styles/GlobalComponents';
import React from 'react';
import { SocialIcons } from '../Header/HeaderStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://t.me/hyun139">Telegram</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:+84376861778">
            +84 376 861 778
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:huynhvu26998@gmail.com">
            huynhvu26998@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2021 <Link href="https://huynhvu.work/">  Huynh Vu Huu</Link> . All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/VuHuuHuynh">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/vuhuynh99">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://join.skype.com/invite/YTh5PUsT2oQd">
            <AiFillSkype size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/Huyn269">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;

import { AiFillFacebook, AiFillGithub, AiFillSkype, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import Link from 'next/link';
import React from 'react';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <img src="/logo-face.png" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Huynh Vu Huu</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;

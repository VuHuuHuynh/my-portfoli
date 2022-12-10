import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { SiTelegram } from "react-icons/si";
import { Container, Div1, Div3, SocialIcons } from './HeaderStyles';

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
    <Div3>
      <SocialIcons href="https://github.com/VuHuuHuynh">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/vuhuynh99">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://t.me/hyun139">
        <SiTelegram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

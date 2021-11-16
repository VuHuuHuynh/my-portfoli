import { Link, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hi, My name is Huynh Vu Huu.
        </SectionText>
        <SectionText>
          I'm a Back-end developer who create API, builds and maintains the technology needed to power the components.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://i.topcv.vn/vuhuuhuynh?ref=3486195';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

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
          I'm a Back-end Developer. Currently, I'm working with Blockchain, crawling data and processing logic to build products on Blockchain network platform.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.topcv.vn/xem-cv/Uw4EAltRBgNUBQIEVwxSBgYEDl5XXVUBXQZQAg34b3';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

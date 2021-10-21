import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo <br/> ao meu portfolio Pessoal
      </SectionTitle>
      <SectionText>
      ~Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.
      </SectionText>
      <Button onClick={() => window.location = 'curriculum/curriculo.pdf'}>Curriculo</Button>
    </LeftSection>
  </Section>
);

export default Hero;
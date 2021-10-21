import React from 'react';
import { DiFirebase, DiReact,DiJavascript , DiZend } from 'react-icons/di';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Eu venho trabalhando com uma series de tecnologias voltadas para o desenvolvimento web, desde o Back-End ao Design.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <LinkContainer>
          <ListTitle>Front-End </ListTitle>
          <ListParagraph>
            Experiência com JavaScript e seu ecosistema<br />
            JavaScript

          </ListParagraph>
        </LinkContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <LinkContainer>
          <ListTitle>Back-End </ListTitle>
          <ListParagraph>
            Experiência com <br />
            Node.Js, PHP and Banco de Dados

          </ListParagraph>
        </LinkContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <LinkContainer>
          <ListTitle>UI /EX Design </ListTitle>
          <ListParagraph>
            Experiencia com<br />
            Prototipação, wireframes, e ferramentas como Photoshop e Figma
          </ListParagraph>
        </LinkContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

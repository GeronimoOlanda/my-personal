import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import Social from '../Social/Social';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
   {/*Nome Inicial */}
   <Div1>
     <Link href="/">
       <a style={{display: "flex", alignItems: "center",  color: "white", marginBottom: '23px'}}>
         <DiCssdeck size= "3rem" /> <Span>Geronimo Olanda</Span>
       </a>
     </Link>
   </Div1>

   {/* Barra de Navegação */}
   <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Sobre</NavLink>
        </Link>
      </li>
   </Div2>
   {/*Minhas Redes Sociais*/}
   <Div3>
    <Social />
   </Div3>
 </Container>
);

export default Header;

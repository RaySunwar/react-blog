import React from "react";
import Styled from "styled-components";
import { SiFacebook, SiTwitter, SiPinterest } from "react-icons/si";

const Nav = Styled.div`
  background-color: #ffffff;
  font-family: "Mulish", sans-serif;
`;

const Subnav = Styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
`;

const Section = Styled.section`
  background-color: #ffffff;
`;

const Title = Styled.h3`
  background-color: #ffffff;
`;

const Unorderlist = Styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Listitem = Styled.li`
  margin: 12px 0;
  position: relative;
`;

const Link = Styled.p`
  text-align: left;
`;

const Anchor = Styled.a`
  color: #424851;
  text-align: center;
`;


const Footernav = Styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0;
`;

const Footerlink = Styled.p`
  text-align: center;
`;

const footer = () => {
  return(
    <Nav>
      <Subnav>
        <Section>
          <Title>React Blog</Title>
          <Link><Anchor>A multi-concept personal blog and <br /> magazine WordPress theme</Anchor>
            <Unorderlist>
              <Listitem>
                <SiFacebook />
                <SiTwitter />
                <SiPinterest />
              </Listitem>
            </Unorderlist>
          </Link>
        </Section>
        <Section>
          <Title>Blocks</Title>
          <Link>
            <Unorderlist>
              <Listitem><Anchor>Common blocks</Anchor></Listitem>
              <Listitem><Anchor>Formating blocks</Anchor></Listitem>
              <Listitem><Anchor>Layout blocks</Anchor></Listitem>
            </Unorderlist>
          </Link>
        </Section>
        <Section>
          <Title>Features</Title>
          <Link>
            <Unorderlist>
              <Listitem><Anchor>Shortcodes</Anchor></Listitem>
              <Listitem><Anchor>Custom Widgets</Anchor></Listitem>
              <Listitem><Anchor>Contact</Anchor></Listitem>
            </Unorderlist>
          </Link>
        </Section>
        <Section>
          <Title>What next?</Title>
          <Link>
            <Unorderlist>
              <Listitem><Anchor>Try it for free</Anchor></Listitem>
              <Listitem><Anchor>Pre-sale question</Anchor></Listitem>
              <Listitem><Anchor>Purchase now!</Anchor></Listitem>
            </Unorderlist>
          </Link>
        </Section>
      </Subnav>
      <hr/>
      <Footernav>
        <Footerlink>
          Created by <Anchor href="#">WHA</Anchor> · Copyright 2020 · All rights reserved
        </Footerlink>
      </Footernav>  
    </Nav>
  );
};

export default footer;
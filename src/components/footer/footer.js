import React from "react";
import Styled from "styled-components";

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
    margin-bottom: 12px;
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
          <Link><Anchor>A multi-concept personal blog and <br /> magazine WordPress theme</Anchor></Link>
        </Section>
        <Section>
          <Title>Blocks</Title>
          <Link>
            <Unorderlist>
                <Listitem>Common blocks</Listitem>
                <Listitem>Formating blocks</Listitem>
                <Listitem>Layout blocks</Listitem>
            </Unorderlist>
          </Link>
        </Section>
        <Section>
          <Title>Features</Title>
          <Link>
            <Unorderlist>
                <Listitem>Shortcodes</Listitem>
                <Listitem>Custom Widgets</Listitem>
                <Listitem>Contact</Listitem>
            </Unorderlist>
          </Link>
        </Section>
        <Section>
          <Title>What next?</Title>
          <Link>
            <Unorderlist>
              <Listitem>Try it for free</Listitem>
              <Listitem>Pre-sale question</Listitem>
              <Listitem>Purchase now!</Listitem>
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
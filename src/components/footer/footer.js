import React from "react";
import styled from "styled-components";
import breakpoints from "./../../mediaQueries";
import { SiFacebook, SiTwitter, SiPinterest } from "react-icons/si";

const Nav = styled.div`
  background-color: #ffffff;
  font-family: "Mulish", sans-serif;

  @media ${breakpoints.Mobile} {
    margin: 0 40px;
    padding: 0 10px;
  }
`;

const Subnav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
  flex-wrap: wrap;

  @media ${breakpoints.Mobile} {
    display: block;
    margin: 8px;
    width: 100%;
  }
`;

const Section = styled.section`
  background-color: #ffffff;
`;

const Title = styled.h3`
  background-color: #ffffff;
`;

const Unorderlist = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Ulisticon = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const Listitem = styled.li`
  margin: 12px 0;
  position: relative;
`;

const Link = styled.div`
  text-align: left;
  max-width: 300px;
`;

const Anchor = styled.a`
  color: #424851;
  text-align: center;
  &:hover {
    color: #f13b3b;
  }
`;

const AnchorI = styled.a`
  color: #424851;
  text-align: center;
  margin-right: 5px;
`;

const Footernav = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0;

  @media ${breakpoints.Mobile} {
    font-size: 13px;
  }
`;

const Footerlink = styled.p`
  text-align: center;
`;

const StyledFacebook = styled(SiFacebook)`
  color: #3e5b98;
`;

const StyledTwitter = styled(SiTwitter)`
  color: #4da7de;
`;

const StyledPinterest = styled(SiPinterest)`
  color: #c92619;
`;

const footer = () => {
  return (
    <Nav>
      <Subnav>
        <Section>
          <Title>React Blog</Title>
          <Link>
            <Anchor>
              A multi-concept personal blog and magazine WordPress theme
            </Anchor>
            <Ulisticon>
              <Listitem>
                <AnchorI>
                  <StyledFacebook />
                </AnchorI>
              </Listitem>
              <Listitem>
                <AnchorI>
                  <StyledTwitter />
                </AnchorI>
              </Listitem>
              <Listitem>
                <AnchorI>
                  <StyledPinterest />
                </AnchorI>
              </Listitem>
            </Ulisticon>
          </Link>
        </Section>
        <Section>
          <Title>Blocks</Title>
          <Link>
            <Unorderlist>
              <Listitem>
                <Anchor>Common blocks</Anchor>
              </Listitem>
              <Listitem>
                <Anchor>Formating blocks</Anchor>
              </Listitem>
              <Listitem>
                <Anchor>Layout blocks</Anchor>
              </Listitem>
            </Unorderlist>
          </Link>
        </Section>
        <Section>
          <Title>Features</Title>
          <Link>
            <Unorderlist>
              <Listitem>
                <Anchor>Shortcodes</Anchor>
              </Listitem>
              <Listitem>
                <Anchor>Custom Widgets</Anchor>
              </Listitem>
              <Listitem>
                <Anchor>Contact</Anchor>
              </Listitem>
            </Unorderlist>
          </Link>
        </Section>
        <Section>
          <Title>What next?</Title>
          <Link>
            <Unorderlist>
              <Listitem>
                <Anchor>Try it for free</Anchor>
              </Listitem>
              <Listitem>
                <Anchor>Pre-sale question</Anchor>
              </Listitem>
              <Listitem>
                <Anchor>Purchase now!</Anchor>
              </Listitem>
            </Unorderlist>
          </Link>
        </Section>
      </Subnav>
      <hr />
      <Footernav>
        <Footerlink>
          Created by <Anchor href="#">WHA</Anchor> · Copyright 2020 · All rights
          reserved
        </Footerlink>
      </Footernav>
    </Nav>
  );
};
export default footer;
import React, { Fragment } from "react";
import Styled from "styled-components";
import { device } from "./../../mediaQueries";

const Wrapper = Styled.div`
  width: 100%;
`;

const Nav = Styled.div`
  margin: 0;
  padding: 0;
`;

const Title = Styled.h1`
  color: #424851;
  font-family: "Mulish", "Arial", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 0;
  text-align: center;

  @media ${device.sm}{
    font-size: 2rem;
    padding-top: 0;
  }
`;

const Subtitle = Styled.h2`
  color: #424851;
  font-family: "Mulish", "Arial", sans-serif;
  font-weight: 7;
  font-size: 2rem;
  text-align: center;

  @media ${device.sm}{
    font-size: 1.5rem;
    padding-top: 0;
  }
`;

function Featured(){
  return (
    <Fragment>
      <Wrapper>
        <Nav>
          <Title>Featured articles</Title>
        </Nav>
        <Nav>
          <Subtitle>Fetch Data will be render here</Subtitle>
        </Nav>
      </Wrapper>
    </Fragment>
  );
};

export default Featured;
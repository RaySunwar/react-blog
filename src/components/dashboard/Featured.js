import React, { Fragment } from "react";
import Styled from "styled-components";
import breakpoints from "./../../mediaQueries";

const Wrapper = Styled.div`
  width: 100%;

  @media ${breakpoints.Mobile}{
    max-width: 480px;
  }

  @media ${breakpoints.Tablet}{
    max-width: 760px;
  }

  @media ${breakpoints.Laptop}{
    max-width: 1024px;
  }
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

  @media ${breakpoints.Mobile}{
    font-size: 1.7rem;
    padding-top: 0;
  }

  @media ${breakpoints.Tablet}{
    font-size: 1.7rem;
    padding-top: 0;
  }
`;

const Subtitle = Styled.h2`
  color: #424851;
  font-family: "Mulish", "Arial", sans-serif;
  font-weight: 7;
  font-size: 1.7rem;
  text-align: center;

  @media ${breakpoints.Mobile}{
    font-size: 1.6rem;
    padding-top: 0;
  }

  @media ${breakpoints.Tablet}{
    font-size: 1.6rem;
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
import React, { Fragment } from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
    background-color: #ffffff;
    width: 100%;
`;

const Nav = Styled.div`
    font-family: 
`;

const Title = Styled.h1`
  color: #424851;
  font-family: "Mulish", "Arial", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  padding-top: 3rem;
  text-align: center;
`;

const Subtitle = Styled.h1`
  color: #424851;
  font-family: "Mulish", "Arial", sans-serif;
  font-weight: 7;
  font-size: 2rem;
  padding-top: 1rem;
  text-align: center;
`;

function Featured(){
    return(
        <Fragment>
            <Wrapper>
                <Title>Featured articles</Title>
            </Wrapper>
            <Nav>
                <Subtitle>Fetch Data will be render here</Subtitle>
            </Nav>
        </Fragment>
    );
};

export default Featured;
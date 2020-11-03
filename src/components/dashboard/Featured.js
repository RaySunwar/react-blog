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
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  padding-top: 3rem;
  text-align: center;
`;

function Featured(){
    return(
        <Fragment>
            <Wrapper>
                <Title>Featured articles</Title>
            </Wrapper>
            <Nav>Fetch Data will be render here</Nav>
        </Fragment>
    );
};

export default Featured;
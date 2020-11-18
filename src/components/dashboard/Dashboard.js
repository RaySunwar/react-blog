import React, { Fragment } from "react";
import Styled from "styled-components";
import Header from "../header/Header";
import Featured from "./Featured";
import LatestArticles from "./LatestArticles";
import Image0 from "./../images/image0.jpg";

const Nav = Styled.div`
  background-color: #ffffff;
  margin: 15px;
  padding: 0;
  max-width: 100%;
`;

const Subnav = Styled.div`
  display: flex;
  font-family: "Mulish", sans-serif;
`;

const NavLeft = Styled.div`
  margin-left: 2.5rem;
  margin-right: 1.5rem;
  text-align: left;
  width: 50%;
`;

const NavRight = Styled.div`
  display: block;
  margin-right: 4rem;
  padding-top: 2.5rem;  
  width: 50%; 
`;

const Title = Styled.h1`
  color: #424851;
  font-weight: 900;
  font-size: 4.2rem;
  margin-left: 0;
  padding-top: 3rem;
  text-align: left;
  box-sizing: inherit;
`;

const Content = Styled.p`
  box-sizing: inherit;
  color: #424851;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0;
`;

const Button = Styled.p`
  box-sizing: inherit;
  font-size: 1rem;
  margin-top: 0;
`;

const Anchor = Styled.a`
  background: #f13b3b;
  box-sizing: border-box;
  box-shadow: 0 10px 15px 0 rgba(241,59,59,0.2);
  color: #ffffff;
  display: inline-block;  
  font-size: 1.2rem;
  font-weight: bold;
  float: none;
  position: static;
  text-decoration: none;
  padding:  5px 20px 5px 20px;
  z-index: auto;
`;

const FirstImg = Styled.img`
  height: 540px;
  width: 100%;
`;

function Dashboard(){
  return(
    <Fragment>
      <Nav>
        <Header />
      </Nav>
      <Subnav>
        <NavLeft>
          <FirstImg src={Image0} alt="" />
        </NavLeft>
        <NavRight>
          <Title>Unleash Your <br />Creativity</Title>
          <Content>Johannes is a theme carefully designed and developed to get the most out of the new WordPress editor. Unleash the power of blocks - an awesome new way of creating rich content in WordPress!</Content>
          <Button><Anchor href="true">Find out more</Anchor></Button>
        </NavRight>
      </Subnav>
      < Featured />
      <LatestArticles />                      
    </Fragment>
  );
};

export default Dashboard;
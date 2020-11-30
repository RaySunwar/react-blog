import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Featured from "./Featured";
import LatestArticles from "./LatestArticles";
import { device } from "./../../mediaQueries";
import Image0 from "./../images/image0.jpg";

const Nav = styled.div`
  background-color: #ffffff;
  padding: 0;
  width: 100%;

  @media ${device.sm} {
    margin: 0;
    width: 100%;      
  }
`;

const Subnav = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  font-family: "Mulish", sans-serif;

  @media ${device.sm}{
    display: block;
    font-size: 2rem;
    padding-left: 7px;
    padding-right: 7px;
  }
`;

const NavLeft = styled.div`
  margin-left: 2.5rem;
  margin-right: 1.5rem;
  position: relative;
  text-align: left;
  max-width: 50%;

  @media ${device.sm}{
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
  
  &::after {
    background-color: #f2f3f3;
    border-top-left-radius: 63% 70%;
    border-top-right-radius: 37% 68%;
    border-bottom-right-radius: 50% 32%;
    border-bottom-left-radius: 50% 30%;
    background: rgba(66,72,81,0.1);
    content: "";
    display: block; 
    height: 608px;
    left: 25%;
    position: absolute;
    top: 0;
    width: 615px;
    z-index: -1;

    @media ${device.sm}{
      display: none;
    }
  };
`;

const NavRight = styled.div`
  display: block;
  margin-right: 4rem;
  padding-top: 2.5rem;  
  width: 50%;

  @media ${device.sm}{
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 10px;
    width: 100%;
  }
`;

const Title = styled.h1`
  box-sizing: inherit;
  color: #424851;
  font-weight: 900;
  font-size: 38px;
  margin-left: 0;
  padding-top: 3rem;
  text-align: left;

  @media ${device.sm}{
    font-size: 1.7rem;
    margin: 7px;
    padding-top: 0;
  }
`;

const Content = styled.p`
  box-sizing: inherit;
  color: #424851;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0;

  @media ${device.sm}{
    font-size: 1rem;
    padding-top: 0;
  }
`;

const Button = styled.p`
  box-sizing: inherit;
  font-size: 1rem;
  margin-top: 0;
`;

const Anchor = styled.a`
  background: #f13b3b;
  box-sizing: border-box;
  box-shadow: 0 10px 15px 0 rgba(241,59,59,0.2);
  color: #ffffff;
  display: inline-block;  
  font-size: 1.2rem;
  font-weight: bold;
  float: none;
  padding:  5px 20px 5px 20px;
  position: static;
  text-decoration: none;
  z-index: auto;

  @media ${device.sm}{
    font-size: 1rem;
    letter-spacing: -1px;
    font-weight: bold;
    padding: 5px 15px;
  }
`;

const FirstImg = styled.img`
  border: 0;
  border-top-left-radius: 63% 70%;
  border-top-right-radius: 37% 68%;
  border-bottom-right-radius: 50% 32%;
  border-bottom-left-radius: 50% 30%;
  object-fit: cover;
  height: auto;
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
          <Title>Unleash your <br/> creativity</Title>
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
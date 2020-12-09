import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Featured from "./Featured";
import LatestArticles from "./LatestArticles";
import breakpoint from "./../../mediaQueries";
import Image0 from "./../images/image0.jpg";

const Nav = styled.div`
  background-color: #ffffff;
  padding: 0;
  width: 100%;

  @media ${breakpoint.Mobile}, ${breakpoint.Tablet}, ${breakpoint.Laptop}, ${breakpoint.Desktop} {
    margin: 0;
    width: 100%;      
  }
`;

const Subnav = styled.div`
  margin: 0 68px;
  display: flex;
  font-family: "Mulish", sans-serif;

  @media ${breakpoint.Mobile}{
    display: block;
    font-size: 2rem;
    margin: 0 6px;
    padding: 0 10px;
  }

  @media ${breakpoint.Tablet}{
    display: block;
    margin: 0 20px;
    padding: 0 10px;
    max-width: 768px;
  }

  @media ${breakpoint.Laptop}{
    max-width: 1024px;
    margin: 0 14px;
  }
`;

const NavLeft = styled.div`
  padding-right: 53px;
  position: relative;
  text-align: left;
  max-width: 50%;

  @media ${breakpoint.Mobile}{
    max-width: 100%;
    padding-right: 0;
    text-align: left;
  };

  @media ${breakpoint.Tablet}{
    max-width: 100%;
    padding-right: 0;
    text-align: left;
  };

  @media ${breakpoint.Laptop}{
    max-width: 100%;
    padding-right: 15px;
    text-align: left;
  };
  
  &::after {
    background-color: #f2f3f3;
    border-top-left-radius: 63% 70%;
    border-top-right-radius: 37% 68%;
    border-bottom-right-radius: 50% 32%;
    border-bottom-left-radius: 50% 30%;
    background: rgba(66,72,81,0.1);
    content: "";
    display: block; 
    height: 611px;
    left: 25%;
    position: absolute;
    top: 0;
    width: 678px;
    z-index: -1;

    @media ${breakpoint.Mobile}{
      display: none;
    }

    @media ${breakpoint.Tablet}{
      display: none;
      height: 545px;
      width: 600px;
    }    

    @media ${breakpoint.Laptop}{
      display: flex;
      height: 558px;
      width: 537px;
    }  
  };
`;

const NavRight = styled.div`
  display: block;
  padding-top: 2.5rem;  
  width: 50%;

  @media ${breakpoint.Mobile}{
    margin-right: 0;
    padding-top: 0;
    width: 100%;
  }

  @media ${breakpoint.Tablet}{
    margin-right: 0;
    padding-top: 0;
    width: 100%;
  }

  @media ${breakpoint.Laptop}{
    margin-right: 0;
    padding-top: 5rem;
  }
`;

const Title = styled.h1`
  box-sizing: inherit;
  color: #424851;
  font-weight: 900;
  font-size: 50px;
  line-height: 50px;
  margin-left: 0;
  padding-top: 3rem;
  text-align: left;

  @media ${breakpoint.Mobile}{
    font-size: 1.7rem;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 15px;
    padding-top: 0;
    justify-content: center;
  }

  @media ${breakpoint.Tablet}{
    font-size: 35px;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 15px;
    padding-top: 3px;
    justify-content: center;
  }

  @media ${breakpoint.Laptop}{
    font-size: 1.7rem;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 15px;
    padding-top: 0;
    justify-content: center;
  }
`;

const Content = styled.p`
  box-sizing: inherit;
  color: #424851;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0;

  @media ${breakpoint.Mobile}{
    font-size: 1rem;
    margin-bottom: 0;
    justify-content: center;
  }

  @media ${breakpoint.Tablet}{
    font-size: 1rem;
    margin-bottom: 0;
    justify-content: center;
  }
`;

const Button = styled.p`
  box-sizing: inherit;
  margin-top: 0;

  @media ${breakpoint.Mobile}{
    margin-bottom: 0;
  }

  @media ${breakpoint.Tablet}{
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

const Anchor = styled.a`
  background: #f13b3b;
  box-sizing: border-box;
  box-shadow: 0 10px 15px 0 rgba(241,59,59,0.2);
  color: #ffffff;
  display: inline-block;  
  font-size: 1rem;
  font-weight: 900;
  float: none;
  padding:  5px 20px 5px 20px;
  position: static;
  text-decoration: none;
  z-index: auto;

  @media ${breakpoint.Mobile}{
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

function Dashboard() {
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
          <Title>Unleash your creativity</Title>
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
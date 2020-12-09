import React, { Fragment } from "react";
import Styled from "styled-components";
import breakpoints from "./../../mediaQueries";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Nav = Styled.div`
  background-color: #ffffff;
  font-family: "Mulish", Arial, sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;

  @media ${breakpoints.Tablet}{
    max-width: 768px;  
    width: 100%;
  };

  @media ${breakpoints.Laptop}{
    max-width: 1024px;  
    width: 100%;
  };

  @media ${breakpoints.Desktop}{
    max-width: 1200px;  
    margin: 0;
    padding: 0;
    width: 100%;
  };
`;

const NavHeader = Styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
  width: 100%;

  @media ${breakpoints.Mobile}{
    margin: auto;
    padding: auto;
    width: 100%;
  }

  @media ${breakpoints.Tablet}{
    margin: auto;
    padding: auto;
    width: 100%;
  }

  @media ${breakpoints.Laptop}{
    margin: auto;
    padding-bottom: 1rem;
    width: 100%;
  };

  @media ${breakpoints.Desktop}{
    margin: auto;
    padding-bottom: 2rem;
    width: 100%;
  }
`;

const NavLeft = Styled.div`
  text-align: left;
  width: 40%;
  padding-left: 60px;

  @media ${breakpoints.Mobile}{
    margin: 0;
    padding-left: 5px;
    width: 100%;
  }

  @media ${breakpoints.Tablet}{
    margin: 0;
    padding-left: 25px;
    width: 100%;
  }

  @media ${breakpoints.Laptop}{
    margin-left: 15px;
    padding-left: 0;   
    width: 100%;
  }

  @media ${breakpoints.Desktop}{
    margin: 0;
    padding-left: 60px;
    width: 40%;
  }
`;

const NavRight = Styled.div`
  display: flex;
  text-align: left;
  width: 60%;
  justify-content: flex-end;

  @media ${breakpoints.Mobile}{
    margin: 0;
    padding-right: 5px;
    width: 100%;
  }

  @media ${breakpoints.Tablet}{
    margin: 0;
    padding-right: 5px;
    width: 100%;
  }

  @media ${breakpoints.Laptop}{
    margin-left: 17px;
    margin-right: 15px;
    width: 100%;
  }
`;

const Title = Styled.h1`
  color: #f13b3b;
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;

  @media ${breakpoints.Mobile}{
    font-size: 24px;
    margin-top: 0;
  }

  @media ${breakpoints.Tablet}{
    font-size: 2rem;
    margin-top: 0;
  }

  @media ${breakpoints.Laptop}{
    font-size: 2rem;
  }

  @media ${breakpoints.Desktop}{
    font-size: 2rem;
  }

  &:hover {
  color: #424851;
  }
`;

const UnOrderList = Styled.ul`
  display: flex;
  justify-content: "space-between";
  list-style-type: none;
  margin: 0;
  padding-left: 1rem;
  
  @media ${breakpoints.Mobile}{
    display: none;
    font-size: 1.4rem;
    padding-right: 7.5px;
    padding-left: 7.5px;
  }

  @media ${breakpoints.Tablet}{
    display: none;
    font-size: 1.4rem;
    padding-right: 7.5px;
    padding-left: 7.5px;
  }

  @media ${breakpoints.Laptop}{
    font-size: 1.4rem;
    padding: 0;
  }
`;

const ListItem = Styled.li`
  color: #424851;
  display: inline-block;
  font-weight: 700;
  font-size: 1rem;
  position: relative;
  padding-right: 1rem;

  @media ${breakpoints.Laptop}{
    padding-right: 5px;
  }

  &:hover {
    color: #f13b3b;
    > ul {
      display: block;
    }
  }
 `;

const SubunorderList = Styled.ul`
  background: #ffffff;
  box-shadow: 0 15px 40px 0 rgba(0,0,0,.2);
  display: none;
  margin: 0;
  list-style: none;
  position: absolute;
  padding: 25px 0 25px 0;
  width: 220px;
  z-index: 9;
  top: 50px;
  left: -30px;
`;

const Sublistitem = Styled.li`
  position: relative;
`;

const Anchor = Styled.a`
  height: 50px;
  display: flex;
  margin: 0 0 0 4px;
  align-items: center;
  background: transparent;
  -webkit-box-align: center;
  text-decoration: none;

  @media ${breakpoints.Laptop}{
    /* font-size: 2rem;
    margin-top: 0;  */
  }

  &:hover :: before {
    color: #424851;
    display: block;
  }
`;

const Subanchor = Styled.a`
  color: #424851;
  display: block; 
  padding: 5px 20px;
  &:hover {
    color: #f13b3b;
  }
`;

const UnorderHamburger = Styled.ul`
  display: inline;
  justify-content: "space-between";
  margin: 0;
  padding-inline-start: 0;

  @media ${breakpoints.Mobile}{
    margin: 0;
    padding:0;
  }
`;

const ListHamburger = Styled.li`
  color: #424851;
  display: inline-block;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  position: relative;
  padding-right: 3.5rem;
  &:hover {
    color: #f13b3b;
  }
  
  @media ${breakpoints.Mobile}{
    padding-right: 0;
  }

  @media ${breakpoints.Tablet}{
    padding-right: 25px;
  }

  @media ${breakpoints.Laptop}{
    padding-right: 2px;
  }
`;

function Header() {
  return (
    <Fragment>
      <Nav>
        <NavHeader>
          <NavLeft>
            <Title>React Blog</Title>
          </NavLeft>
          <NavRight>
            <UnOrderList>
              <ListItem>
                <Anchor>Home
                  <IconContext.Provider
                    value={{
                      size: "1.5em",
                      style: { padding: "2px" },
                    }} 
                  >
                    <RiArrowDropDownLine />
                  </IconContext.Provider>
                </Anchor>
                <SubunorderList>
                  <Sublistitem><Subanchor>Example 1</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 2</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 3</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 4</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 5</Subanchor></Sublistitem>
                </SubunorderList>
              </ListItem>
              <ListItem>
                <Anchor>Layouts
                  <IconContext.Provider
                    value={{
                      size: "1.5em",
                      style: { padding: "2px" },
                    }} 
                  >
                    <RiArrowDropDownLine />
                  </IconContext.Provider>
                </Anchor>
                <SubunorderList>
                  <Sublistitem><Subanchor>Example 1</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 2</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 3</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 4</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 5</Subanchor></Sublistitem>
                </SubunorderList>

              </ListItem>
              <ListItem>
                <Anchor>Archives
                  <IconContext.Provider
                    value={{
                      size: "1.5em",
                      style: { padding: "2px" },
                    }} 
                  >
                    <RiArrowDropDownLine />
                  </IconContext.Provider>
                </Anchor>
                <SubunorderList>
                  <Sublistitem><Subanchor>Example 1</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 2</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 3</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 4</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 5</Subanchor></Sublistitem>
                </SubunorderList>
              </ListItem>
              <ListItem>
                <Anchor>Posts
                  <IconContext.Provider
                      value={{
                        size: "1.5em",
                        style: { padding: "2px" },
                      }} 
                    >
                      <RiArrowDropDownLine />
                  </IconContext.Provider>
                </Anchor>
                <SubunorderList>
                  <Sublistitem><Subanchor>Example 1</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 2</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 3</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 4</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 5</Subanchor></Sublistitem>
                </SubunorderList>
              </ListItem>
              <ListItem>
                <Anchor>Pages
                  <IconContext.Provider
                  value={{
                      size: "1.5em",
                      style: { padding: "2px" },
                    }} 
                  >
                    <RiArrowDropDownLine />
                  </IconContext.Provider>
                </Anchor>
                <SubunorderList>
                  <Sublistitem><Subanchor>Example 1</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 2</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 3</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 4</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 5</Subanchor></Sublistitem>
                </SubunorderList>
              </ListItem>
              <ListItem>
                <Anchor>Features
                  <IconContext.Provider
                    value={{
                      size: "1.5em",
                      style: { padding: "2px" },
                    }} 
                  >
                    <RiArrowDropDownLine />
                  </IconContext.Provider>
                </Anchor>
                <SubunorderList>
                  <Sublistitem><Subanchor>Example 1</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 2</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 3</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 4</Subanchor></Sublistitem>
                  <Sublistitem><Subanchor>Example 5</Subanchor></Sublistitem>
                </SubunorderList>
              </ListItem>
            </UnOrderList>
            <UnorderHamburger>
              <ListHamburger>
                <Anchor>Menu 
                  <IconContext.Provider
                    value={{
                      size: "1.1em",
                      style: { padding: "3px" },
                    }} 
                    >
                      <GiHamburgerMenu />
                  </IconContext.Provider>
                </Anchor>
              </ListHamburger>
            </UnorderHamburger>
          </NavRight>
        </NavHeader>
      </Nav>
    </Fragment>
  );
};

export default Header;
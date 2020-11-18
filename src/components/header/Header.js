import React, { Fragment } from "react";
import Styled from "styled-components";
import  { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine} from "react-icons/ri";

const Nav = Styled.div`
  background-color: #ffffff;
  font-family: "Mulish", Arial, sans-serif;
`;

const NavHeader = Styled.div`
  max-width: 100%;
  padding: 10px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = Styled.div`
  margin: 1rem;
  text-align: left;
  width: 40%;
`;

const Title = Styled.h1`
  color: #f13b3b;
  font-size: 2.5rem;
  font-weight: 900;
  &:hover {
  color: #424851;
  }
`;

const NavRight = Styled.div`
  display: flex;
  margin: 1rem;
  text-align: left;
  width: 60%;
`;

const UnOrderList = Styled.ul`
  display: flex;
  justify-content: "space-between";
  list-style-type: none;
`;

const ListItem = Styled.li`
  color: #424851;
  display: inline-block;
  font-weight: 700;
  font-size: 1rem;
  position: relative;
  padding-right: 1rem;
  &:hover {
    color: #f13b3b;
    > ul {
      display: block;
    }
  }
`;

const SubunorderList = Styled.ul`
  background: #ffffff;
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
  align-item: center;
  background: transparent;
  -webkit-box-align: center;
  text-decoration: none;
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
  padding-inline-start: 0;
`;

const ListHamburger = Styled.li`
  color: #424851;
  display: inline-block;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  position: relative;
  padding-right: 1.5rem;
  &:hover {
    color: #f13b3b;
  }
`;

function Header(){
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
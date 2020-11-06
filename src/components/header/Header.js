import React, { Fragment } from "react";
import Styled from "styled-components";

const Nav = Styled.div`
  background-color: #ffffff;
  font-family: "Mulish", sans-serif;
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
    color: black;
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
  display: inline-block;
  font-weight: 500;
  font-size: 1rem;
  justify-content: "space-between";
  position: relative;
  padding-right: 1rem;
  &:hover {
    color: #f13b3b;
  }
`;

const SubunorderList = Styled.ul`
  padding-left: 0;
  list-style-type: none;
  width: 150px;
  &:hover Sublistitem {
    display: block;
  }
`;

const Sublistitem = Styled.li`
  display: none;
  position: absolute;
`;

const Arrow = Styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 1px;
  margin: 7px 0 0 5px;
  padding: 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const Anchor = Styled.a`
  margin: 0 0 0 4px;
  &:hover {
    display: block;
  }
`;

const Subanchor = Styled.a`
  display: block;
  &:hover {
    background-color: green;
  }
`;

const UnorderHamburger = Styled.ul`
  display: inline;
  justify-content: "space-between";
  padding-inline-start: 0;
`;

const ListHamburger = Styled.li`
  display: inline-block;
  font-family: "Mulish", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  justify-content: "space-between";
  position: relative;
  padding-right: 1.5rem;
  &:hover {
    color: red;
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
                <Anchor>Home<Arrow /></Anchor>
              </ListItem>
              <ListItem>
                <Anchor>Layouts<Arrow /></Anchor>
                <SubunorderList>
                  <Sublistitem>
                    <Subanchor>A</Subanchor>
                    <Subanchor>B</Subanchor>
                    <Subanchor>C</Subanchor>
                  </Sublistitem>
                </SubunorderList>
              </ListItem>
              <ListItem>
                <Anchor>Archives<Arrow /></Anchor>
              </ListItem>
              <ListItem>
                <Anchor>Posts<Arrow /></Anchor>
              </ListItem>
              <ListItem>
                <Anchor>Pages<Arrow /></Anchor>
              </ListItem>
              <ListItem>
                <Anchor>Features<Arrow /></Anchor>
              </ListItem>
            </UnOrderList>
            <UnorderHamburger>
              <ListHamburger>
                <Anchor>Menu</Anchor>
              </ListHamburger>
            </UnorderHamburger>
          </NavRight>
        </NavHeader>
      </Nav>
    </Fragment>
  );
};

export default Header;
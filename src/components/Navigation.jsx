import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pages } from "../data";

const Wrapper = styled.div`
  display: flex;
  
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 32px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const Nav = styled.nav`
  flex: none;
  border-radius: 8px;
  padding: 12px 24px;
  background-color: blue;
  margin: 0 auto;
`;

const NavLink = styled.a`
  border-radius: 8px;
  flex: none;
  font-weight: 500;
  padding: 12px 24px;
  text-decoration: none;
  transition: background-color 200ms ease;

  &:hover {
    background-color: rgba(47, 66, 80, 0.2);
  }
`;

export function Navigation(props) {
  return (
    <Wrapper {...props}>
      <Nav>
        {pages.map((page, index) => (
          <NavLink as={Link} key={index} to={page.path}>
            {page.title}
          </NavLink>
        ))}
      </Nav>
    </Wrapper>
  );
}

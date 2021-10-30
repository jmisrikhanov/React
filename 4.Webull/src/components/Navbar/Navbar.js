import React from "react";
import styled from "styled-components/macro";

import {
  Button,
  ButtonContainer,
  Input,
  Logo,
  Nav,
  NavbarContainer,
  NavbarWrap,
  NavLink,
  Search,
  SearchWrap,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">MARKET</NavLink>
          <NavLink to="/">TRADE</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="Symbol/Name" />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button
            css={`
              color: #037cff;
              background: #fff;
            `}
          >
            SIGN UP
          </Button>
          <Button>LOG IN</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;

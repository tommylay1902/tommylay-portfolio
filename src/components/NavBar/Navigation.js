import React, { useEffect, useState } from "react";
import { NavLinks } from "./NavLinks";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <NavContainer>
      <Nav>
        <NavLinks></NavLinks>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
`;

const Nav = styled.nav``;

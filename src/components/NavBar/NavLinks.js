import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const NavLinks = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeIcon, setActiveIcon] = useState(
    "https://img.icons8.com/material-rounded/125/000000/home.png"
  );
  useEffect(() => {}, []);

  const activate = () => {
    setIsCollapsed((el) => !el);
  };
  return isCollapsed ? (
    <List>
      <ListElement>
        <Link href="#" onClick={activate}>
          <img src={activeIcon} />
        </Link>
      </ListElement>
    </List>
  ) : (
    <List>
      <ListElement>
        <Link href="#" onClick={activate}>
          <img src="https://img.icons8.com/material-rounded/125/000000/home.png" />
        </Link>
      </ListElement>
      <ListElement>
        <Link href="#" onClick={activate}>
          <img src="https://img.icons8.com/ios-filled/110/000000/paper.png" />
        </Link>
      </ListElement>
      <ListElement>
        <Link href="#" onClick={activate}>
          <img src="https://img.icons8.com/material-rounded/125/000000/linkedin--v1.png" />
        </Link>
      </ListElement>
      <ListElement>
        <Link href="#" onClick={activate}>
          <img src="https://img.icons8.com/ios-glyphs/135/000000/github.png" />
        </Link>
      </ListElement>
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding-right: 8vw;
`;

const ListElement = styled.li`
  font-size: calc(16px + 1vw);
  line-height: calc(2em + 0.5vw);
`;

const Link = styled.a`
  /* &:active {
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: black;
  } */
`;

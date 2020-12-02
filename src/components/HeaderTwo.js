
/*test header */
import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Twirl as Hamburger } from "hamburger-react";
/*import "../components/index.css"*/

const HeaderTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <Link to="/">
          <b>+ Land Kit</b>
        </Link>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <NavMenu isOpen={isOpen}>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index}>
              {item.title}
            </Link>
          ))}
        </NavMenu>
      </Nav>
    </>
  );
};

export default HeaderTwo;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  margin:0;
  overflow: auto;
  justify-content: space-between;
  z-index: 100;
  position: relative;

  .hamburger-react {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .hamburger-react {
      display: block;
    }
  }
`;

const link = styled.link`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  padding-top:20px;

  @media screen and (max-width: 600px) {
    position: fixed;
    display: block;
    width:100%
    right: 0;
    top: 80px;
    background: #837D7D;
    border: 1px solid black;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;
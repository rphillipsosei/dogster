import { useState } from "react";
import styled from "styled-components";
import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [openLogin, setOpenLogin] = useState();

  const clickHandler = () => {
    
  }

  return (
    <Nav>
      <Logo>
        <img src={logo} height={70} width={70} />
      </Logo>
      <ButtonContainer>
        <NavButton>LOG IN</NavButton>
        <NavButton>REGISTER</NavButton>
      </ButtonContainer>
    </Nav>
  );
}

const Nav = styled.div`
    color: #000000;
    // width: 100%;
    height: 100px;
    padding: 0.7rem; 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    // border: 3px solid rgba(12,121,190,255);
    // position: fixed;
    // top: 1%;
    background-color: #F7EEEC;
    background-image: url("https://www.transparenttextures.com/patterns/sprinkles.png");
  `;

const Logo = styled.a`
  // margin-left: 0.7rem;
    height: 70px;
    width: 70px;
    // border: 3px solid hotpink;
    text-decoration: none;
    margin-bottom: 0.7rem;
    cursor: pointer
    display: flex;
    justify-content: space-between;
    `;

const ButtonContainer = styled.div`
  width: 500px;
  // border: 4px solid green;
  display: flex;
  justify-content: flex-end;
`;

const NavButton = styled.button`
  width: 170px;
  height: 40px;
  font: 30px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: teal;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-right: 0.5rem;
`;

// Logo for the navbar.

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  text-decoration: none;
  font-size: 28;
  color: black;

`
const Logo = () => {

  return (
    <LogoWrap as={Link} to="/">
      <h1>Nordic Rose</h1>
    </LogoWrap>
  )
}

export default Logo

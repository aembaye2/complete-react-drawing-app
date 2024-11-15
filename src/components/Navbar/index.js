// components/Navbar/index.js

import React from "react"
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements"

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/ActLes09">Activity xx</NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
        <NavContainer>
            <NavLogo>Logo</NavLogo>
            <MobileIcon></MobileIcon>
            <NavItem>
                <NavLink>Home</NavLink>
            </NavItem>
            <ButtonContainer>
                <ResumeButton>Resume</ResumeButton>
            </ButtonContainer>
        </NavContainer>
    </Nav>
  )
}

export default Navbar
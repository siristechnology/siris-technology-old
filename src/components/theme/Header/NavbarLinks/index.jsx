import React from 'react'
import { Link } from 'gatsby';
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<Link to="/">Home</Link>
		<Link to="/#projects">Projects</Link>
		<a href='https://medium.com/siristechnology' rel='noopener noreferrer' target='_blank'>Blog</a>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
	</Wrapper>
)

export default NavbarLinks

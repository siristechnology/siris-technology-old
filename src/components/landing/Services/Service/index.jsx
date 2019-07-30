import React from 'react'
import { Wrapper, Grow, Title, Description } from './styles'

export default ({ icon, title, description }) => (
	<Wrapper>
		<Grow src={icon} alt={title} />
		<Title>{title}</Title>
		<Description>{description}</Description>
	</Wrapper>
)

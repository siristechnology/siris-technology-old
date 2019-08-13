import React from 'react'
import { Wrapper, Grow, Title, SubTitle } from './styles'

export default ({ theme, icon, name, title, description }) => (
	<Wrapper theme={theme}>
		<Grow>
			<img src={icon} alt={title} />
		</Grow>
		<Title>{name}</Title>
		<SubTitle>{title}</SubTitle>
		<p>{description}</p>
	</Wrapper>
)

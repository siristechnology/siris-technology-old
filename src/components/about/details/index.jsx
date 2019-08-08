import React from 'react'
import { Container } from 'Common'
import team from 'Static/illustrations/team.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const About = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={team} alt="Siris Technology" />
			</Thumbnail>
			<Details>
				<p>
				<b>Siris Technology</b> is a startup based in Northern Virginia, United States of America. Founded in 2019, we are a team of professionals with over 40 years of combined experience in software development.
				<br/><br/>
				Our team has experience in delivering high stake and mission critical applications in the field of aviation, defense, entertainment network, and many others.
				<br/><br/>
				We offer full life cycle development of customized and scalable applications to resolving operational and strategic objectives of small as well as large clients.
				<br/><br/>
				We are committed to delivering projects on schedule and on budget.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)

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
				<h1>Siris Technology</h1>
				<p>
					Since 2019, we have been working with clients to imagine and build
					software that people love to use. We care about who we work for and
					the quality of work we deliver, and that shows in the results we
					produce together.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)

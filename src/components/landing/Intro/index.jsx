import React from 'react'
import { Link } from 'gatsby'
import { Container, Button } from 'Common'
import org from 'Static/illustrations/website-build.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<IntroWrapper as={Container}>
			<Details>
				<h1>We build world-class software for you!</h1>
				<h4>We help imagine and create digital products people love to use.</h4>
				<Button as={Link} to="/contact">
					Get in touch
				</Button>
			</Details>
			<Thumbnail>
				<img src={org} alt="Siris Technology" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)

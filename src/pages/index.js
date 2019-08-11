import React from 'react'
import { OverlayWrapper, Layout, SEO } from 'Common'
import { Header } from 'Theme'
import {
	Intro,
	Services,
	Products,
	Technology,
	Projects,
} from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<OverlayWrapper>
			<Header />
			<Intro />
		</OverlayWrapper>
		<Services />
		<Products />
		<Technology />
		<Projects />
	</Layout>
)

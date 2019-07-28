import React from 'react'
import { Header } from 'Theme'
import { Layout, SEO } from 'Common'
import { About, Team } from 'Components/about'

export default () => (
	<Layout>
		<SEO />
		<Header />
		<About />
		<Team />
	</Layout>
)

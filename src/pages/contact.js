import React from 'react'
import { Header } from 'Theme'
import { Layout, OverlayWrapper, SEO } from 'Common'
import { Contact } from 'Components/contact'

export default () => (
	<Layout>
		<SEO />
		<OverlayWrapper>
			<Header />
			<Contact />
		</OverlayWrapper>
	</Layout>
)

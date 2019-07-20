import React from 'react'
import { Header } from 'Theme'
import { Layout, SEO } from 'Common'
import { Contact } from 'Components/contact'
import { Wrapper } from './styles'

export default () => (
	<Layout>
		<SEO />
		<Wrapper>
			<Header />
			<Contact />
		</Wrapper>
	</Layout>
)

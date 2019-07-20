import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'Components/common'
import Service from './Service'
import { Wrapper, Grid } from './styles'

export const Services = () => {
	const {
		services: { edges },
	} = useStaticQuery(graphql`
		query {
			services: allServicesYaml {
				edges {
					node {
						id
						title
						icon
						description
					}
				}
			}
		}
	`)
	return (
		<Wrapper>
			<Container>
				<h2>Services</h2>
				<Grid>
					{edges.map(({ node }) => (
						<Service key={node.id} {...node} />
					))}
				</Grid>
			</Container>
		</Wrapper>
	)
}

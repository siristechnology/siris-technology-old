import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'Components/common'
import ProfileCard from './profile-card'
import { Wrapper, Grid } from './styles'

export const Team = () => {
	const {
		team: { edges },
	} = useStaticQuery(graphql`
		query {
			team: allTeamYaml {
				edges {
					node {
						id
						name
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
				<h2>Team</h2>
				<Grid>
					{edges.map(({ node }) => (
						<ProfileCard key={node.id} {...node} />
					))}
				</Grid>
			</Container>
		</Wrapper>
	)
}

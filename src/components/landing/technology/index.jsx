import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import { Wrapper } from './styles'
import reactLogo from './logos/react-logo.png'
import reactNativeLogo from './logos/reactNative-logo.png'
import nodeJsLogo from './logos/nodejs-logo.png'
import graphQlLogo from './logos/graphQL-logo.png'
import mongoLogo from './logos/mongodb-logo.png'

export const Technology = () => {
	return (
		<Wrapper as={Container} id="products">
			<section className="technology-section">
				<div className="section-container">
					<div className="technology-title">
						<h2>Technologies we are passionate about</h2>
					</div>
					<div className="technology-list ic-react">
						<div className="tech-icon">
							<img src={reactLogo} />
						</div>
						<div className="tech-icon ic-rn">
							<img src={reactNativeLogo} />
						</div>
						<br />
						<br />
						<div className="tech-icon ic-nodejs">
							<img src={nodeJsLogo} />
						</div>
						<div className="tech-icon ic-ql">
							<img src={graphQlLogo} />
						</div>
						<div className="tech-icon ic-mongo">
							<img src={mongoLogo} />
						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	)
}

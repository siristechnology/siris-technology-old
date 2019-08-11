import React from 'react'
import { Container } from 'Common'
import phoneBg from 'Static/illustrations/iphone-feature-bg-02.svg'
import NepalTodayScreenShot from 'Static/thumbnail/NepalToday-screenshot.png'
import { Wrapper } from './styles'

export const Products = () => {
	return (
		<Wrapper as={Container} id="products">
			<div
				className="is-boxed has-animations is-loaded"
				style={{ height: '100%' }}
			>
				<section className="features-extended section">
					<div className="features-extended-inner section-inner">
						<div className="features-extended-wrap">
							<div className="container">
								<div className="feature-extended">
									<div className="feature-extended-image">
										<div className="mockup-bg">
											<img src={phoneBg} alt="NepalToday Android app" />
										</div>
										<img
											className="device-mockup is-revealing"
											src={NepalTodayScreenShot}
											alt="iPhone Feature 02"
											data-sr-id="2"
											style={{
												visibility: 'visible',
												opacity: 1,
												transform:
													'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
												transition:
													'opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s',
											}}
										/>
									</div>
									<div
										className="feature-extended-body is-revealing"
										data-sr-id="6"
										style={{
											visibility: 'visible',
											opacity: 1,
											transform:
												'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
											transition:
												'opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s',
										}}
									>
										<h3 className="mt-0 mb-16">NepalToday - news from Nepal</h3>
										<p className="m-0">
											NepalToday is a smart news app that organizes what’s
											happening in Nepal to help you learn more about the
											stories that matter to you.
										</p>
										<br />
										<a
											href="https://play.google.com/store/apps/details?id=com.siristechnology.nepaltodayapp"
											rel="noopener noreferrer"
											target="_blank"
										>
											Download from Google Play Store
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Wrapper>
	)
}

import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
	display: flex;
	section {
		display: block;
	}
	img {
		border-style: none;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	img {
		height: auto;
		max-width: 100%;
		vertical-align: middle;
	}
	img {
		display: block;
	}
	h3 {
		clear: both;
		color: #161e2a;
		font-family: 'Oxygen', sans-serif;
		font-weight: 600;
	}
	h3 {
		font-size: 28px;
		line-height: 34px;
		letter-spacing: 0px;
	}
	@media (min-width: 641px) {
		h3 {
			font-size: 32px;
			line-height: 42px;
			letter-spacing: 0px;
		}
	}
	h3 {
		margin-top: 36px;
		margin-bottom: 12px;
	}
	p {
		margin-top: 0;
		margin-bottom: 24px;
	}
	.container {
		width: 100%;
		margin: 0 auto;
		padding-left: 16px;
		padding-right: 16px;
	}
	@media (min-width: 481px) {
		.container {
			padding-left: 24px;
			padding-right: 24px;
		}
	}
	.container {
		max-width: 1128px;
	}
	.m-0 {
		margin: 0;
	}
	.mt-0 {
		margin-top: 0;
	}
	.mb-16 {
		margin-bottom: 16px;
	}
	.sr .has-animations .is-revealing {
		visibility: hidden;
	}
	.mockup-bg {
		pointer-events: none;
	}
	.mockup-bg img {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: auto !important;
		height: auto;
		max-width: 300% !important;
	}
	.device-mockup {
		position: relative;
		width: 350px;
		height: auto;
		margin: 0 auto;
		z-index: 1;
	}
	.has-animations .features-extended {
		opacity: 0;
	}
	.has-animations.is-loaded .features-extended {
		opacity: 1;
	}
	.features-extended-wrap {
		display: flex;
		flex-wrap: wrap;
		margin-top: -24px;
	}
	.features-extended-wrap:last-of-type {
		margin-bottom: -24px;
	}
	.feature-extended {
		padding: 24px 0;
	}
	.feature-extended-image {
		position: relative;
		margin-bottom: 32px;
	}
	.feature-extended-image img {
		width: 100%;
		max-width: 296px;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		overflow: visible;
	}
	.feature-extended-body {
		text-align: center;
	}
	@media (min-width: 641px) {
		.features-extended .container {
			max-width: 912px;
		}
		.features-extended .section-inner {
			padding-bottom: 128px;
		}
		.features-extended-wrap {
			margin-top: -64px;
		}
		.features-extended-wrap:last-of-type {
			margin-bottom: -64px;
		}
		.feature-extended {
			display: flex;
			flex-wrap: nowrap;
			align-items: stretch;
			justify-content: flex-end;
			padding: 64px 0;
		}
		.feature-extended .feature-extended-image {
			width: 440px;
			margin-right: 96px;
			margin-bottom: 0;
		}
		.feature-extended .feature-extended-image img {
			width: auto;
		}
		.feature-extended .feature-extended-image img.device-mockup {
			max-width: 296px;
		}
		.feature-extended:nth-child(even) {
			justify-content: flex-start;
		}
		.feature-extended:nth-child(even) .feature-extended-image {
			order: 1;
			margin-left: 96px;
			margin-right: 0;
		}
		.feature-extended-body {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex-shrink: 0;
			width: 360px;
			text-align: left;
		}
	}
	@media (min-width: 1025px) {
		.features-extended .container {
			max-width: 944px;
		}
		.feature-extended .feature-extended-image {
			margin-right: 64px;
		}
		.feature-extended:nth-child(even) .feature-extended-image {
			margin-left: 64px;
		}
		.feature-extended-body {
			width: 392px;
		}
	}
	.section-inner {
		position: relative;
		padding-top: 48px;
		padding-bottom: 48px;
	}
	@media (min-width: 641px) {
		.section-inner {
			padding-top: 88px;
			padding-bottom: 88px;
		}
	}
`

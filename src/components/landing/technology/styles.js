import styled from 'styled-components'

export const Wrapper = styled.div`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	@media (max-width: 600px) {
		section {
			padding: 40px 0;
		}
	}
	.section-container {
		max-width: 1540px;
		margin: 0 auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	@media (max-width: 991px) {
		.section-container {
			max-width: 720px;
			padding: 0 40px;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
		}
	}
	@media (max-width: 620px) {
		.section-container {
			padding: 0 16px;
		}
	}
	.tech-icon {
		height: 72px;
		background: no-repeat center center;
		background-size: contain;
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
		opacity: 0.6;
		max-width: 250px;
		display: inline-block;
		width: 100%;
		margin: 0 auto;
		-webkit-transition: all 0.2s;
		transition: all 0.2s;
		position: relative;
		margin: 16px;
	}
	.tech-icon.ic-mongo {
		top: -6px;
		-webkit-box-flex: 192;
		-ms-flex: 192 1 1%;
		flex: 192 1 1%;
		max-height: 61px;
	}
	.tech-icon.ic-nodejs {
		bottom: 6px;
		-webkit-box-flex: 150;
		-ms-flex: 150 1 1%;
		flex: 150 1 1%;
		max-height: 60px;
	}
	.tech-icon.ic-ql {
		-webkit-box-flex: 192;
		-ms-flex: 192 1 1%;
		flex: 192 1 1%;
		max-height: 61px;
	}
	.tech-icon.ic-react {
		-webkit-box-flex: 150;
		-ms-flex: 150 1 1%;
		flex: 150 1 1%;
		max-height: 57px;
	}
	.tech-icon.ic-rn {
		-webkit-box-flex: 293;
		-ms-flex: 293 1 1%;
		flex: 293 1 1%;
		max-height: 57px;
	}
	.tech-icon:hover {
		filter: grayscale(0);
		opacity: 1;
	}
	@media (max-width: 600px) {
		.tech-icon {
			margin: 0 10px;
		}
	}
	section {
		padding: 20px 0 40px 0;
	}
	@media (max-width: 600px) {
		section {
			padding: 40px 0;
		}
	}
	.section-container {
		max-width: 1540px;
		margin: 0 auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	@media (max-width: 991px) {
		.section-container {
			max-width: 720px;
			padding: 0 40px;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
		}
	}
	@media (max-width: 620px) {
		.section-container {
			padding: 0 16px;
		}
	}
	.technology-title {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-flex: 1;
		-ms-flex: 1 35%;
		flex: 1 35%;
		border-right: 1px solid rgba(151, 151, 151, 0.24);
		padding-right: 20px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.technology-title h2 {
	}
	.technology-list {
		-webkit-box-flex: 1;
		-ms-flex: 1 65%;
		flex: 1 65%;
		padding: 10px 0 10px 40px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.technology-list::before,
	.technology-list::after {
		content: '';
		width: 100%;
		-webkit-box-ordinal-group: 2;
		-ms-flex-order: 1;
		order: 1;
	}
	.technology-section .tech-icon:nth-child(n + 5) {
		-webkit-box-ordinal-group: 2;
		-ms-flex-order: 1;
		order: 1;
	}
	@media (max-width: 1200px) {
		.technology-title {
			text-align: center;
			border: 0;
		}
	}
	@media (max-width: 991px) {
		.technology-title {
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}
		.technology-list {
			padding: 0;
			margin-top: 20px;
		}
	}
	@media (max-width: 600px) {
		.technology-title {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			padding: unset;
		}
		.technology-list {
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
		}
		.technology-section .tech-icon:nth-child(n + 5) {
			-webkit-box-ordinal-group: unset;
			-ms-flex-order: unset;
			order: unset;
		}
		.technology-section .tech-icon:nth-child(n + 4) {
			-webkit-box-ordinal-group: 2;
			-ms-flex-order: 1;
			order: 1;
		}
		.technology-section .tech-icon:nth-child(n + 7) {
			-webkit-box-ordinal-group: 3;
			-ms-flex-order: 2;
			order: 2;
		}
	}
`

import styled from 'styled-components'

export const Wrapper = styled.div`
	text-align: left;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 680px) {
		margin-bottom: 2rem;
		text-align: center;

		&:last-child {
			margin-bottom: unset;
		}
	}

	p {
		text-align: justify;
	}

	${({ theme }) =>
		theme === 'dark'
			? `
    p {
			color: #BABABA;
			text-align: justify;
    }
  `
			: `
    p {
			color: #545454;
			text-align: justify;
    }
  `}
`

export const Grow = styled.div`
	height: 150px;
	overflow: hidden;
	border-radius: 6px !important;
	box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
		0 8px 10px -5px rgba(0, 0, 0, 0.2);
	margin-bottom: 10px;
	display: inline-block;

	img {
		width: 130px;
		transition: all 0.2s ease-in-out;
		margin: 0 auto 1rem auto;

		&:hover {
			transform: scale(1.1);
			transition: all 0.2s ease-in-out;
		}
	}

	@media (max-width: 680px) {
		height: 160px;

		img {
			width: 160px;
		}
	}
`

export const Title = styled.h4`
	color: #594cdd;
	font-weight: bold;
	margin-bottom: 0.5rem;
`
export const SubTitle = styled.div`
	font-size: 0.8rem;
	margin-bottom: 1.5rem;
`

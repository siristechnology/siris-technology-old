import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-bottom: 1.45rem;
	color: #212121;
	padding: 8rem 1rem 7rem 1rem;
	clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
	background: #f9f9f9;
	text-align: center;
`

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 2rem 0;
	margin: 0 auto;

	@media (max-width: 680px) {
		flex-direction: column;
	}
`

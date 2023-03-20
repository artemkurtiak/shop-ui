import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html, body, #__next {
		margin: 0;
		height: 100vh;
		background-color: ${({ theme }) => theme.colors.white};
		font-family: ${({ theme }) => theme.fonts.inter};
	}

	input {
		font-family: inherit;
		outline: none;
	}

	button {
		font-family: inherit;
		outline: none;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}
`;

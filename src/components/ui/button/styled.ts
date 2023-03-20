import styled from 'styled-components';

import { StyledButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  transition-duration: 0.3s;
  transition-property: background-color;
  background-color: ${({ theme, background }) => theme.colors[background]};

  :disabled {
    background-color: ${({ theme }) => theme.colors.satinWhite};
  }
`;

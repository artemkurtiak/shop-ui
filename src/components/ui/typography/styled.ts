import styled from 'styled-components';

import { StyledTypographyProps } from './types';

import { typographyUtils } from './utils';

export const StyledTypography = styled.div<StyledTypographyProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${(props) => `${typographyUtils.handleFontSize(props)}px`};
  line-height: ${(props) => `${typographyUtils.handleLineHeight(props)}px`};
  font-weight: ${(props) => `${typographyUtils.handleFontWeight(props)}`};
  text-align: ${(props) => props.align};
`;

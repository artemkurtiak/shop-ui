import React from 'react';

import { StyledInlineLink } from './styled';

import { InlineLinkProps } from './types';

import Typography from '../typography';

const InlineLink: React.FC<InlineLinkProps> = ({ href, children }) => {
  return (
    <StyledInlineLink href={href}>
      <Typography variant='text-sm' weight='medium' tag='span' color='denim'>
        {children}
      </Typography>
    </StyledInlineLink>
  );
};

export default InlineLink;

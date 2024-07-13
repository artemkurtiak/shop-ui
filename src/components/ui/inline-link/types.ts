import React from 'react';

export type InlineLinkProps = {
  href: string;
} & Required<React.PropsWithChildren>;

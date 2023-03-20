import Image from 'next/image';
import React from 'react';

import { LogoProps } from './types';

const Logo: React.FC<LogoProps> = ({ width = 250, height = 275 }) => {
  return (
    <Image
      width={width}
      height={height}
      priority
      src={'/assets/icons/logo.svg'}
      alt='Shopeam logo'
    />
  );
};

export default Logo;

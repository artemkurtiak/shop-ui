import React from 'react';

import { InputWrapper, StyledInput } from './styled';

import { InputProps } from './types';

import Typography from '../typography';

const Input: React.FC<InputProps> = ({ label, className, id, value, register, name, ...props }) => {
  return (
    <InputWrapper className={className}>
      {label ? (
        <Typography
          forId={id}
          align='left'
          tag='label'
          color='abbey'
          weight='medium'
          variant='text-sm'
        >
          {label}
        </Typography>
      ) : null}
      <StyledInput id={id} value={value} {...register?.(name)} {...props} />
    </InputWrapper>
  );
};

export default Input;

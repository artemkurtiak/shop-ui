import React from 'react';

import { CheckboxWrapper, StyledCheckbox } from './styled';

import { CheckboxProps } from './types';

import Typography from '../typography';

const Checkbox: React.FC<CheckboxProps> = ({ label, className, name, id, ...props }) => {
  return (
    <CheckboxWrapper className={className}>
      <StyledCheckbox type='checkbox' id={id} name={name} {...props} />
      {!!label ? (
        <Typography forId={id} tag='label' color='abbey' weight='medium' variant='text-sm'>
          {label}
        </Typography>
      ) : null}
    </CheckboxWrapper>
  );
};

export default Checkbox;

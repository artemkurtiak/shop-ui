import React from 'react';

export type CheckboxProps = {
  label?: string;
  name?: string;
} & Omit<React.HtmlHTMLAttributes<HTMLInputElement>, 'type'>;

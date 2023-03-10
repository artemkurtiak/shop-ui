import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type InputRHFProps =
  | {
      register: UseFormRegister<any>;
      name: string;
    }
  | {
      name: string;
      register?: never;
    };

type BaseInputProps = {
  label?: string;
  type?: 'text' | 'password' | 'number';
  value?: string | number;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type InputProps = BaseInputProps & InputRHFProps;

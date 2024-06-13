import { InputHTMLAttributes } from 'react';

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  autofocus?: boolean;
  onChange?: (value: string) => void;
}

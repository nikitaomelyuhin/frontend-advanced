import { InputHTMLAttributes } from 'react';

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  autofocus?: boolean;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

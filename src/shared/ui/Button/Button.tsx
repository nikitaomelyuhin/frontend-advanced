import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonProps, ButtonSize } from './Button.types';

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(
        cls.Button,
        {
          [cls.square]: square,
          [cls.disabled]: disabled,
        },
        [
          className,
          cls[theme],
          cls[size],
        ],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

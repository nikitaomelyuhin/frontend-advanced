import { FC, HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

const Themes = {
    clear: 'clear',
} as const;

type ButtonTheme = keyof typeof Themes;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

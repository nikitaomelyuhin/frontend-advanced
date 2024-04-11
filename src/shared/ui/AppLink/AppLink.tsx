import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

const Themes = {
    primary: 'primary',
    inverted: 'inverted',
} as const;

type LinkTheme = keyof typeof Themes;

interface AppLinkProps extends LinkProps {
    className?: string;
    to: string;
    theme?: LinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = Themes.primary,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

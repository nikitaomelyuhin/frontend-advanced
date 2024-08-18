import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { TextProps } from './Text.types';

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = 'primary',
    textAlign = 'left',
    size = 'm',
  } = props;

  return (
    <div className={classNames('', {}, [className, cls[theme], cls[size], cls[textAlign]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

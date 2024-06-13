import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AvatarSize } from './Avatar.types';

interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
  size?: AvatarSize;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size = 'md',
  } = props;

  return (
    <div className={classNames(cls.avatar, {}, [className, cls[size]])}>
      <img
        className={cls.image}
        src={src}
        alt={alt}
      />
    </div>
  );
};

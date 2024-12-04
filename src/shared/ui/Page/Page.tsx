import { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <div
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </div>

  );
};

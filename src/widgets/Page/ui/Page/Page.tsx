import { ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { getUiScrollByPath, uiActions } from '@/features/UI';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useIntialEffect';
import { StateSchema } from '@/shared/providers/StoreProvider';
import { useThrottle } from '@/shared/hooks/useThrottle/useThrottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUiScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({
      position: e.currentTarget?.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <div
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && (<div className={cls.trigger} ref={triggerRef} />)}
    </div>

  );
};

import {
  ReactNode, MouseEvent, useEffect, useCallback, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../../ui/Portal/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  lazy?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const TIMEOUT = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    lazy,
    onClose,
  } = props;

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeoutRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, TIMEOUT);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(
        cls.Modal,
        {
          [cls.open]: isOpen,
          [cls.closing]: isClosing,
        },
        [className],
      )}
      >
        <div
          className={cls.overlay}
          onClick={closeModal}
        >
          <div
            className={classNames(
              cls.content,
              { [cls.contentOpened]: isOpen },
            )}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};

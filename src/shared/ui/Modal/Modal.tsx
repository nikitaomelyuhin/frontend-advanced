import {
    ReactNode, MouseEvent, useEffect, useCallback, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const TIMEOUT = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState(false);

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
            clearTimeout(timeoutRef.current);
        };
    }, [isOpen, onKeyDown]);

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

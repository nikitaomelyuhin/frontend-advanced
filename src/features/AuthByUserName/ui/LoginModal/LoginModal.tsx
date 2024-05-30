import { memo, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      lazy
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader className={classNames(cls.loader)} />}>

        <LoginForm onCloseModal={onClose} />
      </Suspense>
    </Modal>
  );
});

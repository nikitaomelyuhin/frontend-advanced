import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { Input } from '@/shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Enter username')}
        autofocus
      />

      <Input
        type="text"
        className={cls.input}
        placeholder={t('Enter password')}
      />

      <Button
        className={cls.button}
        theme={ButtonThemes.OUTLINE}
      >
        {t('Sign in')}
      </Button>
    </div>
  );
};

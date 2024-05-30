import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { Text } from '@/shared/ui/Text/Text';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

export interface LoginFormProps {
  className?: string;
  onCloseModal?: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onCloseModal } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: true });

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
    onCloseModal();
  }, [dispatch, username, password, onCloseModal]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && <Text text={error} theme="error" />}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Enter username')}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />

      <Input
        type="text"
        className={cls.input}
        placeholder={t('Enter password')}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        className={cls.button}
        onClick={onLoginClick}
        theme={ButtonThemes.OUTLINE}
        disabled={isLoading}
      >
        {t('Sign in')}
      </Button>
    </div>
  );
});

export default LoginForm;

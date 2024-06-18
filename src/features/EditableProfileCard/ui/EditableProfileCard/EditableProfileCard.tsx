import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';
import { ProfileCard, ValidateProfileError } from '@/entities/Profile';
import { getEditableProfileLoading } from '../../model/selectors/getEditableProfileLoading/getEditableProfileLoading';
import { getEditableProfileError } from '../../model/selectors/getEditableProfileError/getEditableProfileError';
import { getEditableProfileForm } from '../../model/selectors/getEditableProfileForm/getEditableProfileForm';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { getEditableProfileReadonly } from '../../model/selectors/getEditableProfileReadonly/getEditableProfileReadonly';
import { editableProfileActions } from '../../model/slice/editableProfileSlice';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getEditableProfileValidateErrors } from '../../model/selectors/getEditableProfileValidateErrors/getEditableProfileValidateErrors';
import { Text } from '@/shared/ui/Text/Text';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const dispatch = useAppDispatch();
  const editableProfileForm = useSelector(getEditableProfileForm);
  const readonly = useSelector(getEditableProfileReadonly);
  const isLoading = useSelector(getEditableProfileLoading);
  const error = useSelector(getEditableProfileError);
  const validateErrors = useSelector(getEditableProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('First name and last name are required'),
    [ValidateProfileError.NO_DATA]: t('Unspecified data'),
    [ValidateProfileError.SERVER_ERROR]: t('Server error on saving'),
  };

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ first: value }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ city: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ avatar: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(editableProfileActions.updateForm({ country: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(editableProfileActions.updateForm({ currency: value }));
  }, [dispatch]);

  return (
    <div className={classNames(cls.editableProfileCard, {}, [className])}>
      {validateErrors?.length && validateErrors.map((err) => (
        <Text
          key={err}
          text={validateErrorTranslates[err]}
          theme="error"
        />
      ))}
      <ProfileCard
        error={error}
        isLoading={isLoading}
        profileData={editableProfileForm}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </div>
  );
});

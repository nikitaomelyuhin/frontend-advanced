import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';
import { ProfileCard } from '@/entities/Profile';
import { getEditableProfileLoading } from '../../model/selectors/getEditableProfileLoading/getEditableProfileLoading';
import { getEditableProfileError } from '../../model/selectors/getEditableProfileError/getEditableProfileError';
import { getEditableProfileForm } from '../../model/selectors/getEditableProfileForm/getEditableProfileForm';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { getEditableProfileReadonly } from '../../model/selectors/getEditableProfileReadonly/getEditableProfileReadonly';
import { editableProfileActions } from '../../model/slice/editableProfileSlice';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const editableProfileForm = useSelector(getEditableProfileForm);
  const readonly = useSelector(getEditableProfileReadonly);
  const isLoading = useSelector(getEditableProfileLoading);
  const error = useSelector(getEditableProfileError);

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

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { editableProfileActions, getEditableProfileReadonly } from '@/features/EditableProfileCard';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { updateProfile } from '@/entities/Profile';
import { getEditableProfileForm } from '@/features/EditableProfileCard/model/selectors/getEditableProfileForm/getEditableProfileForm';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getEditableProfileReadonly);
  const editableProfileForm = useSelector(getEditableProfileForm);

  const onEdit = () => {
    dispatch(editableProfileActions.changeReadonly(false));
  };

  const onCancel = () => {
    dispatch(editableProfileActions.cancelEdit());
  };

  const onSave = async () => {
    if (!editableProfileForm) return;

    await dispatch(updateProfile(editableProfileForm));
  };

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      <div className={cls.buttons}>
        {readonly
          ? (
            <Button
              onClick={onEdit}
              theme={ButtonThemes.OUTLINE}
            >
              {t('Edit')}
            </Button>
          )
          : (
            <>
              <Button
                onClick={onCancel}
                theme={ButtonThemes.OUTLINE_DANGER}
              >
                {t('Cancel')}
              </Button>
              <Button
                onClick={onSave}
                theme={ButtonThemes.OUTLINE}
              >
                {t('Save')}
              </Button>
            </>
          )}
      </div>

    </div>
  );
};

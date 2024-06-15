import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { Input } from '@/shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text } from '@/shared/ui/Text/Text';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';

interface ProfileCardProps {
  className?: string;
  profileData?: Profile;
  isLoading: boolean;
  error: string | null;
  readonly: boolean;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeAvatar: (value: string) => void;
  onChangeCountry: (value: Country) => void;
  onChangeCurrency: (value: Currency) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    profileData,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.loading, {}, [cls.profileCard])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.error, {}, [cls.profileCard])}>
        <Text
          title={t('Cannot get profile data')}
          text={t('Try to reload page')}
          theme="error"
          textAlign="center"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, { [cls.profileCardEdit]: !readonly }, [className])}>
      <div className={cls.header}>
        {profileData?.avatar && (
          <Avatar
            src={profileData.avatar}
            alt="user avatar"
            size="lg"
          />
        )}
      </div>
      <div className={cls.data}>
        <Input
          placeholder={t('Enter firstname')}
          readonly={readonly}
          value={profileData?.first ?? ''}
          onChange={onChangeFirstName}
        />
        <Input
          placeholder={t('Enter lastname')}
          readonly={readonly}
          value={profileData?.lastname ?? ''}
          onChange={onChangeLastName}
        />
        <Input
          placeholder={t('Enter age')}
          readonly={readonly}
          value={profileData?.age ?? ''}
          onChange={onChangeAge}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <Input
          placeholder={t('Enter city')}
          readonly={readonly}
          value={profileData?.city ?? ''}
          onChange={onChangeCity}
        />
        <Input
          placeholder={t('Enter avatar src')}
          readonly={readonly}
          value={profileData?.avatar ?? ''}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          readonly={readonly}
          value={profileData?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          readonly={readonly}
          value={profileData?.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
});

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Page } from '@/shared/ui/Page/Page';

interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      {t('Main page')}
      <Input
        value={value}
        onChange={onChange}
        placeholder="Введите текст"
      />
    </Page>
  );
};

export default MainPage;

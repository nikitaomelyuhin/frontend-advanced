import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';
import { Page } from '@/shared/ui/Page/Page';

interface AboutPageProps {
    className?: string;
}

const AboutPage = (props: AboutPageProps) => {
  const { className } = props;

  const { t } = useTranslation('about');

  return (
    <Page className={classNames(cls.AboutPage, {}, [className])}>
      {t('About page')}
    </Page>
  );
};

export default AboutPage;

import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './AboutPage.module.scss'
import {useTranslation} from "react-i18next";

interface AboutPageProps {
    className?: string;
}

const AboutPage = (props: AboutPageProps) => {
    const { className } = props;

    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            {t('About page')}
        </div>
    );
};

export default AboutPage;
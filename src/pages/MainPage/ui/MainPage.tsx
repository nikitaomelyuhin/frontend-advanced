import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './MainPage.module.scss'
import {useTranslation} from "react-i18next";

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t('Main page')}
        </div>
    );
};

export default MainPage;
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChange: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChange } = props;
  const { t } = useTranslation();

  const tabs = useMemo<TabItem<ArticleType>[]>(() => {
    return [
      {
        value: ArticleType.ALL,
        content: t('All'),
      },
      {
        value: ArticleType.IT,
        content: t('IT'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Science'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Economics'),
      },
    ];
  }, [t]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={tabs}
      value={value}
      onTabClick={onChange}
    />
  );
});

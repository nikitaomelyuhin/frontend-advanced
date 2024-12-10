import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/Text/Text';
import { TextSizes } from '@/shared/ui/Text/Text.types';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.SMALL,
  } = props;

  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        target={target}
      />
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <Text
        className={cls.noData}
        title={t('Articles not found')}
        size={TextSizes.L}
      />
    );
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}
      {isLoading && (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
          {
            new Array(view === ArticleView.SMALL ? 9 : 3)
              .fill(0)
              .map((_, index) => (
                <ArticleListItemSkeleton
                  key={index}
                  view={view}
                />
              ))
          }
        </div>
      )}
    </div>
  );
};

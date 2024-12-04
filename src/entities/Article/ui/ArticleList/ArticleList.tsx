import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
      />
    );
  };

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

import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {
  ArticleList, ArticleListView, ArticleView,
} from '@/entities/Article';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice/articlesPageSlice';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useIntialEffect';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageLoading, getArticlesPageView,
} from '../../model/selectors/articlesListSelectors';
import { Page } from '@/shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlesPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);

  useDynamicModuleLoader({ reducers: initialReducers });

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <Page
      className={classNames(cls.articlesPage, {}, [className])}
      onScrollEnd={onLoadNextPart}
    >
      <ArticleListView
        view={view}
        onClickView={onChangeView}
      />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    </Page>
  );
};

export default memo(ArticlesPage);

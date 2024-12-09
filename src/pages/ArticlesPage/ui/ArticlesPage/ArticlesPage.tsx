import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  ArticleList, ArticleListView, ArticleView,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useIntialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import {
  getArticlesPageLoading, getArticlesPageView,
} from '../../model/selectors/articlesListSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

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
  const [searchParams] = useSearchParams();

  useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: false });

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <Page
      className={classNames(cls.articlesPage, {}, [className])}
      onScrollEnd={onLoadNextPart}
    >
      <ArticlesPageFilters />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={cls.list}
      />
    </Page>
  );
};

export default memo(ArticlesPage);

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ArticleDetails, ArticleList } from '@/entities/Article';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useIntialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { TextSizes } from '@/shared/ui/Text/Text.types';
import { Page } from '@/widgets/Page';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  useDynamicModuleLoader({ reducers: initialReducers });

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />
      <div className={cls.recommendations}>
        <Text
          className={cls.commentTitle}
          title={t('Recommend')}
          size={TextSizes.L}
        />
        <ArticleList
          className={cls.recommendationsList}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target="_blank"

        />
      </div>

      <Text
        className={cls.commentTitle}
        title={t('Comments')}
        size={TextSizes.L}
      />
      <AddCommentForm
        onSendComment={onSendComment}
      />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </Page>
  );
};

export default memo(ArticleDetailsPage);

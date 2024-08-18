import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { Text } from '@/shared/ui/Text/Text';
import { TextAligns } from '@/shared/ui/Text/Text.types';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: true });

  const renderComponent = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;

    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;

    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton
          className={cls.title}
          width={300}
          height={32}
        />
        <Skeleton
          className={cls.skeleton}
          width={600}
          height={24}
        />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
        />
        <Skeleton
          className={cls.skeleton}
          width="100%"
          height={200}
        />
      </>
    );
  } else if (error) {
    content = (
      <Text
        textAlign={TextAligns.CENTER}
        title={t('An error occurred while loading the article')}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.header}>
          <div className={cls.avatarWrapper}>
            <Avatar
              className={cls.avatar}
              size="xl"
              src={article?.img}
            />
          </div>
          <Text
            size="l"
            className={cls.title}
            title={article?.title}
            text={article?.subtitle}
          />
          <div className={cls.avatarInfo}>
            <Icon
              Svg={EyeIcon}
            />
            <Text
              text={String(article?.views)}
            />
          </div>
          <div className={cls.avatarInfo}>
            <Icon
              Svg={CalendarIcon}
            />
            <Text
              text={article?.createdAt}
            />
          </div>
        </div>

        <div className={cls.blocks}>
          {article?.blocks.map((block) => (
            renderComponent(block)
          ))}
        </div>
      </>
    );
  }

  return (
    <div className={classNames(cls.articleDetails, {}, [className])}>
      {content}
    </div>
  );
});

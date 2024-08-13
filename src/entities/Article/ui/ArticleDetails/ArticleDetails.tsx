import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

interface ArticleDetailsProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className } = props;
  useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: true });

  return (
    <div className={classNames(cls.articleDetails, {}, [className])}>
      ArticleDetails
    </div>
  );
});

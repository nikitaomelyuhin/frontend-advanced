import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  _inited: boolean;
  order: SortOrder;
  search: string;
  sort: ArticleSortField;
  type: ArticleType;
}

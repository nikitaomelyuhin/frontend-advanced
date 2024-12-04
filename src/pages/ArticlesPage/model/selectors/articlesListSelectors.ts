import { ArticleView } from '@/entities/Article';
import { StateSchema } from '@/shared/providers/StoreProvider';

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading ?? false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error ?? '';
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? ArticleView.SMALL;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit ?? 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore ?? true;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1;
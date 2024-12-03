import { ArticleView } from '@/entities/Article';
import { StateSchema } from '@/shared/providers/StoreProvider';

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading ?? false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error ?? '';
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? ArticleView.SMALL;

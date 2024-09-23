import { StateSchema } from '@/shared/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';

export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error ?? '';

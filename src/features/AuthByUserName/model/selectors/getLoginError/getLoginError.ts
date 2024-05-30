import { StateSchema } from '@/shared/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state?.login?.error ?? '';

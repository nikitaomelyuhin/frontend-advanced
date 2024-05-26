import { StateSchema } from '@/shared/providers/StoreProvider';

export const getLoginPassword = (state: StateSchema) => state.login.password;

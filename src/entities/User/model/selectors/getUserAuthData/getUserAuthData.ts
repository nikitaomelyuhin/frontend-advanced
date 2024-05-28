import { StateSchema } from '@/shared/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;

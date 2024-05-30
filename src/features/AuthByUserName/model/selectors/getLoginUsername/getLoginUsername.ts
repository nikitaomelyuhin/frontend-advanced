import { StateSchema } from '@/shared/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.login?.username ?? '';

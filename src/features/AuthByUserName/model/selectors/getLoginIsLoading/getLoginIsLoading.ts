import { StateSchema } from '@/shared/providers/StoreProvider';

export const getLoginLoading = (state: StateSchema) => state?.login?.isLoading ?? false;

import { StateSchema } from '@/shared/providers/StoreProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;

import { StateSchema } from '@/shared/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;

import { StateSchema } from '@/shared/providers/StoreProvider';

export const getProfileData = (state: StateSchema) => state.profile?.error;

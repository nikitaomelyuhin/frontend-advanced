import { StateSchema } from '@/shared/providers/StoreProvider';

export const getEditableProfileData = (state: StateSchema) => state?.editableProfile?.data;

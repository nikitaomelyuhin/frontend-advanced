import { StateSchema } from '@/shared/providers/StoreProvider';

export const getEditableProfileLoading = (state: StateSchema) => state?.editableProfile?.isLoading;

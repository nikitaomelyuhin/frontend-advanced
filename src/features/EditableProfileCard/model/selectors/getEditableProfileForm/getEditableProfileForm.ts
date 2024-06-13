import { StateSchema } from '@/shared/providers/StoreProvider';

export const getEditableProfileForm = (state: StateSchema) => state?.editableProfile?.form;

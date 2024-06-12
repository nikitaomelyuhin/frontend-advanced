import { StateSchema } from '@/shared/providers/StoreProvider';

export const getEditableProfileReadonly = (state: StateSchema) => state?.editableProfile?.readonly;

import { StateSchema } from '@/shared/providers/StoreProvider';

export const getEditableProfileError = (state: StateSchema) => state?.editableProfile?.error ?? null;

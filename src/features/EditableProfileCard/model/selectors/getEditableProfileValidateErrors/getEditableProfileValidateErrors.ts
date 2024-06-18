import { StateSchema } from '@/shared/providers/StoreProvider';

export const getEditableProfileValidateErrors = (state: StateSchema) => state.editableProfile?.validateErrors;

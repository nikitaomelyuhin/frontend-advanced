import { editableProfileSlice } from './model/slice/editableProfileSlice';

export { getEditableProfileReadonly } from './model/selectors/getEditableProfileReadonly/getEditableProfileReadonly';

export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';

export { EditableProfileSchema } from './model/types/editableProfile';

export const { actions: editableProfileActions } = editableProfileSlice;
export const { reducer: editableProfileReducer } = editableProfileSlice;

import { editableProfileSlice } from './model/slice/editableProfileSlice';

export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';

export { EditableProfileSchema } from './model/types/editableProfile';

export const { actions: editableProfileActions } = editableProfileSlice;
export const { reducer: editableProfileReducer } = editableProfileSlice;

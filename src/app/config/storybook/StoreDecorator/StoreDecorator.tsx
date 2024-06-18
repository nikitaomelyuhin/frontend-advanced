import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/shared/providers/StoreProvider';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { loginReducer } from '@/features/AuthByUserName';
import { editableProfileReducer } from '@/features/EditableProfileCard';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  editableProfile: editableProfileReducer,
};
export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
};

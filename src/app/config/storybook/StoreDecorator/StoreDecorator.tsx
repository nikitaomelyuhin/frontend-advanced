import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/shared/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
};

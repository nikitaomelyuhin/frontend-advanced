import { StateSchema } from '@/shared/providers/StoreProvider';
import { getEditableProfileLoading } from './getEditableProfileLoading';

describe('getEditableProfileLoading', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        isLoading: true,
      },
    };
    expect(getEditableProfileLoading(state as StateSchema)).toBeTruthy();
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditableProfileLoading(state as StateSchema)).toBeFalsy();
  });
});

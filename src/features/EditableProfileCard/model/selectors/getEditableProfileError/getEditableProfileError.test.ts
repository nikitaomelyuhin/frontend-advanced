import { StateSchema } from '@/shared/providers/StoreProvider';
import { getEditableProfileError } from './getEditableProfileError';

describe('getEditableProfileError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        error: 'error',
      },
    };
    expect(getEditableProfileError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditableProfileError(state as StateSchema)).toBeNull();
  });
});

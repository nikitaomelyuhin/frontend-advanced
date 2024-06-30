import { StateSchema } from '@/shared/providers/StoreProvider';
import { getEditableProfileReadonly } from './getEditableProfileReadonly';

describe('getEditableProfileReadonly', () => {
  test('should return falsy readonly', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        readonly: false,
      },
    };
    expect(getEditableProfileReadonly(state as StateSchema)).toBeFalsy();
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditableProfileReadonly(state as StateSchema)).toBeTruthy();
  });
});
